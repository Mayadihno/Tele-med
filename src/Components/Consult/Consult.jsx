import React from "react";
import styles from "../../style/styles";
import image1 from "../../assets/nurse1.svg";
import image2 from "../../assets/nurse2.svg";
import image3 from "../../assets/nurse3.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { images } from "../Data/data";
const Consult = () => {
  return (
    <React.Fragment>
      <div className="bg-[#1D1B20] 800px:h-[100vh] h-min">
        <div className={`${styles.section}`}>
          <div className="text-center pt-20">
            <h3 className=" text-[#DCFFB5] text-[25px] tracking-normal 800px:w-[50%] w-full mx-auto">
              The key to delivering exceptional virtual care lies in the
              excellence of our doctors.
            </h3>
          </div>
          <div className="800px:flex 800px:flex-row flex flex-col text-white pt-16 800px:w-[70%] w-full mx-auto">
            <h3 className="800px:w-[45%] w-full mx-auto text-[14px]">
              Certified by recognized boards | Ranked among the top 5% of global
              medical specialists | Over 90% satisfaction rating Discover the
              reasons behind our excellence
            </h3>
            <div className="800px:w-[35%] w-full">
              <div className=" 800px:flex 800px:justify-end flex justify-center mt-8 800px:mt-0">
                <button className="border border-white px-8 py-2 hover:border-green-500 hover:text-green-500">
                  Talk to a consultant
                </button>
              </div>
            </div>
          </div>
          <div className="800px:flex 800px:items-center w-[80%] mx-auto hidden">
            <img src={image1} className="w-[300px] mt-[94px]" alt="" />
            <div className="mb-[2px]">
              <img src={image2} className="w-[300px]" alt="" />
            </div>
            <img src={image3} className="w-[300px] mt-[98px]" alt="" />
          </div>
          <div className="800px:hidden 800px:items-center w-full mx-auto">
            <div className="mt-3">
              <Swiper
                modules={[Autoplay]}
                // slidesPerView={3}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  // mobile landscape
                  478: {
                    slidesPerView: 1,
                    // spaceBetween: 10,
                  },
                  // When window width is <= 640px (mobile screens)
                  640: {
                    slidesPerView: 1,
                  },
                  // When window width is <= 768px (tablet screens)
                  768: {
                    slidesPerView: 2,
                  },
                  // When window width is <= 1024px (desktop screens)
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              >
                {images.map((item) => (
                  <>
                    <SwiperSlide key={item.id}>
                      <div className="" key={item.id}>
                        <img
                          src={item.image}
                          className=" !w-[350x] h-[350px] object-contain"
                        />
                      </div>
                    </SwiperSlide>
                  </>
                ))}
              </Swiper>
            </div>
            {/* <img src={image1} className="w-[350px] mt-[51px]" alt="" />
            <div className="">
              <img src={image2} className="w-[350px] mt-2" alt="" />
            </div>
            <img src={image3} className="w-[350px] mt-[52px]" alt="" /> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Consult;
