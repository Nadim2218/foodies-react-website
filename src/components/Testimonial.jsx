import React from "react";
import { Pagination, FreeMode } from "swiper/modules";
import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonial = () => {
  return (
    <>
      <section className="collection">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="delivery-head text-center pb-5">
                <p>Testimonial</p>
                <h3>
                  What's Our <span>Client Say</span>
                </h3>
              </div>
            </div>
          </div>
          <Swiper
            modules={[FreeMode, Pagination]}
            spaceBetween={30}
            slidesPerView={2}
            freeMode={true}
            pagination={{ clickable: true }}
            loop={true}
            className="swipee"
            breakpoints={{
              // When window width is >= 320px (mobile)
              320: {
                slidesPerView: 1,
              },
              // When window width is >= 768px (tablet and above)
              768: {
                slidesPerView: 2,
              },
              // When window width is >= 1024px (desktop)
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="row">
                <div className="col-lg-4">
                  <div className="client-img">
                    <img src={client2} className="w-100" alt="" />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="client-text">
                    <h2>John Smith</h2>
                    <p>
                      overview A little information for our guest Lorem, ipsum
                      dolor sit amet consectetur adipisicing elit. Omnis quidem
                      veritatis cum cupiditate suscipit autem nisi fugiat quae
                      amet.
                    </p>
                    <span>Student</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-lg-4">
                  <div className="client-img">
                    <img src={client2} className="w-100" alt="" />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="client-text">
                    <h2>John Smith</h2>
                    <p>
                      overview A little information for our guest Lorem, ipsum
                      dolor sit amet consectetur adipisicing elit. Omnis quidem
                      veritatis cum cupiditate suscipit autem nisi fugiat quae
                      amet.
                    </p>
                    <span>Student</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-lg-4">
                  <div className="client-img">
                    <img src={client1} className="w-100" alt="" />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="client-text">
                    <h2>John Smith</h2>
                    <p>
                      overview A little information for our guest Lorem, ipsum
                      dolor sit amet consectetur adipisicing elit. Omnis quidem
                      veritatis cum cupiditate suscipit autem nisi fugiat quae
                      amet.
                    </p>
                    <span>Student</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-lg-4">
                  <div className="client-img">
                    <img src={client2} className="w-100" alt="" />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="client-text">
                    <h2>John Smith</h2>
                    <p>
                      overview A little information for our guest Lorem, ipsum
                      dolor sit amet consectetur adipisicing elit. Omnis quidem
                      veritatis cum cupiditate suscipit autem nisi fugiat quae
                      amet.
                    </p>
                    <span>Student</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
