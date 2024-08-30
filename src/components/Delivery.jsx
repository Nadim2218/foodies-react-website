import React from 'react'
import delivery1 from "../assets/delivery1.png";
import delivery2 from "../assets/delivery2.png";
import delivery3 from "../assets/delivery3.png";

const Delivery = () => {
  return (
    <>
    <section className='delivery'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="delivery-head text-center">
                        <h3>Why <span>Foodies's</span></h3>
                    </div>
                </div>
            </div>
            <div className="row gapp mt-5">
                <div className="col-lg-4 col-md-4">
                    <div className="delivery-main text-center">
                       <img src={delivery1} alt="" />
                       <h3>Easy To Order</h3>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="delivery-main text-center">
                       <img src={delivery2} alt="" />
                       <h3>Fastest Delivery</h3>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="delivery-main text-center">
                       <img src={delivery3} alt="" />
                       <h3>Best Quality</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Delivery