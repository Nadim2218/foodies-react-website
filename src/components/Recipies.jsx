import React from "react";
import re1 from "../assets/r1.png";
import r2 from "../assets/r2.png";
import r3 from "../assets/r3.png";
import { FaStar } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const Recipies = () => {
  return (
    <>
      <div className="container">
        <div data-aos="fade-up" className="row mb-5">
          <div className="col-lg-9 col-sm-9">
            <div className="delivery-head">
              <h3>
                <span>Trending</span> Recipes
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
      </div>
      <section className="recipies">
        <div className="container">
          <div className="row gapp res-mar mt-5">
            <div className="col-lg-4 col-md-6">
              <div className="recipies-main-img">
                <img src={re1} className="img-fluid" alt="" />
              </div>
              <div className="recipies-content pt-4">
                <h4>$40</h4>
                <h5>Vegan Sweet & Chickpea Curry</h5>
                <div className="recipies-btn pt-4">
                  <div className="recipies-icon d-flex gap-1">
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                  </div>
                  <button className="recipies-cart d-flex gap-2">
                    Add to cart {""}
                    <FaCartShopping className="text-white" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="recipies-main-img">
                <img src={r2} className="img-fluid" alt="" />

                <div className="recipies-content pt-4">
                  <h4>$40</h4>
                  <h5>Vegan Sweet & Chickpea Curry</h5>
                  <div className="recipies-btn pt-4">
                    <div className="recipies-icon d-flex gap-1">
                      <FaStar className="star-icon" />
                      <FaStar className="star-icon" />
                      <FaStar className="star-icon" />
                      <FaStar className="star-icon" />
                      <FaStar className="star-icon" />
                    </div>
                    <button className="recipies-cart d-flex gap-2">
                      Add to cart {""}
                      <FaCartShopping className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 gap-5">
              <div className="recipies-main-img">
                <img src={r3} className="img-fluid" alt="" />
              </div>
              <div className="recipies-content pt-4">
                <h4>$40</h4>
                <h5>Vegan Sweet & Chickpea Curry</h5>
                <div className="recipies-btn pt-4">
                  <div className="recipies-icon d-flex gap-1">
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                  </div>
                  <button className="recipies-cart d-flex gap-2">
                    Add to cart {""}
                    <FaCartShopping className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recipies;
