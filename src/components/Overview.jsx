import React from 'react'
import overview from "../assets/overview.png";

const Overview = () => {
  return (
    <>
    <section className='overview'>
        <div className="container">
            <div className="row gapp">
                <div className="col-lg-6 order-lg-1 order-2">
                    <div className="overview-img">
                     <img src={overview} className='w-100' alt="" />
                    </div>
                </div>
                <div className="col-lg-6 order-lg-2 order-1">
                    <div className="overview-content">
                        <h5>OVERVIEW</h5>
                        <h2>A little information for our guest</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quidem veritatis cum cupiditate suscipit autem nisi fugiat quae amet. At beatae mollitia odio tempore est, laborum aliquid voluptatum accusamus neque?</p>
                        <div className="overview-counter">
                           <ul className='d-flex justify-content-between'>
                            <li>
                                <h3>15K</h3>
                                <p>Happy Customer</p>
                            </li>
                            <li>
                                <h3>10K</h3>
                                <p>Award Win</p>
                            </li>
                            <li>
                                <h3>30+</h3>
                                <p>Food Menu</p>
                            </li>
                           </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Overview