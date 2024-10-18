"use client";
import React from "react";
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
import CosmeticBottol from "@/public/cosmetic-bottol.jpg";
import BottolsOfDark from "@/public/bottles-of-dark.jpg";
import BrownWhiteGlass from "@/public/brown-white-glass.jpg";
import BrownGlass from "@/public/brown-glass.jpg";
import TwoCosmetic from "@/public/two-cosmetic.jpg";

const StoreSlider = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop
      >
        <SwiperSlide>
          <div className="h-[150px] w-[150px]">
            <Image
              style={{
                borderRadius: "50% 50% 0 0",
              }}
              alt="slide 1"
              src={CosmeticBottol}
              placeholder="blur"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[150px] w-[150px]">
            <Image
              style={{
                borderRadius: "50% 50% 0 0",
              }}
              alt="slide 2"
              src={BottolsOfDark}
              placeholder="blur"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[150px] w-[150px]">
            <Image
              style={{
                borderRadius: "50% 50% 0 0",
              }}
              alt="slide 3"
              src={BrownWhiteGlass}
              placeholder="blur"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[150px] w-[150px]">
            <Image
              style={{
                borderRadius: "50% 50% 0 0",
              }}
              alt="slide 4"
              src={BrownGlass}
              placeholder="blur"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[150px] w-[150px]">
            <Image
              style={{
                borderRadius: "50% 50% 0 0",
              }}
              alt="slide 5"
              src={TwoCosmetic}
              placeholder="blur"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default StoreSlider;
