import { useState } from 'react'
import Top from './sections/layout/top';
import Header from './sections/layout/header';
import Footer from './sections/layout/footer';
import BannerArea from './sections/banner/bannerArea';
import AboutOne from './sections/about/aboutOne';

function App() {

  return (
    <>
      <Top/>
      <Header/>
      
      <BannerArea/>
      <AboutOne/>


      <Footer/>

    </>
  )
}

export default App

