"use client";
import React, { useRef } from "react";
import Side3 from "@/public/side-3.jpg";
import Side4 from "@/public/side-4.jpg";
import Side5 from "@/public/side-5.jpg";
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
import Image from "next/image";
const OurSlider = () => {
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
        slidesPerView={3}
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
          <div className=" w-[300px] h-auto ">
            <Image
              style={{
                borderRadius: "50% 50% 0 0",
              }}
              alt="slide-1"
              placeholder="blur"
              src={Side3}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-[300px] h-auto ">
            <Image
              style={{
                borderRadius: "50% 50% 0 0",
              }}
              alt="slide-2"
              placeholder="blur"
              src={Side4}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-[300px] h-auto ">
            <Image
              style={{
                borderRadius: "50% 50% 0 0",
              }}
              alt="slide-3"
              placeholder="blur"
              src={Side5}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-[300px] h-auto ">
            <Image
              style={{
                borderRadius: "50% 50% 0 0",
              }}
              alt="slide-1"
              placeholder="blur"
              src={Side3}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-[300px] h-auto ">
            <Image
              style={{
                borderRadius: "50% 50% 0 0",
              }}
              alt="slide-2"
              placeholder="blur"
              src={Side4}
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className=" flex gap-[30px] mt-[30px]">
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

export default OurSlider;
