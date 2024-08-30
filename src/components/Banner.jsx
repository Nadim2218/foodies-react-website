import React from 'react'
import banner from "../assets/banner.png";

const Banner = () => {
  return (
 
      <>
      <section className='bg-black banner'>
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                 <div className="banner-text">
                  <h1>The taste of traditions's with a modern twist</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptas? Voluptate veniam sapiente harum, a qui veritatis obcaecati nostrum quidem quis expedita unde amet ducimus!</p>
                  <div className="banner-button">
                    <button className='btn2'>Get Started</button>
                    <button className='btn3'>See Our Foods</button>
                  </div>
                 </div>
                </div>
                <div className="col-lg-5">
                 <div className="banner-img">
                  <img src={banner} alt="" />
                 </div>
                </div>
            </div>
        </div>
      </section>
      
      
      </>


  )
}

export default Banner