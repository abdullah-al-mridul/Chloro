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
import Slide1 from "@/public/slide-1.jpeg";
import Slide2 from "@/public/slide-2.jpg";
import Slide3 from "@/public/slide-3.jpeg";
import Image from "next/image";

const HeroSlider = () => {
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
    <div className="max-w-[850px]">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={40}
        slidesPerView={2}
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
          <div className=" w-[400px] h-auto ">
            <Image
              style={{
                borderRadius: "50% 50% 0 0",
              }}
              alt="slide-1"
              placeholder="blur"
              src={Slide1}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-[400px] h-auto ">
            <Image
              style={{
                borderRadius: "50% 50% 0 0",
              }}
              alt="slide-2"
              placeholder="blur"
              src={Slide2}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-[400px] h-auto ">
            <Image
              style={{
                borderRadius: "50% 50% 0 0",
              }}
              alt="slide-3"
              placeholder="blur"
              src={Slide3}
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex space-x-4 mt-4">
        <div className=" mt-[30px] gap-[32px] flex">
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
    </div>
  );
};

export default HeroSlider;
