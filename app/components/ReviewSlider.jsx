"use client";
import React, { useRef } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const ReviewSlider = () => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={() => console.log("slide change")}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop
      >
        <SwiperSlide>
          <div>
            <p className=" text-[18px] font-montserrat text-white mb-[30px]">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur lobortis erat posuere, tincidunt sem at, sagittis dolor.
              Sed malesuada orci erat, ut interdum lorem rhoncus eu. Donec justo
              urna, mattis non maximus.”
            </p>
            <div>
              <h6 className=" text-[30px] text-white font-[600] font-cormorant ">
                Nikky Kimso
              </h6>
              <p className=" text-[18px] font-montserrat font-[500] text-white mb-[30px]">
                Customer
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p className=" text-[18px] font-montserrat text-white mb-[30px]">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur lobortis erat posuere, tincidunt sem at, sagittis dolor.
              Sed malesuada orci erat, ut interdum lorem rhoncus eu. Donec justo
              urna, mattis non maximus.”
            </p>
            <div>
              <h6 className=" text-[30px] text-white font-[600] font-cormorant ">
                Tilly Kamso
              </h6>
              <p className=" text-[18px] font-montserrat font-[500] text-white mb-[30px]">
                Customer
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p className=" text-[18px] font-montserrat text-white mb-[30px]">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur lobortis erat posuere, tincidunt sem at, sagittis dolor.
              Sed malesuada orci erat, ut interdum lorem rhoncus eu. Donec justo
              urna, mattis non maximus.”
            </p>
            <div>
              <h6 className=" text-[30px] text-white font-[600] font-cormorant ">
                Rikki Simko
              </h6>
              <p className=" text-[18px] font-montserrat font-[500] text-white mb-[30px]">
                Customer
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p className=" text-[18px] font-montserrat text-white mb-[30px]">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur lobortis erat posuere, tincidunt sem at, sagittis dolor.
              Sed malesuada orci erat, ut interdum lorem rhoncus eu. Donec justo
              urna, mattis non maximus.”
            </p>
            <div>
              <h6 className=" text-[30px] text-white font-[600] font-cormorant ">
                Nelly Kimzo
              </h6>
              <p className=" text-[18px] font-montserrat font-[500] text-white mb-[30px]">
                Customer
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className=" flex gap-[30px] justify-end mt-[30px]">
        <button onClick={handlePrev}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={64}
              height={20}
              viewBox="0 0 64 20"
              fill="none"
            >
              <path
                d="M64 10L1 10"
                stroke="white"
                strokeWidth={2}
                strokeMiterlimit={10}
              />
              <path
                d="M10 1L0.999999 10L10 19"
                stroke="white"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinejoin="bevel"
              />
            </svg>
          </span>
        </button>
        <button className=" rotate-180" onClick={handleNext}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={64}
              height={20}
              viewBox="0 0 64 20"
              fill="none"
            >
              <path
                d="M64 10L1 10"
                stroke="white"
                strokeWidth={2}
                strokeMiterlimit={10}
              />
              <path
                d="M10 1L0.999999 10L10 19"
                stroke="white"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinejoin="bevel"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ReviewSlider;
