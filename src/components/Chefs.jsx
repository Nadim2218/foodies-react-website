import React from "react";
import chef from "../assets/chef.png";
import chef2 from "../assets/chef2.png";
import chef3 from "../assets/chef3.png";
import chef4 from "../assets/chef4.png";

import { FaArrowRight } from "react-icons/fa";

const Chefs = () => {
  return (
    <>
      <section className="chefs">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-9 col-sm-9">
              <div className="delivery-head">
                <h3>
                  <span>Meet Our</span> Chefs
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-sm-3">
              <div className="see-more-btn text-end">
                <button className="see-btn">
                  See More <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
          <div className="row gapp">
            <div className="col-lg-3 col-sm-4">
              <div className="chefs-img text-center">
                <img src={chef} className="w-100" alt="" />
                <p>John Doe</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4">
              <div className="chefs-img text-center">
                <img src={chef2} className="w-100" alt="" />
                <p>John Doe</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4">
              <div className="chefs-img text-center">
                <img src={chef3} className="w-100" alt="" />
                <p>John Doe</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4">
              <div className="chefs-img text-center">
                <img src={chef4} className="w-100" alt="" />
                <p>John Doe</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chefs;
