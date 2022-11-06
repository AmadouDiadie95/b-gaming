import React from 'react'
import Footer from '../../footer/Footer'
import HeaderFour from '../../header/HeaderFour'
import BlogArea from './BlogArea'
import BrandArea from './BrandArea'
import FeatureArea from './FeatureArea'
import HomeFour from './HomeFour'
import ShopArea from './ShopArea'
import SliderArea from './SliderArea'
import CtaArea from "../indextwo/CtaArea";
import GamesAreatwo from "../indextwo/GamesAreatwo";
import GameGallery from "../indexthree/GameGallery";
import AboutArea from "../indexthree/AboutArea";
import MatchArea from "../indexthree/MatchArea";

const IndexFour = () => {
  return (
    <>  
    <HeaderFour/>
   
    <main>
      <SliderArea/>
      <BrandArea/>
      <AboutArea/>
      <GameGallery/>
      <CtaArea/>
      <GamesAreatwo/>
      <ShopArea/>
      {/*<HomeFour/>
      <FeatureArea/>
      <BlogArea/>*/}
    </main>
    <Footer/>
    </>
  )
}

export default IndexFour
