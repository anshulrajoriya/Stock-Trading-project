  import React from 'react'
  import Hero from './Hero'
  import LeftImage from './LeftImage'
  import RightImage from './RightImage'
  import Universal from './Universe'
  function Productpage() {
    return (
        <div>
         <Hero/>
            <LeftImage imageURL='media/imges/kite.png'productName='Kite'productDescription='Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.'tryDemo=''learnMore=''googlePlay=''appStore='' />
                      <RightImage/>
  <LeftImage imageURL='media/imges/coin.png'productName='Coin'productDescription='Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.'tryDemo=''learnMore=''googlePlay=''appStore='' />
              <RightImage/>
 <LeftImage imageURL='media/imges/varsity.png'productName='Varsity Modile'productDescription='An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.'tryDemo=''learnMore=''googlePlay=''appStore='' />

            <RightImage/>
            <Universal/> 
            hiiiiii
        </div>
    )
  }
  
  export default Productpage
  