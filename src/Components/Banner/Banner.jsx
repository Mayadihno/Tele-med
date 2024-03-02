import React from "react";
import image from "../../assets/rec1.svg";
import image1 from "../../assets/rec2.svg";
import banner from "../../assets/banner1.svg";

const Banner = () => {
  return (
    <React.Fragment>
      <div className="800px:flex 800px:justify-between 800px:items-center 800px:flex-row flex-col flex">
        <div className="800px:w-[30%] 800px:ml-[100px] w-full mt-[100px] px-4 800px:px-0">
          <div className="flex items-center ml-4">
            <div className="flex gap-4">
              <img
                src={image}
                className="custom-rotate-counterclockwise"
                alt=""
              />
              <img src={image1} className="animate-spin" alt="" />
              <img
                src={image}
                alt=""
                className="custom-rotate-counterclockwise"
              />
            </div>
            <div className="ml-16">
              <h3 className="text-[18px] font-[700]">24 hours Service</h3>
            </div>
          </div>
          <div className="800px:mt-4 mt-6">
            <h1 className="text-[30px] font-[700] tracking-wide leading-8">
              Time and Appropriate Care
            </h1>
          </div>
          <div className="800px:mt-5 mt-6">
            <p className="text-[16px] font-[600] font-Roboto text-green-500">
              Connect with a doctor, therapist, or medical professional via
              phone or video from any location
            </p>
          </div>

          <div className="mt-6 800px:mb-0 mb-4">
            <button className="border-4 border-t-0 px-8 py-4 border-gray-300 relative overflow-hidden hover:border-gray-500 focus:outline-none text-black hover:text-black font-bold rounded-[5px] border-r-0 transition duration-300">
              Get a Doctor !
              <span className="absolute inset-0 border-[3px] rounded-[5px] border-black mx-[1px] mb-[2px]"></span>
            </button>
          </div>
        </div>
        <div className=" 800px:w-[70%] 800px:h-[80vh] 800px:mt-0 w-full h-[60vh] mt-[-150px]">
          <img src={banner} className="w-full h-full" alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
