// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import Banner from './components/banner';
import Delivery from './components/Delivery';
import Overview from './components/overview';
import Recipies from './components/Recipies';
import Collection from './components/Collection';
import Chefs from './components/Chefs';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function App() {


  return (
    <>
  <Header />
 
  <Banner/>   

  <Delivery/>

  <Overview/>

  <Recipies/>

  <Collection/>

  <Chefs/>

  <Testimonial/>

  <Footer/>



  
    </>
  )
}

export default App
