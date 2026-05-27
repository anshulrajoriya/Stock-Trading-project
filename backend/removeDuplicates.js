const mongoose = require("mongoose");
const { HoldingModel } = require("./models/HoldingModel");
mongoose.connect("mongodb://anshulrajoriya007_db_user:stocktrading@ac-jkyvckl-shard-00-00.dx2svvo.mongodb.net:27017,ac-jkyvckl-shard-00-01.dx2svvo.mongodb.net:27017,ac-jkyvckl-shard-00-02.dx2svvo.mongodb.net:27017/?ssl=true&replicaSet=atlas-jh4kxi-shard-0&authSource=admin&appName=stocktrading")
.then(async () => {

    const duplicates = await HoldingModel.aggregate([
        {
            $group: {
                _id: "$name",
                ids: { $push: "$_id" },
                count: { $sum: 1 }
            }
        },
        {
            $match: {
                count: { $gt: 1 }
            }
        }
    ]);

    for (const item of duplicates) {
        item.ids.shift();

        await HoldingModel.deleteMany({
            _id: { $in: item.ids }
        });
    }

    console.log("Duplicate data removed ✅");

    mongoose.connection.close();
})
.catch(err => console.log(err));