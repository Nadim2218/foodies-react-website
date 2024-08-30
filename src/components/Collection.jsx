import React from "react";
import { Pagination, FreeMode } from "swiper/modules";
import col1 from "../assets/col1.png";
import col2 from "../assets/col2.png";
import col3 from "../assets/col3.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Collection = () => {
  return (
    <>
      <section className="collection">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="delivery-head text-center">
                <h3>
                  Top <span>Collections</span>
                </h3>
                <p>All our meals in one delicious snap</p>
              </div>
            </div>
          </div>
          <Swiper
            modules={[FreeMode, Pagination]}
            spaceBetween={20}
            freeMode={true}
            pagination={{ clickable: true }}
            centeredSlides={true}
            initialSlide={Math.floor(3 / 2)}
            loop={true}
            className="mySwiper"
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
            <SwiperSlide className="swiper-slide-custom">
              <img
                src={col1}
                className="img-fluid collection-img"
                alt="collection image"
              />
            </SwiperSlide>

            <SwiperSlide className="swiper-slide-custom">
              <img
                src={col2}
                className="img-fluid collection-img"
                alt="collection image"
              />
            </SwiperSlide>

            <SwiperSlide className="swiper-slide-custom">
              <img
                src={col3}
                className="img-fluid collection-img"
                alt="collection image"
              />
            </SwiperSlide>

            <SwiperSlide className="swiper-slide-custom">
              <img
                src={col2}
                className="img-fluid collection-img"
                alt="collection image"
              />
            </SwiperSlide>

            <SwiperSlide className="swiper-slide-custom">
              <img
                src={col1}
                className="img-fluid collection-img"
                alt="collection image"
              />
            </SwiperSlide>

            <SwiperSlide className="swiper-slide-custom">
              <img
                src={col3}
                className="img-fluid collection-img"
                alt="collection image"
              />
            </SwiperSlide>

            <SwiperSlide className="swiper-slide-custom">
              <img
                src={col2}
                className="img-fluid collection-img"
                alt="collection image"
              />
            </SwiperSlide>

            <SwiperSlide className="swiper-slide-custom">
              <img
                src={col1}
                className="img-fluid collection-img"
                alt="collection image"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Collection;
