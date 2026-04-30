import React from 'react'
  import { Link , NavLink} from 'react-router-dom'

function LeftImage({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return (
        <div className='container mt-3'>
            <div className='row p-4'>
            <div className='col-6 p-4'>
                <img src={imageURL}/>
            </div>
            <div className='col-6 mt-2 p-4'>
                <h1 className='mb-2 fs-1 p-4'>{productName}</h1>
                <p>{productDescription}</p>
                <div className='mt-4'>
                <Link to={tryDemo}style={{ color: "blue", textDecoration: "none", display: "inline-block", marginRight: "50px" }}>Try demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                <Link to={learnMore}style={{ color: "blue", textDecoration: "none" }} >Learn more <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link></div>
               <div className="mt-4 d-flex align-items-center">
  <Link to={googlePlay}>
    <img 
      src='media/imges/googlePlayBadge.svg' 
      alt="Google Play"
      style={{ height: "45px" }}
    />
  </Link>

  <Link to={appStore} className="ms-3">
    <img 
      src='media/imges/appstoreBadge.svg' 
      alt="App Store"
      style={{ height: "45px" }}
    />
  </Link>
</div>

            </div>
            </div>
        </div>
    )
}

export default LeftImage
