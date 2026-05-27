import React from 'react'
  import { Link , NavLink} from 'react-router-dom'

function RightImage({imageURL,productName,productDescription,learnMore}) {
    return (
      <div className='container mt-3'>
            <div className='row p-4'>
        
            <div className='col-6 mt-2 p-4'>
                <h1 className='mb-2 fs-1 p-4'>{productName}</h1>
                <p>{productDescription}</p>
                <div className='mt-4'>
               
                <Link to={learnMore}style={{ color: "blue", textDecoration: "none" }} >Learn more <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link></div>
               

            </div>
                <div className='col-6 p-4'>
                <img src={imageURL}/>
            </div>
            </div>
        </div>
    )
}

export default RightImage
