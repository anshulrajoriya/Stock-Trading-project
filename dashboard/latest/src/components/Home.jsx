import React from "react";

import Dashboard from "./Dashboards";
import TopBar from "./TopBar";

const Home = () => {
  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;


// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Home Page 🏠</h1>
//       <Link to="/dashboard">
//         <button>Go to Dashboard 🚀</button>
//       </Link>
//     </div>
//   );
// }

// export default Home;