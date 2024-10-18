import Image from "next/image";
import HeroSlider from "./components/HeroSlider";
import "./styles.css";
import Side1 from "@/public/side-1.jpg";
import Side2 from "@/public/side-2.jpg";
import OurSlider from "./components/OurSlider";
import FaceScrub from "@/public/face-scrub.jpg";
import FaceMessage from "@/public/face-message.jpg";
import BodyMessage from "@/public/body-message.jpg";
import BotoxFiller from "@/public/botox-filler.jpg";
import Pedicure from "@/public/pedicure.jpg";
import FaceCleanser from "@/public/face-cleanser.jpg";
import OurStory from "@/public/our-story.jpg";
import ReviewSlider from "./components/ReviewSlider";
import LeftTop from "@/public/left-top.jpg";
import LeftBottom from "@/public/left-bottom.jpg";
import AmberGlass from "@/public/amber-glass.jpg";
import StoreSlider from "./components/StoreSlider";
import ProductList from "./components/ProductList";
import AllefVinci from "@/public/allef-vini.jpg";
import RafhaelLov from "@/public/raphael-lov.jpg";
import JessHarper from "@/public/jess-harper.jpg";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className=" h-screen w-full overflow-auto background__mask">
      <div className=" bg-[#023A15] pb-[100px]  px-[20px]">
        <Header />
        <div className=" max-w-[1500px] mx-auto max-desktop:justify-center flex justify-between items-center">
          <div>
            <h1 className=" relative max-laptop-sm:text-[40px] font-cormorant z-[1] text-[75px] text-white font-[300] mt-[100px]">
              <span className=" max-laptop-sm:hidden absolute top-0 z-[-1] left-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={466}
                  height={116}
                  viewBox="0 0 466 116"
                  fill="none"
                >
                  <path
                    d="M4.57924 45.6273C4.57924 45.6273 157.688 -11.6006 343.083 10.1527C528.478 31.906 424.63 104.529 271.022 111.891C117.414 119.254 -68.9795 82.7752 29.5426 48.974C128.065 15.1727 307.968 -16.2859 432.285 25.7147C556.603 67.7153 302.143 124.274 79.8023 106.369C-142.538 88.4646 163.513 4.29607 287.165 1.11675C410.817 -2.06258 518.991 60.52 409.153 87.9626C299.314 115.405 53.0082 137.326 29.8755 73.4046C6.74273 9.4834 378.864 -2.56458 439.441 18.1847"
                    stroke="#319E48"
                    strokeWidth={2}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className=" absolute bottom-0 max-laptop-sm:hidden left-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={377}
                  height={20}
                  viewBox="0 0 377 20"
                  fill="none"
                >
                  <path
                    d="M1 8.65318C3 7.12255 205.143 14.7757 350 15.541C494.429 16.3064 -44.7143 22.4289 11.8571 16.3064C83.1429 8.65318 348.571 11.7145 376 1"
                    stroke="#319E48"
                    strokeWidth={2}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              A whole{" "}
              <span className=" italic font-montserrat text-[61px]">
                new <br /> world,
              </span>{" "}
              a whole
              <br /> new look
            </h1>
            <p className=" font-montserrat font-[500] text-white max-w-[500px] mt-[55px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className=" bg-white rounded-full flex items-center gap-[20px] text-[#023A15] font-semibold py-[20px] px-[40px] mt-[80px] border border-[#fff] box-border hover:bg-transparent hover:text-white transition-all">
              DISCOVER MORE{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={15}
                  viewBox="0 0 22 15"
                  fill="none"
                >
                  <path
                    d="M21.7439 6.40866L15.6014 0.243668C15.4362 0.0852305 15.2154 -0.0022176 14.9865 4.27524e-05C14.7575 0.0023031 14.5386 0.0940923 14.3765 0.255762C14.2144 0.417432 14.122 0.636135 14.1191 0.865056C14.1162 1.09398 14.2031 1.31492 14.3611 1.4806L18.9778 6.11337H1.87597C1.75663 6.10605 1.63706 6.12324 1.52461 6.16388C1.41217 6.20451 1.30923 6.26773 1.22214 6.34964C1.13505 6.43155 1.06564 6.53043 1.0182 6.64017C0.970763 6.74991 0.946289 6.8682 0.946289 6.98775C0.946289 7.10731 0.970763 7.2256 1.0182 7.33534C1.06564 7.44508 1.13505 7.54395 1.22214 7.62586C1.30923 7.70777 1.41217 7.77099 1.52461 7.81162C1.63706 7.85226 1.75663 7.86945 1.87597 7.86214H19.0468L14.3644 12.4916C14.2753 12.5708 14.2033 12.6673 14.1529 12.7753C14.1024 12.8832 14.0744 13.0004 14.0708 13.1195C14.0671 13.2386 14.0878 13.3572 14.1316 13.4681C14.1754 13.5789 14.2413 13.6797 14.3253 13.7642C14.4094 13.8486 14.5098 13.9151 14.6204 13.9595C14.7311 14.0038 14.8496 14.0251 14.9687 14.0221C15.0879 14.0191 15.2051 13.9918 15.3134 13.9419C15.4216 13.892 15.5185 13.8205 15.5982 13.7318L21.7407 7.64887C21.8222 7.5675 21.8869 7.47084 21.9311 7.36444C21.9752 7.25803 21.9979 7.14396 21.9979 7.02876C21.9979 6.91356 21.9752 6.7995 21.9311 6.69309C21.8869 6.58668 21.8222 6.49003 21.7407 6.40866H21.7439Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div className=" max-desktop:hidden">
            <HeroSlider />
          </div>
        </div>
      </div>
      <div className=" bg-[#FDF5F3]">
        <div className=" flex max-w-[1500px] py-[100px] items-center justify-between mx-auto">
          <div className=" max-desktop:hidden">
            <div className=" w-[455px] h-[470px] relative">
              <span className=" absolute top-0 left-[-70px]">
                <svg
                  width={294}
                  height={207}
                  viewBox="0 0 294 207"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0043 207C-19.761 128.589 19.1089 40.705 97.199 10.3579C175.289 -19.9892 263.184 18.6025 294 96.6629L10.0043 207Z"
                    fill="#567C49"
                  />
                </svg>
              </span>
              <Image
                style={{
                  borderRadius: "50% 50% 0 0",
                }}
                alt="left-side"
                placeholder="blur"
                src={Side1}
              />
            </div>
          </div>
          <div className=" max-desktop:mx-auto">
            <div className=" text-center">
              <h6 className="  text-[20px] font-montserrat text-[#023A15] font-[500]">
                Alive every moment
              </h6>
              <h2 className="max-laptop-sm:text-[40px] text-[76px] text-[#023A15] font-cormorant mb-[30px] leading-[0.9] mt-[10px]">
                Beauty is all about <br /> you.
              </h2>
              <p className=" text-[#567C49] text-[18px] font-[500] font-montserrat">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                lobortis sed sapien in pretium. Donec tincidunt, quam.
              </p>
            </div>
          </div>
          <div className=" max-desktop:hidden">
            <div className=" w-[455px] relative h-[470px]">
              <span className=" absolute right-[-70px] bottom-0">
                <svg
                  width={290}
                  height={197}
                  viewBox="0 0 290 197"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M281.996 0C308.534 77.8927 266.928 162.462 189.024 188.997C111.12 215.532 26.5387 173.932 0 96.0391L281.996 0Z"
                    fill="#023A15"
                  />
                </svg>
              </span>
              <Image
                style={{
                  borderRadius: "50% 50% 0 0",
                }}
                alt="right-side"
                placeholder="blur"
                src={Side2}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#023A15] py-[100px] px-[20px]">
        <div className=" max-w-[1500px] justify-between max-desktop:justify-center items-center mx-auto flex">
          <div>
            <h2 className=" text-[70px] max-laptop-sm:text-[40px] text-white font-cormorant mb-[20px]">
              Our Product
            </h2>
            <p className=" text-[18px] font-[500] text-white max-w-[400px] mb-[40px]">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
            </p>
            <button className=" bg-white rounded-full flex items-center gap-[20px] text-[#023A15] font-semibold py-[20px] px-[40px] mt-[80px] border border-[#fff] box-border hover:bg-transparent hover:text-white transition-all">
              SHOP NOW{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={15}
                  viewBox="0 0 22 15"
                  fill="none"
                >
                  <path
                    d="M21.7439 6.40866L15.6014 0.243668C15.4362 0.0852305 15.2154 -0.0022176 14.9865 4.27524e-05C14.7575 0.0023031 14.5386 0.0940923 14.3765 0.255762C14.2144 0.417432 14.122 0.636135 14.1191 0.865056C14.1162 1.09398 14.2031 1.31492 14.3611 1.4806L18.9778 6.11337H1.87597C1.75663 6.10605 1.63706 6.12324 1.52461 6.16388C1.41217 6.20451 1.30923 6.26773 1.22214 6.34964C1.13505 6.43155 1.06564 6.53043 1.0182 6.64017C0.970763 6.74991 0.946289 6.8682 0.946289 6.98775C0.946289 7.10731 0.970763 7.2256 1.0182 7.33534C1.06564 7.44508 1.13505 7.54395 1.22214 7.62586C1.30923 7.70777 1.41217 7.77099 1.52461 7.81162C1.63706 7.85226 1.75663 7.86945 1.87597 7.86214H19.0468L14.3644 12.4916C14.2753 12.5708 14.2033 12.6673 14.1529 12.7753C14.1024 12.8832 14.0744 13.0004 14.0708 13.1195C14.0671 13.2386 14.0878 13.3572 14.1316 13.4681C14.1754 13.5789 14.2413 13.6797 14.3253 13.7642C14.4094 13.8486 14.5098 13.9151 14.6204 13.9595C14.7311 14.0038 14.8496 14.0251 14.9687 14.0221C15.0879 14.0191 15.2051 13.9918 15.3134 13.9419C15.4216 13.892 15.5185 13.8205 15.5982 13.7318L21.7407 7.64887C21.8222 7.5675 21.8869 7.47084 21.9311 7.36444C21.9752 7.25803 21.9979 7.14396 21.9979 7.02876C21.9979 6.91356 21.9752 6.7995 21.9311 6.69309C21.8869 6.58668 21.8222 6.49003 21.7407 6.40866H21.7439Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div className=" max-w-[1000px] max-desktop:hidden">
            <OurSlider />
          </div>
        </div>
      </div>
      <div className=" bg-[#FDF5F3] py-[100px]">
        <div className=" max-w-[1500px] mx-auto">
          <h2 className=" text-[#023A15] max-desktop:text-[40px] relative z-[1] mx-auto w-max mb-[20px] text-[70px] font-cormorant text-center">
            <span className=" absolute max-laptop:hidden bottom-0 z-[-1] right-0">
              <svg
                width={291}
                height={72}
                viewBox="0 0 291 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.22931 28.4027C3.22931 28.4027 98.5923 -6.73719 214.065 6.6201C329.537 19.9774 264.856 64.5701 169.182 69.0911C73.5077 73.612 -42.5864 51.2129 18.7776 30.4577C80.1417 9.70255 192.193 -9.61414 269.624 16.1757C347.054 41.9655 188.565 76.6945 50.0816 65.7004C-88.4021 54.7063 102.22 3.02391 179.236 1.07169C256.252 -0.880531 323.628 37.5473 255.216 54.3981C186.803 71.2488 33.393 84.7088 18.9849 45.459C4.57683 6.20911 236.35 -1.18878 274.081 11.552"
                  stroke="#319E48"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Special Service <br className=" hidden max-tablet:block" /> from
            Chloro
          </h2>
          <p className=" text-[#567C49] text-[18px] mb-[80px] font-montserrat text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proinbr{" "}
            <br />
            lobortis sed sapien in pretium. Donec tincidunt, quam.
          </p>
          <div className=" grid grid-cols-3 max-desktop:grid-cols-2 max-laptop-sm:grid-cols-1 gap-[40px]">
            <div>
              <div>
                <Image
                  style={{
                    borderRadius: "50% 50% 0 0",
                  }}
                  alt="face-scrub"
                  src={FaceScrub}
                  placeholder="blur"
                />
              </div>
              <div className=" bg-white py-[20px] shadow-lg max-w-[80%] rounded-sm mx-auto translate-y-[-20%]">
                <h3 className=" text-[40px] font-cormorant text-center mb-[20px] text-[#023A15]">
                  Face Scrub
                </h3>
                <p className=" text-[18px] font-montserrat font-[500] text-center text-[#567C49]">
                  Lorem ipsum dolor sit amet, cctetur adipiscing elit.
                </p>
                <button className=" flex items-center mt-[30px] font-montserrat text-[#319E48] gap-[20px] relative after:content-[''] after:absolute after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:bottom-0 after:left-0 after:bg-[#319E48] font-[500] mx-auto">
                  <span>LEARN MORE</span>{" "}
                  <span>
                    <svg
                      width={22}
                      height={15}
                      viewBox="0 0 22 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.7439 6.40866L15.6014 0.243668C15.4362 0.0852305 15.2154 -0.0022176 14.9865 4.27524e-05C14.7575 0.0023031 14.5386 0.0940923 14.3765 0.255762C14.2144 0.417432 14.122 0.636135 14.1191 0.865056C14.1162 1.09398 14.2031 1.31492 14.3611 1.4806L18.9778 6.11337H1.87597C1.75663 6.10605 1.63706 6.12324 1.52461 6.16388C1.41217 6.20451 1.30923 6.26773 1.22214 6.34964C1.13505 6.43155 1.06564 6.53043 1.0182 6.64017C0.970763 6.74991 0.946289 6.8682 0.946289 6.98775C0.946289 7.10731 0.970763 7.2256 1.0182 7.33534C1.06564 7.44508 1.13505 7.54395 1.22214 7.62586C1.30923 7.70777 1.41217 7.77099 1.52461 7.81162C1.63706 7.85226 1.75663 7.86945 1.87597 7.86214H19.0468L14.3644 12.4916C14.2753 12.5708 14.2033 12.6673 14.1529 12.7753C14.1024 12.8832 14.0744 13.0004 14.0708 13.1195C14.0671 13.2386 14.0878 13.3572 14.1316 13.4681C14.1754 13.5789 14.2413 13.6797 14.3253 13.7642C14.4094 13.8486 14.5098 13.9151 14.6204 13.9595C14.7311 14.0038 14.8496 14.0251 14.9687 14.0221C15.0879 14.0191 15.2051 13.9918 15.3134 13.9419C15.4216 13.892 15.5185 13.8205 15.5982 13.7318L21.7407 7.64887C21.8222 7.5675 21.8869 7.47084 21.9311 7.36444C21.9752 7.25803 21.9979 7.14396 21.9979 7.02876C21.9979 6.91356 21.9752 6.7995 21.9311 6.69309C21.8869 6.58668 21.8222 6.49003 21.7407 6.40866H21.7439Z"
                        fill="#319E48"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div>
              <div>
                <Image
                  style={{
                    borderRadius: "50% 50% 0 0",
                  }}
                  alt="face-message"
                  src={FaceMessage}
                  placeholder="blur"
                />
              </div>
              <div className=" bg-white py-[20px] shadow-lg max-w-[80%] rounded-sm mx-auto translate-y-[-20%]">
                <h3 className=" text-[40px] font-cormorant text-center mb-[20px] text-[#023A15]">
                  Face Message
                </h3>
                <p className=" text-[18px] font-montserrat font-[500] text-center text-[#567C49]">
                  Lorem ipsum dolor sit amet, cctetur adipiscing elit.
                </p>
                <button className=" flex items-center mt-[30px] font-montserrat text-[#319E48] gap-[20px] relative after:content-[''] after:absolute after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:bottom-0 after:left-0 after:bg-[#319E48] font-[500] mx-auto">
                  <span>LEARN MORE</span>{" "}
                  <span>
                    <svg
                      width={22}
                      height={15}
                      viewBox="0 0 22 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.7439 6.40866L15.6014 0.243668C15.4362 0.0852305 15.2154 -0.0022176 14.9865 4.27524e-05C14.7575 0.0023031 14.5386 0.0940923 14.3765 0.255762C14.2144 0.417432 14.122 0.636135 14.1191 0.865056C14.1162 1.09398 14.2031 1.31492 14.3611 1.4806L18.9778 6.11337H1.87597C1.75663 6.10605 1.63706 6.12324 1.52461 6.16388C1.41217 6.20451 1.30923 6.26773 1.22214 6.34964C1.13505 6.43155 1.06564 6.53043 1.0182 6.64017C0.970763 6.74991 0.946289 6.8682 0.946289 6.98775C0.946289 7.10731 0.970763 7.2256 1.0182 7.33534C1.06564 7.44508 1.13505 7.54395 1.22214 7.62586C1.30923 7.70777 1.41217 7.77099 1.52461 7.81162C1.63706 7.85226 1.75663 7.86945 1.87597 7.86214H19.0468L14.3644 12.4916C14.2753 12.5708 14.2033 12.6673 14.1529 12.7753C14.1024 12.8832 14.0744 13.0004 14.0708 13.1195C14.0671 13.2386 14.0878 13.3572 14.1316 13.4681C14.1754 13.5789 14.2413 13.6797 14.3253 13.7642C14.4094 13.8486 14.5098 13.9151 14.6204 13.9595C14.7311 14.0038 14.8496 14.0251 14.9687 14.0221C15.0879 14.0191 15.2051 13.9918 15.3134 13.9419C15.4216 13.892 15.5185 13.8205 15.5982 13.7318L21.7407 7.64887C21.8222 7.5675 21.8869 7.47084 21.9311 7.36444C21.9752 7.25803 21.9979 7.14396 21.9979 7.02876C21.9979 6.91356 21.9752 6.7995 21.9311 6.69309C21.8869 6.58668 21.8222 6.49003 21.7407 6.40866H21.7439Z"
                        fill="#319E48"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div>
              <div>
                <Image
                  style={{
                    borderRadius: "50% 50% 0 0",
                  }}
                  alt="body-message"
                  src={BodyMessage}
                  placeholder="blur"
                />
              </div>
              <div className=" bg-white py-[20px] shadow-lg max-w-[80%] rounded-sm mx-auto translate-y-[-20%]">
                <h3 className=" text-[40px] font-cormorant text-center mb-[20px] text-[#023A15]">
                  Face Message
                </h3>
                <p className=" text-[18px] font-montserrat font-[500] text-center text-[#567C49]">
                  Lorem ipsum dolor sit amet, cctetur adipiscing elit.
                </p>
                <button className=" flex items-center mt-[30px] font-montserrat text-[#319E48] gap-[20px] relative after:content-[''] after:absolute after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:bottom-0 after:left-0 after:bg-[#319E48] font-[500] mx-auto">
                  <span>LEARN MORE</span>{" "}
                  <span>
                    <svg
                      width={22}
                      height={15}
                      viewBox="0 0 22 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.7439 6.40866L15.6014 0.243668C15.4362 0.0852305 15.2154 -0.0022176 14.9865 4.27524e-05C14.7575 0.0023031 14.5386 0.0940923 14.3765 0.255762C14.2144 0.417432 14.122 0.636135 14.1191 0.865056C14.1162 1.09398 14.2031 1.31492 14.3611 1.4806L18.9778 6.11337H1.87597C1.75663 6.10605 1.63706 6.12324 1.52461 6.16388C1.41217 6.20451 1.30923 6.26773 1.22214 6.34964C1.13505 6.43155 1.06564 6.53043 1.0182 6.64017C0.970763 6.74991 0.946289 6.8682 0.946289 6.98775C0.946289 7.10731 0.970763 7.2256 1.0182 7.33534C1.06564 7.44508 1.13505 7.54395 1.22214 7.62586C1.30923 7.70777 1.41217 7.77099 1.52461 7.81162C1.63706 7.85226 1.75663 7.86945 1.87597 7.86214H19.0468L14.3644 12.4916C14.2753 12.5708 14.2033 12.6673 14.1529 12.7753C14.1024 12.8832 14.0744 13.0004 14.0708 13.1195C14.0671 13.2386 14.0878 13.3572 14.1316 13.4681C14.1754 13.5789 14.2413 13.6797 14.3253 13.7642C14.4094 13.8486 14.5098 13.9151 14.6204 13.9595C14.7311 14.0038 14.8496 14.0251 14.9687 14.0221C15.0879 14.0191 15.2051 13.9918 15.3134 13.9419C15.4216 13.892 15.5185 13.8205 15.5982 13.7318L21.7407 7.64887C21.8222 7.5675 21.8869 7.47084 21.9311 7.36444C21.9752 7.25803 21.9979 7.14396 21.9979 7.02876C21.9979 6.91356 21.9752 6.7995 21.9311 6.69309C21.8869 6.58668 21.8222 6.49003 21.7407 6.40866H21.7439Z"
                        fill="#319E48"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div>
              <div>
                <Image
                  style={{
                    borderRadius: "50% 50% 0 0",
                  }}
                  alt="botox-filler"
                  src={BotoxFiller}
                  placeholder="blur"
                />
              </div>
              <div className=" bg-white py-[20px] shadow-lg max-w-[80%] rounded-sm mx-auto translate-y-[-20%]">
                <h3 className=" text-[40px] font-cormorant text-center mb-[20px] text-[#023A15]">
                  Botox Filler
                </h3>
                <p className=" text-[18px] font-montserrat font-[500] text-center text-[#567C49]">
                  Lorem ipsum dolor sit amet, cctetur adipiscing elit.
                </p>
                <button className=" flex items-center mt-[30px] font-montserrat text-[#319E48] gap-[20px] relative after:content-[''] after:absolute after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:bottom-0 after:left-0 after:bg-[#319E48] font-[500] mx-auto">
                  <span>LEARN MORE</span>{" "}
                  <span>
                    <svg
                      width={22}
                      height={15}
                      viewBox="0 0 22 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.7439 6.40866L15.6014 0.243668C15.4362 0.0852305 15.2154 -0.0022176 14.9865 4.27524e-05C14.7575 0.0023031 14.5386 0.0940923 14.3765 0.255762C14.2144 0.417432 14.122 0.636135 14.1191 0.865056C14.1162 1.09398 14.2031 1.31492 14.3611 1.4806L18.9778 6.11337H1.87597C1.75663 6.10605 1.63706 6.12324 1.52461 6.16388C1.41217 6.20451 1.30923 6.26773 1.22214 6.34964C1.13505 6.43155 1.06564 6.53043 1.0182 6.64017C0.970763 6.74991 0.946289 6.8682 0.946289 6.98775C0.946289 7.10731 0.970763 7.2256 1.0182 7.33534C1.06564 7.44508 1.13505 7.54395 1.22214 7.62586C1.30923 7.70777 1.41217 7.77099 1.52461 7.81162C1.63706 7.85226 1.75663 7.86945 1.87597 7.86214H19.0468L14.3644 12.4916C14.2753 12.5708 14.2033 12.6673 14.1529 12.7753C14.1024 12.8832 14.0744 13.0004 14.0708 13.1195C14.0671 13.2386 14.0878 13.3572 14.1316 13.4681C14.1754 13.5789 14.2413 13.6797 14.3253 13.7642C14.4094 13.8486 14.5098 13.9151 14.6204 13.9595C14.7311 14.0038 14.8496 14.0251 14.9687 14.0221C15.0879 14.0191 15.2051 13.9918 15.3134 13.9419C15.4216 13.892 15.5185 13.8205 15.5982 13.7318L21.7407 7.64887C21.8222 7.5675 21.8869 7.47084 21.9311 7.36444C21.9752 7.25803 21.9979 7.14396 21.9979 7.02876C21.9979 6.91356 21.9752 6.7995 21.9311 6.69309C21.8869 6.58668 21.8222 6.49003 21.7407 6.40866H21.7439Z"
                        fill="#319E48"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div>
              <div>
                <Image
                  style={{
                    borderRadius: "50% 50% 0 0",
                  }}
                  alt="pedicure"
                  src={Pedicure}
                  placeholder="blur"
                />
              </div>
              <div className=" bg-white py-[20px] shadow-lg max-w-[80%] rounded-sm mx-auto translate-y-[-20%]">
                <h3 className=" text-[40px] font-cormorant text-center mb-[20px] text-[#023A15]">
                  Pedicure
                </h3>
                <p className=" text-[18px] font-montserrat font-[500] text-center text-[#567C49]">
                  Lorem ipsum dolor sit amet, cctetur adipiscing elit.
                </p>
                <button className=" flex items-center mt-[30px] font-montserrat text-[#319E48] gap-[20px] relative after:content-[''] after:absolute after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:bottom-0 after:left-0 after:bg-[#319E48] font-[500] mx-auto">
                  <span>LEARN MORE</span>{" "}
                  <span>
                    <svg
                      width={22}
                      height={15}
                      viewBox="0 0 22 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.7439 6.40866L15.6014 0.243668C15.4362 0.0852305 15.2154 -0.0022176 14.9865 4.27524e-05C14.7575 0.0023031 14.5386 0.0940923 14.3765 0.255762C14.2144 0.417432 14.122 0.636135 14.1191 0.865056C14.1162 1.09398 14.2031 1.31492 14.3611 1.4806L18.9778 6.11337H1.87597C1.75663 6.10605 1.63706 6.12324 1.52461 6.16388C1.41217 6.20451 1.30923 6.26773 1.22214 6.34964C1.13505 6.43155 1.06564 6.53043 1.0182 6.64017C0.970763 6.74991 0.946289 6.8682 0.946289 6.98775C0.946289 7.10731 0.970763 7.2256 1.0182 7.33534C1.06564 7.44508 1.13505 7.54395 1.22214 7.62586C1.30923 7.70777 1.41217 7.77099 1.52461 7.81162C1.63706 7.85226 1.75663 7.86945 1.87597 7.86214H19.0468L14.3644 12.4916C14.2753 12.5708 14.2033 12.6673 14.1529 12.7753C14.1024 12.8832 14.0744 13.0004 14.0708 13.1195C14.0671 13.2386 14.0878 13.3572 14.1316 13.4681C14.1754 13.5789 14.2413 13.6797 14.3253 13.7642C14.4094 13.8486 14.5098 13.9151 14.6204 13.9595C14.7311 14.0038 14.8496 14.0251 14.9687 14.0221C15.0879 14.0191 15.2051 13.9918 15.3134 13.9419C15.4216 13.892 15.5185 13.8205 15.5982 13.7318L21.7407 7.64887C21.8222 7.5675 21.8869 7.47084 21.9311 7.36444C21.9752 7.25803 21.9979 7.14396 21.9979 7.02876C21.9979 6.91356 21.9752 6.7995 21.9311 6.69309C21.8869 6.58668 21.8222 6.49003 21.7407 6.40866H21.7439Z"
                        fill="#319E48"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div>
              <div>
                <Image
                  style={{
                    borderRadius: "50% 50% 0 0",
                  }}
                  alt="face-cleanser"
                  src={FaceCleanser}
                  placeholder="blur"
                />
              </div>
              <div className=" bg-white py-[20px] shadow-lg max-w-[80%] rounded-sm mx-auto translate-y-[-20%]">
                <h3 className=" text-[40px] font-cormorant text-center mb-[20px] text-[#023A15]">
                  Face Cleanser
                </h3>
                <p className=" text-[18px] font-montserrat font-[500] text-center text-[#567C49]">
                  Lorem ipsum dolor sit amet, cctetur adipiscing elit.
                </p>
                <button className=" flex items-center mt-[30px] font-montserrat text-[#319E48] gap-[20px] relative after:content-[''] after:absolute after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:bottom-0 after:left-0 after:bg-[#319E48] font-[500] mx-auto">
                  <span>LEARN MORE</span>{" "}
                  <span>
                    <svg
                      width={22}
                      height={15}
                      viewBox="0 0 22 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.7439 6.40866L15.6014 0.243668C15.4362 0.0852305 15.2154 -0.0022176 14.9865 4.27524e-05C14.7575 0.0023031 14.5386 0.0940923 14.3765 0.255762C14.2144 0.417432 14.122 0.636135 14.1191 0.865056C14.1162 1.09398 14.2031 1.31492 14.3611 1.4806L18.9778 6.11337H1.87597C1.75663 6.10605 1.63706 6.12324 1.52461 6.16388C1.41217 6.20451 1.30923 6.26773 1.22214 6.34964C1.13505 6.43155 1.06564 6.53043 1.0182 6.64017C0.970763 6.74991 0.946289 6.8682 0.946289 6.98775C0.946289 7.10731 0.970763 7.2256 1.0182 7.33534C1.06564 7.44508 1.13505 7.54395 1.22214 7.62586C1.30923 7.70777 1.41217 7.77099 1.52461 7.81162C1.63706 7.85226 1.75663 7.86945 1.87597 7.86214H19.0468L14.3644 12.4916C14.2753 12.5708 14.2033 12.6673 14.1529 12.7753C14.1024 12.8832 14.0744 13.0004 14.0708 13.1195C14.0671 13.2386 14.0878 13.3572 14.1316 13.4681C14.1754 13.5789 14.2413 13.6797 14.3253 13.7642C14.4094 13.8486 14.5098 13.9151 14.6204 13.9595C14.7311 14.0038 14.8496 14.0251 14.9687 14.0221C15.0879 14.0191 15.2051 13.9918 15.3134 13.9419C15.4216 13.892 15.5185 13.8205 15.5982 13.7318L21.7407 7.64887C21.8222 7.5675 21.8869 7.47084 21.9311 7.36444C21.9752 7.25803 21.9979 7.14396 21.9979 7.02876C21.9979 6.91356 21.9752 6.7995 21.9311 6.69309C21.8869 6.58668 21.8222 6.49003 21.7407 6.40866H21.7439Z"
                        fill="#319E48"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#FDF5F3] py-[100px]">
        <div className=" max-w-[1500px] mx-auto grid-cols-2 grid items-center">
          <div className=" max-laptop:hidden">
            <div className=" relative translate-x-[150px]">
              <span className=" absolute top-0 left-0">
                <svg
                  width={269}
                  height={239}
                  viewBox="0 0 269 239"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.3668 238.363C-18.8996 172.451 -5.4017 79.1724 60.5223 29.9061C126.446 -19.3601 219.734 -5.87181 269.001 60.0402L30.3668 238.363Z"
                    fill="#023A15"
                  />
                </svg>
              </span>
              <Image
                className=" w-[653px] h-[750px]"
                style={{
                  borderRadius: "50% 50% 0 0",
                }}
                alt="our-story"
                src={OurStory}
                placeholder="blur"
              />
            </div>
          </div>
          <div className="translate-x-[-100px] max-laptop:translate-x-0">
            <div className=" bg-[#023A15] p-[70px] max-laptop-sm:p-[20px] max-laptop:w-screen relative rounded-sm">
              <span className=" absolute bottom-[-40px] max-laptop:hidden right-[-40px]">
                <svg
                  width={260}
                  height={208}
                  viewBox="0 0 260 208"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M241.707 0.345254C279.051 66.9436 255.87 151.3 189.639 189.125C123.408 226.949 39.0789 204.02 0.836266 137.879L241.707 0.345254Z"
                    fill="#567C49"
                  />
                </svg>
              </span>
              <h2 className=" max-laptop-sm:text-[40px] relative text-[70px] w-max mb-[30px] text-white font-cormorant">
                <span className=" absolute bottom-0 right-0">
                  <svg
                    width={171}
                    height={13}
                    viewBox="0 0 171 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5.67695C1.90133 4.74156 93.0004 9.4185 158.283 9.8862C223.372 10.3539 -19.6019 14.0954 5.89295 10.3539C38.019 5.67695 157.639 7.54772 170 1"
                      stroke="#319E48"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Our Story
              </h2>
              <p className="text-[18px] mb-[60px] text-white font-montserrat font-[500]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur lobortis erat posuere, tincidunt sem at, sagittis
                dolor. Sed malesuada orci erat, ut interdum lorem rhoncus eu.
                Donec justo urna, mattis non maximus.
              </p>
              <button className=" bg-white rounded-full flex items-center gap-[20px] text-[#023A15] font-semibold py-[20px] px-[40px] border border-[#fff] box-border hover:bg-transparent hover:text-white transition-all">
                READ MORE{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={15}
                    viewBox="0 0 22 15"
                    fill="none"
                  >
                    <path
                      d="M21.7439 6.40866L15.6014 0.243668C15.4362 0.0852305 15.2154 -0.0022176 14.9865 4.27524e-05C14.7575 0.0023031 14.5386 0.0940923 14.3765 0.255762C14.2144 0.417432 14.122 0.636135 14.1191 0.865056C14.1162 1.09398 14.2031 1.31492 14.3611 1.4806L18.9778 6.11337H1.87597C1.75663 6.10605 1.63706 6.12324 1.52461 6.16388C1.41217 6.20451 1.30923 6.26773 1.22214 6.34964C1.13505 6.43155 1.06564 6.53043 1.0182 6.64017C0.970763 6.74991 0.946289 6.8682 0.946289 6.98775C0.946289 7.10731 0.970763 7.2256 1.0182 7.33534C1.06564 7.44508 1.13505 7.54395 1.22214 7.62586C1.30923 7.70777 1.41217 7.77099 1.52461 7.81162C1.63706 7.85226 1.75663 7.86945 1.87597 7.86214H19.0468L14.3644 12.4916C14.2753 12.5708 14.2033 12.6673 14.1529 12.7753C14.1024 12.8832 14.0744 13.0004 14.0708 13.1195C14.0671 13.2386 14.0878 13.3572 14.1316 13.4681C14.1754 13.5789 14.2413 13.6797 14.3253 13.7642C14.4094 13.8486 14.5098 13.9151 14.6204 13.9595C14.7311 14.0038 14.8496 14.0251 14.9687 14.0221C15.0879 14.0191 15.2051 13.9918 15.3134 13.9419C15.4216 13.892 15.5185 13.8205 15.5982 13.7318L21.7407 7.64887C21.8222 7.5675 21.8869 7.47084 21.9311 7.36444C21.9752 7.25803 21.9979 7.14396 21.9979 7.02876C21.9979 6.91356 21.9752 6.7995 21.9311 6.69309C21.8869 6.58668 21.8222 6.49003 21.7407 6.40866H21.7439Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div className=" flex max-laptop-sm:hidden mt-[70px] mr-[50px] justify-end items-center gap-[120px]">
              <div>
                <div>
                  <h6 className=" font-cormorant text-[76px] text-[#023A15] text-center">
                    955+
                  </h6>
                  <p className=" font-[500] font-montserrat text-[#319E48] text-center text-[18px]">
                    Happy Customers
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <h6 className=" font-cormorant text-[76px] text-[#023A15] text-center">
                    240+
                  </h6>
                  <p className=" font-[500] font-montserrat text-[#319E48] text-center text-[18px]">
                    Positive Review
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" relative"
        style={{
          background: "linear-gradient(to right, #023A15 50%, #C4C4C4 50%)",
        }}
      >
        <span className=" absolute max-tablet:hidden bottom-0 translate-x-[-45%] left-[50%]">
          <svg
            width={297}
            height={149}
            viewBox="0 0 297 149"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.0685773 148.161C0.679081 66.609 66.839 0.622326 148.305 0.592407C229.77 0.56249 295.865 66.4742 296.33 148.078L0.0685773 148.161Z"
              fill="#567C49"
            />
          </svg>
        </span>
        <div className=" max-w-[1500px] py-[100px] mx-auto">
          <div>
            <h2 className=" text-[76px] max-laptop-sm:text-[40px] mb-[66px] font-cormorant text-white">
              Review From Our <br /> Customer
            </h2>
            <div className=" max-w-[500px]">
              <ReviewSlider />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#FDF5F3]">
        <div className=" max-w-[1500px] py-[150px] mx-auto">
          <div className=" flex justify-between items-center">
            <div className=" flex flex-col max-laptop:hidden gap-[37px]">
              <div className=" relative w-[600px]">
                <span className=" absolute top-[-50px] left-[-50px]">
                  <svg
                    width={206}
                    height={183}
                    viewBox="0 0 206 183"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.288 182.081C-14.294 131.801 -3.99735 60.6459 46.2915 23.0641C96.5804 -14.5178 167.743 -4.22846 205.325 46.0513L23.288 182.081Z"
                      fill="#023A15"
                    />
                  </svg>
                </span>
                <Image
                  style={{
                    borderRadius: "100px 0 0 100px",
                  }}
                  className=" h-[270px] w-[600px]"
                  alt="left-top-image"
                  src={LeftTop}
                  placeholder="blur"
                />
              </div>
              <div className=" w-[600px]">
                <Image
                  style={{
                    borderRadius: " 0 100px 100px 0",
                  }}
                  className=" h-[270px] w-[600px]"
                  alt="left-bottom-image"
                  src={LeftBottom}
                  placeholder="blur"
                />
              </div>
            </div>
            <div>
              <div>
                <h2 className=" max-laptop-sm:text-[40px] text-[76px] relative mb-[30px] font-cormorant w-max text-[#023A15] z-[1]">
                  <span className=" absolute bottom-0 left-[50%] translate-x-[-50%] z-[-1]">
                    <svg
                      width={291}
                      height={72}
                      viewBox="0 0 291 72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.22931 28.4027C3.22931 28.4027 98.5923 -6.73719 214.065 6.6201C329.537 19.9774 264.856 64.5701 169.182 69.0911C73.5077 73.612 -42.5864 51.2129 18.7776 30.4577C80.1417 9.70255 192.193 -9.61414 269.624 16.1757C347.054 41.9655 188.565 76.6945 50.0816 65.7004C-88.4021 54.7063 102.22 3.02391 179.236 1.07169C256.252 -0.880531 323.628 37.5473 255.216 54.3981C186.803 71.2488 33.393 84.7088 18.9849 45.459C4.57683 6.2091 236.35 -1.18878 274.081 11.552"
                        stroke="#319E48"
                        strokeWidth="1.5"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  Expert Skincare For <br /> Your Beautiful Skin
                </h2>
                <p className=" text-[#567C49] font-[500] max-w-[600px] font-montserrat mb-[30px] text-[18px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  accumsan arcu est, at lobortis nulla porta eu. Aenean vel
                  dolor enim. Etiam aliquam mauris eros, eget ornare diam
                  volutpat eu. Fusce auctor pretium tellus vitae bibendum.
                </p>
                <ul className=" text-[18px] expert__list flex flex-col gap-[10px] font-montserrat font-[500] text-[#567C49]">
                  <li>Donec non vestibulum mauris. </li>
                  <li>Maecenas arcu eros. </li>
                  <li>Sed pulvinar lorem.</li>
                  <li>Nullam ut mauris tellus.</li>
                  <li>Nunc vitae convallis justo.</li>
                </ul>
                <button className=" bg-[#023A15] mt-[50px] rounded-full flex items-center gap-[20px] text-[white] font-semibold py-[20px] px-[40px] border border-[#023A15] box-border hover:bg-transparent hover:text-[#023A15] transition-all">
                  READ MORE{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={22}
                      height={15}
                      viewBox="0 0 22 15"
                      fill="none"
                    >
                      <path
                        d="M21.7439 6.40866L15.6014 0.243668C15.4362 0.0852305 15.2154 -0.0022176 14.9865 4.27524e-05C14.7575 0.0023031 14.5386 0.0940923 14.3765 0.255762C14.2144 0.417432 14.122 0.636135 14.1191 0.865056C14.1162 1.09398 14.2031 1.31492 14.3611 1.4806L18.9778 6.11337H1.87597C1.75663 6.10605 1.63706 6.12324 1.52461 6.16388C1.41217 6.20451 1.30923 6.26773 1.22214 6.34964C1.13505 6.43155 1.06564 6.53043 1.0182 6.64017C0.970763 6.74991 0.946289 6.8682 0.946289 6.98775C0.946289 7.10731 0.970763 7.2256 1.0182 7.33534C1.06564 7.44508 1.13505 7.54395 1.22214 7.62586C1.30923 7.70777 1.41217 7.77099 1.52461 7.81162C1.63706 7.85226 1.75663 7.86945 1.87597 7.86214H19.0468L14.3644 12.4916C14.2753 12.5708 14.2033 12.6673 14.1529 12.7753C14.1024 12.8832 14.0744 13.0004 14.0708 13.1195C14.0671 13.2386 14.0878 13.3572 14.1316 13.4681C14.1754 13.5789 14.2413 13.6797 14.3253 13.7642C14.4094 13.8486 14.5098 13.9151 14.6204 13.9595C14.7311 14.0038 14.8496 14.0251 14.9687 14.0221C15.0879 14.0191 15.2051 13.9918 15.3134 13.9419C15.4216 13.892 15.5185 13.8205 15.5982 13.7318L21.7407 7.64887C21.8222 7.5675 21.8869 7.47084 21.9311 7.36444C21.9752 7.25803 21.9979 7.14396 21.9979 7.02876C21.9979 6.91356 21.9752 6.7995 21.9311 6.69309C21.8869 6.58668 21.8222 6.49003 21.7407 6.40866H21.7439Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#023A15]/70">
        <div className=" max-w-[1500px] mx-auto text-black">
          <div className=" flex justify-between relative items-center">
            <div>
              <div>
                <h2 className=" max-laptop-sm:text-[40px] font-cormorant mb-[30px] text-[76px] text-white">
                  Visit Our Store and <br /> Get Our Product
                </h2>
                <p className=" font-montserrat font-[500] text-[18px] max-w-[500px] text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  lobortis sed sapien in pretium. Donec tincidunt, quam
                  vestibulum ultricies egestas, dolor sem laoreet orci, quis
                  finibus justo quam at nibh. Vestibulum ipsum tortor, suscipit
                  non enim vitae. Tincidunt scelerisque augue. Nunc quis
                  fringilla magna, vel sollicitudin quam.
                </p>
                <button className=" bg-white mt-[70px] rounded-full flex items-center gap-[20px] text-[#023A15] font-semibold py-[20px] px-[40px] border border-[#fff] box-border hover:bg-transparent hover:text-white transition-all">
                  SHOP NOW{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={22}
                      height={15}
                      viewBox="0 0 22 15"
                      fill="none"
                    >
                      <path
                        d="M21.7439 6.40866L15.6014 0.243668C15.4362 0.0852305 15.2154 -0.0022176 14.9865 4.27524e-05C14.7575 0.0023031 14.5386 0.0940923 14.3765 0.255762C14.2144 0.417432 14.122 0.636135 14.1191 0.865056C14.1162 1.09398 14.2031 1.31492 14.3611 1.4806L18.9778 6.11337H1.87597C1.75663 6.10605 1.63706 6.12324 1.52461 6.16388C1.41217 6.20451 1.30923 6.26773 1.22214 6.34964C1.13505 6.43155 1.06564 6.53043 1.0182 6.64017C0.970763 6.74991 0.946289 6.8682 0.946289 6.98775C0.946289 7.10731 0.970763 7.2256 1.0182 7.33534C1.06564 7.44508 1.13505 7.54395 1.22214 7.62586C1.30923 7.70777 1.41217 7.77099 1.52461 7.81162C1.63706 7.85226 1.75663 7.86945 1.87597 7.86214H19.0468L14.3644 12.4916C14.2753 12.5708 14.2033 12.6673 14.1529 12.7753C14.1024 12.8832 14.0744 13.0004 14.0708 13.1195C14.0671 13.2386 14.0878 13.3572 14.1316 13.4681C14.1754 13.5789 14.2413 13.6797 14.3253 13.7642C14.4094 13.8486 14.5098 13.9151 14.6204 13.9595C14.7311 14.0038 14.8496 14.0251 14.9687 14.0221C15.0879 14.0191 15.2051 13.9918 15.3134 13.9419C15.4216 13.892 15.5185 13.8205 15.5982 13.7318L21.7407 7.64887C21.8222 7.5675 21.8869 7.47084 21.9311 7.36444C21.9752 7.25803 21.9979 7.14396 21.9979 7.02876C21.9979 6.91356 21.9752 6.7995 21.9311 6.69309C21.8869 6.58668 21.8222 6.49003 21.7407 6.40866H21.7439Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className=" max-laptop:hidden">
              <div className=" h-[800px] w-[700px]">
                <Image
                  style={{
                    borderRadius: "50% 50% 0 0",
                  }}
                  className="h-full"
                  alt="amber-glass"
                  src={AmberGlass}
                  placeholder="blur"
                />
              </div>
            </div>
            <div className=" max-laptop:hidden absolute max-w-[700px] bottom-[-30px] left-[50%] translate-x-[-50%]">
              <StoreSlider />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#023A15] py-[150px] max-laptop-sm:hidden">
        <div className=" max-w-[1500px] mx-auto">
          <h1 className=" text-[76px] mb-[80px] font-cormorant z-[1] w-max mx-auto relative text-white text-center">
            <span className=" absolute right-0 z-[-1]">
              <svg
                width={353}
                height={87}
                viewBox="0 0 353 87"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.70757 34.2748C3.70757 34.2748 119.529 -8.39515 259.774 7.8244C400.019 24.044 321.461 78.1923 205.262 83.682C89.063 89.1717 -51.9371 61.9728 22.5915 36.7701C97.1202 11.5674 233.21 -11.8886 327.252 19.4276C421.295 50.7438 228.804 92.9147 60.6112 79.5648C-107.582 66.2148 123.935 3.4576 217.474 1.08705C311.012 -1.2835 392.843 45.3789 309.753 65.8405C226.664 86.3021 40.3424 102.646 22.8433 54.9859C5.34418 7.32534 286.841 -1.6578 332.666 13.8132"
                  stroke="#319E48"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Our Product Also Available At
          </h1>
          <div>
            <ProductList />
          </div>
        </div>
      </div>
      <div className=" bg-[#FDF5F3]">
        <div className=" max-w-[1500px] mx-auto py-[100px]">
          <h1 className=" relative max-laptop-sm:text-[40px] font-cormorant w-max mx-auto text-[76px] text-[#023A15]">
            <span className=" absolute bottom-0 right-0">
              <svg
                width={184}
                height={13}
                viewBox="0 0 184 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5.67695C1.97067 4.74156 100.077 9.4185 170.381 9.8862C240.477 10.3539 -21.1867 14.0954 6.26933 10.3539C40.8667 5.67695 169.688 7.54772 183 1"
                  stroke="#319E48"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Blog and News
          </h1>
          <p className=" mb-[80px] font-montserrat max-w-[700px] mt-[20px] mx-auto text-center text-[18px] font-[500] text-[#567C49]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            lobortis sed sapien in pretium. Donec tincidunt, quam.
          </p>
          <div className=" grid grid-cols-3 max-laptop-sm:grid-cols-2 max-mobile:grid-cols-1 gap-[40px]">
            <div>
              <div>
                <Image
                  style={{
                    borderRadius: "50% 50% 0 0",
                  }}
                  alt="blog-1"
                  src={AllefVinci}
                  placeholder="blur"
                />
              </div>
              <div className=" bg-[#023A15] p-[35px]">
                <div className=" font-cormorant mb-[37px] text-[36px] text-white">
                  A photographer shows the beauty of their transition
                </div>
                <button className=" flex items-center mt-[30px] font-montserrat text-[#fff] gap-[20px] relative after:content-[''] after:absolute after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:bottom-0 after:left-0 after:bg-[#319E48] font-[500]">
                  <span>LEARN MORE</span>{" "}
                  <span>
                    <svg
                      width={22}
                      height={15}
                      viewBox="0 0 22 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.7439 6.40866L15.6014 0.243668C15.4362 0.0852305 15.2154 -0.0022176 14.9865 4.27524e-05C14.7575 0.0023031 14.5386 0.0940923 14.3765 0.255762C14.2144 0.417432 14.122 0.636135 14.1191 0.865056C14.1162 1.09398 14.2031 1.31492 14.3611 1.4806L18.9778 6.11337H1.87597C1.75663 6.10605 1.63706 6.12324 1.52461 6.16388C1.41217 6.20451 1.30923 6.26773 1.22214 6.34964C1.13505 6.43155 1.06564 6.53043 1.0182 6.64017C0.970763 6.74991 0.946289 6.8682 0.946289 6.98775C0.946289 7.10731 0.970763 7.2256 1.0182 7.33534C1.06564 7.44508 1.13505 7.54395 1.22214 7.62586C1.30923 7.70777 1.41217 7.77099 1.52461 7.81162C1.63706 7.85226 1.75663 7.86945 1.87597 7.86214H19.0468L14.3644 12.4916C14.2753 12.5708 14.2033 12.6673 14.1529 12.7753C14.1024 12.8832 14.0744 13.0004 14.0708 13.1195C14.0671 13.2386 14.0878 13.3572 14.1316 13.4681C14.1754 13.5789 14.2413 13.6797 14.3253 13.7642C14.4094 13.8486 14.5098 13.9151 14.6204 13.9595C14.7311 14.0038 14.8496 14.0251 14.9687 14.0221C15.0879 14.0191 15.2051 13.9918 15.3134 13.9419C15.4216 13.892 15.5185 13.8205 15.5982 13.7318L21.7407 7.64887C21.8222 7.5675 21.8869 7.47084 21.9311 7.36444C21.9752 7.25803 21.9979 7.14396 21.9979 7.02876C21.9979 6.91356 21.9752 6.7995 21.9311 6.69309C21.8869 6.58668 21.8222 6.49003 21.7407 6.40866H21.7439Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div>
              <div>
                <Image
                  style={{
                    borderRadius: "50% 50% 0 0",
                  }}
                  alt="blog-2"
                  src={RafhaelLov}
                  placeholder="blur"
                />
              </div>
              <div className=" bg-[#023A15] p-[35px]">
                <div className=" font-cormorant mb-[37px] text-[36px] text-white">
                  Natural look: The evolution of implants
                </div>
                <button className=" flex items-center mt-[30px] font-montserrat text-[#fff] gap-[20px] relative after:content-[''] after:absolute after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:bottom-0 after:left-0 after:bg-[#319E48] font-[500]">
                  <span>LEARN MORE</span>{" "}
                  <span>
                    <svg
                      width={22}
                      height={15}
                      viewBox="0 0 22 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.7439 6.40866L15.6014 0.243668C15.4362 0.0852305 15.2154 -0.0022176 14.9865 4.27524e-05C14.7575 0.0023031 14.5386 0.0940923 14.3765 0.255762C14.2144 0.417432 14.122 0.636135 14.1191 0.865056C14.1162 1.09398 14.2031 1.31492 14.3611 1.4806L18.9778 6.11337H1.87597C1.75663 6.10605 1.63706 6.12324 1.52461 6.16388C1.41217 6.20451 1.30923 6.26773 1.22214 6.34964C1.13505 6.43155 1.06564 6.53043 1.0182 6.64017C0.970763 6.74991 0.946289 6.8682 0.946289 6.98775C0.946289 7.10731 0.970763 7.2256 1.0182 7.33534C1.06564 7.44508 1.13505 7.54395 1.22214 7.62586C1.30923 7.70777 1.41217 7.77099 1.52461 7.81162C1.63706 7.85226 1.75663 7.86945 1.87597 7.86214H19.0468L14.3644 12.4916C14.2753 12.5708 14.2033 12.6673 14.1529 12.7753C14.1024 12.8832 14.0744 13.0004 14.0708 13.1195C14.0671 13.2386 14.0878 13.3572 14.1316 13.4681C14.1754 13.5789 14.2413 13.6797 14.3253 13.7642C14.4094 13.8486 14.5098 13.9151 14.6204 13.9595C14.7311 14.0038 14.8496 14.0251 14.9687 14.0221C15.0879 14.0191 15.2051 13.9918 15.3134 13.9419C15.4216 13.892 15.5185 13.8205 15.5982 13.7318L21.7407 7.64887C21.8222 7.5675 21.8869 7.47084 21.9311 7.36444C21.9752 7.25803 21.9979 7.14396 21.9979 7.02876C21.9979 6.91356 21.9752 6.7995 21.9311 6.69309C21.8869 6.58668 21.8222 6.49003 21.7407 6.40866H21.7439Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div>
              <div>
                <Image
                  style={{
                    borderRadius: "50% 50% 0 0",
                  }}
                  alt="blog-3"
                  src={JessHarper}
                  placeholder="blur"
                />
              </div>
              <div className=" bg-[#023A15] p-[35px]">
                <div className=" font-cormorant mb-[37px] text-[36px] text-white">
                  Russian prosecutor seeks to Dolce and Gabbana{" "}
                </div>
                <button className=" flex items-center mt-[30px] font-montserrat text-[#fff] gap-[20px] relative after:content-[''] after:absolute after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:bottom-0 after:left-0 after:bg-[#319E48] font-[500]">
                  <span>LEARN MORE</span>{" "}
                  <span>
                    <svg
                      width={22}
                      height={15}
                      viewBox="0 0 22 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.7439 6.40866L15.6014 0.243668C15.4362 0.0852305 15.2154 -0.0022176 14.9865 4.27524e-05C14.7575 0.0023031 14.5386 0.0940923 14.3765 0.255762C14.2144 0.417432 14.122 0.636135 14.1191 0.865056C14.1162 1.09398 14.2031 1.31492 14.3611 1.4806L18.9778 6.11337H1.87597C1.75663 6.10605 1.63706 6.12324 1.52461 6.16388C1.41217 6.20451 1.30923 6.26773 1.22214 6.34964C1.13505 6.43155 1.06564 6.53043 1.0182 6.64017C0.970763 6.74991 0.946289 6.8682 0.946289 6.98775C0.946289 7.10731 0.970763 7.2256 1.0182 7.33534C1.06564 7.44508 1.13505 7.54395 1.22214 7.62586C1.30923 7.70777 1.41217 7.77099 1.52461 7.81162C1.63706 7.85226 1.75663 7.86945 1.87597 7.86214H19.0468L14.3644 12.4916C14.2753 12.5708 14.2033 12.6673 14.1529 12.7753C14.1024 12.8832 14.0744 13.0004 14.0708 13.1195C14.0671 13.2386 14.0878 13.3572 14.1316 13.4681C14.1754 13.5789 14.2413 13.6797 14.3253 13.7642C14.4094 13.8486 14.5098 13.9151 14.6204 13.9595C14.7311 14.0038 14.8496 14.0251 14.9687 14.0221C15.0879 14.0191 15.2051 13.9918 15.3134 13.9419C15.4216 13.892 15.5185 13.8205 15.5982 13.7318L21.7407 7.64887C21.8222 7.5675 21.8869 7.47084 21.9311 7.36444C21.9752 7.25803 21.9979 7.14396 21.9979 7.02876C21.9979 6.91356 21.9752 6.7995 21.9311 6.69309C21.8869 6.58668 21.8222 6.49003 21.7407 6.40866H21.7439Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#023A15]/70">
        <div className=" max-w-[1500px] mx-auto py-[100px]">
          <h2 className=" text-[76px] max-laptop-sm:text-[40px] relative text-white z-[1] font-cormorant text-center">
            <span className=" absolute top-[30px] z-[-1] left-[50%] translate-x-[-50%]">
              <svg
                width={291}
                height={72}
                viewBox="0 0 291 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.22931 28.4018C3.22931 28.4018 98.5923 -6.73816 214.065 6.61912C329.537 19.9764 264.856 64.5692 169.182 69.0901C73.5077 73.611 -42.5864 51.2119 18.7776 30.4567C80.1417 9.70157 192.193 -9.61512 269.624 16.1747C347.054 41.9645 188.565 76.6935 50.0816 65.6994C-88.4021 54.7053 102.22 3.02293 179.236 1.07071C256.252 -0.881508 323.628 37.5464 255.216 54.3971C186.803 71.2478 33.393 84.7078 18.9849 45.458C4.57683 6.20813 236.35 -1.18975 274.081 11.551"
                  stroke="#319E48"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Get the latest update about our products <br /> and services
          </h2>
          <div className=" w-max mx-auto relative mt-[60px]">
            <input
              className=" max-laptop-sm:w-screen bg-transparent placeholder:text-white placeholder:text-[18px] border outline-none text-white py-[24px] w-[700px] rounded-full  px-[44px] border-white text-[18px] font-[500] font-montserrat"
              type="email"
              placeholder="Your Email..."
              name="email"
              id="email"
            />
            <button className=" bg-white absolute bottom-[5px] right-[5px] mt-[70px] rounded-full flex items-center gap-[20px] text-[#023A15] font-semibold py-[20px] px-[40px] border border-[#fff] box-border hover:bg-transparent hover:text-white transition-all">
              SUBSCRIBE{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={15}
                  viewBox="0 0 22 15"
                  fill="none"
                >
                  <path
                    d="M21.7439 6.40866L15.6014 0.243668C15.4362 0.0852305 15.2154 -0.0022176 14.9865 4.27524e-05C14.7575 0.0023031 14.5386 0.0940923 14.3765 0.255762C14.2144 0.417432 14.122 0.636135 14.1191 0.865056C14.1162 1.09398 14.2031 1.31492 14.3611 1.4806L18.9778 6.11337H1.87597C1.75663 6.10605 1.63706 6.12324 1.52461 6.16388C1.41217 6.20451 1.30923 6.26773 1.22214 6.34964C1.13505 6.43155 1.06564 6.53043 1.0182 6.64017C0.970763 6.74991 0.946289 6.8682 0.946289 6.98775C0.946289 7.10731 0.970763 7.2256 1.0182 7.33534C1.06564 7.44508 1.13505 7.54395 1.22214 7.62586C1.30923 7.70777 1.41217 7.77099 1.52461 7.81162C1.63706 7.85226 1.75663 7.86945 1.87597 7.86214H19.0468L14.3644 12.4916C14.2753 12.5708 14.2033 12.6673 14.1529 12.7753C14.1024 12.8832 14.0744 13.0004 14.0708 13.1195C14.0671 13.2386 14.0878 13.3572 14.1316 13.4681C14.1754 13.5789 14.2413 13.6797 14.3253 13.7642C14.4094 13.8486 14.5098 13.9151 14.6204 13.9595C14.7311 14.0038 14.8496 14.0251 14.9687 14.0221C15.0879 14.0191 15.2051 13.9918 15.3134 13.9419C15.4216 13.892 15.5185 13.8205 15.5982 13.7318L21.7407 7.64887C21.8222 7.5675 21.8869 7.47084 21.9311 7.36444C21.9752 7.25803 21.9979 7.14396 21.9979 7.02876C21.9979 6.91356 21.9752 6.7995 21.9311 6.69309C21.8869 6.58668 21.8222 6.49003 21.7407 6.40866H21.7439Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-[#023A15] pt-[80px]">
        <div className=" max-w-[1500px] mx-auto">
          <div className=" flex flex-wrap gap-[10px] justify-between items-end">
            <div>
              <div className=" mb-[30px]">
                <svg
                  width={217}
                  height={62}
                  viewBox="0 0 217 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38.0458 8.91429C40.3969 9.39521 42.6946 10.2502 45.0458 11.4257C45.4198 11.6395 45.6336 11.8532 45.687 12.0135C45.7405 12.1738 45.8473 12.6013 45.9542 13.2425L46.916 22.9143C46.916 23.0746 46.7557 23.1815 46.4885 23.1815C46.1679 23.2349 46.0076 23.128 45.9542 22.9677C43.4427 13.9372 37.8855 9.39521 29.1756 9.39521C24.6336 9.39521 20.6259 10.4105 17.1527 12.3876C13.6794 14.4181 11.0076 17.2502 9.08397 20.9906C7.1603 24.7311 6.25191 29.0059 6.25191 33.9754C6.25191 38.6776 7.32061 43.0059 9.40458 46.9601C11.4885 50.9143 14.3206 54.0135 17.8473 56.2578C21.374 58.5555 25.2748 59.6776 29.4427 59.6776C33.8779 59.6776 37.5114 58.6089 40.2366 56.4181C43.0153 54.2273 45.0992 50.9677 46.5954 46.4792C46.5954 46.3723 46.7557 46.3189 47.0229 46.3189C47.3969 46.3189 47.6107 46.4257 47.6107 46.586L46.8092 55.5097C46.7557 56.1509 46.6488 56.5784 46.542 56.7387C46.4351 56.899 46.2214 57.1128 45.9008 57.3265C43.0687 58.6624 40.4504 59.6242 37.9924 60.1586C35.5343 60.6929 32.7023 60.9601 29.4962 60.9601C23.7786 60.9601 18.7023 59.8379 14.2672 57.5937C9.72519 55.3494 6.25191 52.1967 3.74046 48.1357C1.22901 44.0746 0 39.4257 0 34.1357C0 29.0593 1.28244 24.5173 3.84733 20.6166C6.41221 16.6624 9.88549 13.6166 14.374 11.4792C18.8626 9.28834 23.8855 8.21963 29.4427 8.21963C32.8626 8.1662 35.7481 8.43337 38.0458 8.91429Z"
                    fill="white"
                  />
                  <path
                    d="M90.8399 59.4092C90.8399 59.7298 90.733 59.8901 90.5727 59.8901C89.3437 59.8901 88.3284 59.8901 87.5803 59.7832L83.1986 59.6764L78.817 59.7832C78.0689 59.8367 77.0536 59.8901 75.8246 59.8901C75.6643 59.8901 75.5574 59.7298 75.5574 59.4092C75.5574 59.0886 75.6643 58.9283 75.8246 58.9283C77.2673 58.9283 78.3895 58.768 79.0841 58.5008C79.7788 58.1802 80.2597 57.6458 80.5269 56.8977C80.7941 56.0962 80.9544 54.9206 80.9544 53.371V40.3863C80.9544 37.1802 80.3666 34.829 79.1376 33.2794C77.9086 31.7298 76.0383 30.9817 73.4734 30.9817C71.817 30.9817 70.107 31.4092 68.3437 32.3176C66.6337 33.226 65.0307 34.455 63.6414 36.0046V53.3176C63.6414 54.8672 63.8017 56.0962 64.0689 56.8443C64.336 57.6458 64.817 58.1802 65.5116 58.4474C66.2063 58.768 67.275 58.8748 68.7712 58.8748C68.9315 58.8748 69.0383 59.0351 69.0383 59.3558C69.0383 59.6764 68.9315 59.8367 68.7712 59.8367C67.5421 59.8367 66.5269 59.8367 65.7788 59.7298L61.3971 59.6229L57.0154 59.7298C56.2673 59.7832 55.2521 59.8367 54.0231 59.8367C53.8628 59.8367 53.7559 59.6764 53.7559 59.3558C53.7559 59.0351 53.8628 58.8748 54.0231 58.8748C55.4658 58.8748 56.5879 58.7145 57.2826 58.4474C57.9773 58.1267 58.4582 57.5924 58.7254 56.8443C58.9925 56.0428 59.1528 54.8672 59.1528 53.3176V11.2641C59.1528 9.28705 58.9391 7.89774 58.565 7.04278C58.191 6.18781 57.4963 5.76033 56.5345 5.76033C55.733 5.76033 54.4505 6.13438 52.7941 6.88247H52.6337C52.4734 6.88247 52.3131 6.72216 52.2063 6.45499C52.0994 6.18781 52.1528 6.02751 52.3666 5.97407L62.6261 0.951172H62.8933C63.107 0.951172 63.2673 1.00461 63.4276 1.16491C63.5879 1.32522 63.6414 1.43209 63.6414 1.59239V34.6153C65.7254 32.2107 67.7559 30.5008 69.7864 29.3787C71.817 28.2565 73.9544 27.7222 76.1452 27.7222C79.1376 27.7222 81.4353 28.5771 83.0383 30.2336C84.6414 31.8901 85.4963 34.3481 85.4963 37.5542V53.3176C85.4963 54.8672 85.6567 56.0962 85.9238 56.8443C86.191 57.6458 86.6719 58.1802 87.3666 58.4474C88.0612 58.768 89.1299 58.8748 90.6261 58.8748C90.733 58.9283 90.8399 59.0886 90.8399 59.4092Z"
                    fill="white"
                  />
                  <path
                    d="M95.3819 59.4099C95.3819 59.0893 95.4887 58.929 95.649 58.929C97.0918 58.929 98.2139 58.7687 98.9086 58.5015C99.6032 58.1809 100.084 57.6465 100.351 56.8984C100.619 56.0969 100.779 54.9213 100.779 53.3717V11.2648C100.779 9.28775 100.565 7.89844 100.191 7.04348C99.817 6.18851 99.1223 5.76103 98.1605 5.76103C97.359 5.76103 96.0765 6.13508 94.42 6.88317H94.2597C94.0994 6.88317 93.9925 6.72287 93.8857 6.45569C93.7788 6.18851 93.8322 6.02821 93.9925 5.97477L104.412 1.00531C104.519 0.951873 104.68 0.898438 104.84 0.898438C104.947 0.898438 105.107 0.951873 105.267 1.11218C105.481 1.27248 105.535 1.37935 105.535 1.53966V53.3183C105.535 54.8679 105.641 56.0435 105.909 56.7916C106.176 57.5397 106.603 58.074 107.351 58.3946C108.046 58.7152 109.115 58.8755 110.611 58.8755C110.771 58.8755 110.878 59.0358 110.878 59.3565C110.878 59.6771 110.771 59.8374 110.611 59.8374C109.435 59.8374 108.42 59.8374 107.672 59.7305H103.13L98.7483 59.8374C98.0002 59.8908 96.9849 59.9442 95.649 59.9442C95.4887 59.8908 95.3819 59.7305 95.3819 59.4099Z"
                    fill="white"
                  />
                  <path
                    d="M123.809 58.6624C121.405 57.1128 119.534 55.0288 118.252 52.4105C116.97 49.7922 116.275 46.9067 116.275 43.8075C116.275 40.2808 117.13 37.2884 118.84 34.8304C120.55 32.3724 122.741 30.5021 125.412 29.3266C128.084 28.0976 130.809 27.5098 133.588 27.5098C136.794 27.5098 139.573 28.3113 141.977 29.8609C144.382 31.4105 146.199 33.4945 147.481 36.0594C148.763 38.6243 149.405 41.3495 149.405 44.235C149.405 47.6014 148.603 50.5403 147.054 53.0517C145.504 55.5632 143.366 57.5403 140.748 58.9296C138.13 60.3189 135.244 61.0136 132.145 61.0136C128.992 60.9601 126.214 60.2121 123.809 58.6624ZM141.443 56.2579C143.046 54.1205 143.901 50.9143 143.901 46.4792C143.901 43.1128 143.367 40.1205 142.244 37.4487C141.122 34.7769 139.626 32.693 137.649 31.2502C135.672 29.754 133.481 29.0059 130.97 29.0059C128.031 29.0059 125.786 30.0747 124.183 32.1586C122.58 34.296 121.779 37.2884 121.779 41.2426C121.779 44.5556 122.313 47.6014 123.382 50.3266C124.45 53.1052 126 55.296 127.924 56.8991C129.901 58.5021 132.092 59.3571 134.496 59.3571C137.489 59.4105 139.786 58.3418 141.443 56.2579Z"
                    fill="white"
                  />
                  <path
                    d="M178.099 28.7389C179.168 29.3801 179.702 30.1816 179.702 31.09C179.702 31.7847 179.489 32.3725 179.008 32.8534C178.527 33.3343 177.886 33.6015 177.031 33.6015C176.55 33.6015 176.122 33.4946 175.748 33.3343C175.374 33.1206 175 32.8534 174.466 32.4794C173.985 32.0519 173.504 31.7313 173.076 31.5175C172.649 31.3038 172.115 31.1969 171.527 31.1969C170.832 31.1969 170.084 31.5175 169.283 32.1053C168.481 32.6931 167.252 33.9755 165.596 35.9526V53.3191C165.596 54.9221 165.809 56.1511 166.183 56.8992C166.611 57.6473 167.359 58.1816 168.428 58.5023C169.496 58.8229 171.206 58.9297 173.451 58.9297C173.664 58.9297 173.771 59.09 173.771 59.4107C173.771 59.7313 173.664 59.8916 173.451 59.8916C171.741 59.8916 170.351 59.8916 169.283 59.7847L163.244 59.6778L158.756 59.7847C158.061 59.8381 157.099 59.8916 155.817 59.8916C155.657 59.8916 155.55 59.7313 155.55 59.4107C155.55 59.09 155.657 58.9297 155.817 58.9297C157.26 58.9297 158.382 58.7694 159.076 58.5023C159.771 58.1816 160.252 57.7007 160.519 56.8992C160.786 56.1511 160.893 54.9221 160.893 53.3191V37.2351C160.893 35.4183 160.68 34.0824 160.252 33.2275C159.825 32.4259 159.076 31.9984 158.061 31.9984C157.206 31.9984 155.71 32.4259 153.68 33.2275H153.519C153.305 33.2275 153.145 33.1206 153.092 32.8534C152.985 32.5862 153.092 32.4259 153.305 32.3191L162.763 27.8305L163.244 27.7236C163.725 27.7236 164.26 28.3649 164.794 29.5939C165.328 30.8229 165.596 32.4259 165.596 34.403V34.5099C167.84 31.8916 169.603 30.1282 170.886 29.1664C172.168 28.2045 173.451 27.7236 174.626 27.7236C175.855 27.7771 177.031 28.0977 178.099 28.7389Z"
                    fill="white"
                  />
                  <path
                    d="M191.404 58.6624C189 57.1128 187.13 55.0288 185.847 52.4105C184.565 49.7922 183.87 46.9067 183.87 43.8075C183.87 40.2808 184.725 37.2884 186.435 34.8304C188.145 32.3724 190.336 30.5021 193.008 29.3266C195.679 28.0976 198.404 27.5098 201.183 27.5098C204.389 27.5098 207.168 28.3113 209.572 29.8609C211.977 31.4105 213.794 33.4945 215.076 36.0594C216.359 38.6243 217 41.3495 217 44.235C217 47.6014 216.198 50.5403 214.649 53.0517C213.099 55.5632 210.962 57.5403 208.343 58.9296C205.725 60.3189 202.84 61.0136 199.74 61.0136C196.588 60.9601 193.809 60.2121 191.404 58.6624ZM208.985 56.2579C210.588 54.1205 211.443 50.9143 211.443 46.4792C211.443 43.1128 210.908 40.1205 209.786 37.4487C208.664 34.7769 207.168 32.693 205.191 31.2502C203.214 29.754 201.023 29.0059 198.511 29.0059C195.572 29.0059 193.328 30.0747 191.725 32.1586C190.122 34.296 189.32 37.2884 189.32 41.2426C189.32 44.5556 189.855 47.6014 190.924 50.3266C191.992 53.1052 193.542 55.296 195.466 56.8991C197.443 58.5021 199.633 59.3571 202.038 59.3571C205.084 59.4105 207.382 58.3418 208.985 56.2579Z"
                    fill="white"
                  />
                  <path
                    d="M167.807 18.6049L175.704 10.708L167.807 2.81116L159.91 10.708L167.807 18.6049Z"
                    fill="#567C49"
                  />
                  <path
                    d="M202.005 18.6049L209.902 10.708L202.005 2.81116L194.109 10.708L202.005 18.6049Z"
                    fill="#567C49"
                  />
                </svg>
              </div>
              <div className=" mb-[50px]">
                <p className=" text-[18px] max-w-[500px] font-[500] font-montserrat text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  lobortis sed sapien in pretium.
                </p>
              </div>
              <ul className=" flex gap-[15px] footer__social">
                <li>
                  <FaWhatsapp />
                </li>
                <li>
                  <FaYoutube />
                </li>
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <FaInstagram />
                </li>
              </ul>
            </div>
            <div className="footer__list">
              <ul>
                <li className=" font-cormorant text-[40px] text-white">
                  Products
                </li>
                <li className=" text-[18px] font-[500] font-montserrat text-white">
                  Skincare
                </li>
                <li className=" text-[18px] font-[500] font-montserrat text-white">
                  Make Up
                </li>
                <li className=" text-[18px] font-[500] font-montserrat text-white">
                  Shampoo
                </li>
              </ul>
            </div>
            <div className="footer__list">
              <ul>
                <li className=" font-cormorant text-[40px] text-white">
                  About Us
                </li>
                <li className=" text-[18px] font-[500] font-montserrat text-white">
                  Our Shop
                </li>
                <li className=" text-[18px] font-[500] font-montserrat text-white">
                  Career
                </li>
                <li className=" text-[18px] font-[500] font-montserrat text-white">
                  Specialist
                </li>
              </ul>
            </div>
            <div className="footer__list">
              <ul>
                <li className=" font-cormorant text-[40px] text-white">
                  Support
                </li>
                <li className=" text-[18px] font-[500] font-montserrat text-white">
                  Blog
                </li>
                <li className=" text-[18px] font-[500] font-montserrat text-white">
                  Help
                </li>
                <li className=" text-[18px] font-[500] font-montserrat text-white">
                  FAQs
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className=" mt-[100px]" />
        <p className=" py-[10px] text-center text-white text-[18px]">
          Copyright © 2021 ASK Project
        </p>
      </div>
    </main>
  );
}
