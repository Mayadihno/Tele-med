import React from "react";
import styles from "../../style/styles";
import { Autoplay } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { testimony } from "../Data/data";
import { FaRegStar, FaStar } from "react-icons/fa6";
import image from "../../assets/circle9.svg";
import image1 from "../../assets/circle10.svg";
const Testimony = () => {
  return (
    <React.Fragment>
      <div className="testimony">
        <div className={`${styles.section}`}>
          <h1 className="text-center py-12 text-[30px] tracking-widest font-[700]">
            Testimony
          </h1>
          <div className="mt-3 800px:pl-20 pl-10">
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
                  spaceBetween: 10,
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
              <div className="grid grid-cols-3">
                {testimony.map((item) => (
                  <>
                    <SwiperSlide key={item.id}>
                      <div className="flex flex-col w-[300px]">
                        <div className=" w-full object-cover">
                          <img src={item.image} className="w-full" alt="" />
                        </div>
                        <div className=" text-black pt-6">
                          <div className="flex justify-between items-center">
                            <FaQuoteLeft
                              className="text-green-700 mb-3"
                              size={20}
                            />
                            <div className="flex items-cente">
                              <FaStar className="text-yellow-500" />
                              <FaStar className="text-yellow-500" />
                              <FaStar className="text-yellow-500" />
                              <FaStar className="text-yellow-500" />
                              <FaRegStar className="text-yellow-500" />
                              <span className="text-[13px] ml-2">80%</span>
                            </div>
                          </div>
                          <h4 className=" text-[13px] italic">{item.text}</h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="ml-[-30px] mt-[-30px]">
            <img src={image} className="w-[120px]" alt="" />
          </div>
          <div className="w-[100px] mt-[-30px] ml-[-30px]]">
            <img src={image1} className=" w-full" alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Testimony;
