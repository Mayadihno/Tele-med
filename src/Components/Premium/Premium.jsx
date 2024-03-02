import React from "react";
import image4 from "../../assets/circle1.svg";
import image5 from "../../assets/Ellipse 12.svg";
import image6 from "../../assets/circle3.svg";
import image7 from "../../assets/circle4.svg";
import image from "../../assets/woman.svg";
import image1 from "../../assets/circle5.svg";
import { FaRegCirclePlay } from "react-icons/fa6";
const Premium = () => {
  return (
    <React.Fragment>
      <div className="bg-[#1C3700] 800px:h-[75vh] h-[50vh]">
        <h2 className=" text-center text-white 800px:py-10 py-3 text-[25px] font-[700]">
          Premium Care
        </h2>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <img
              src={image4}
              className="w-[150px] h-[150px] mt-[-76px] 800px:ml-[-40px] ml-[-25px] mb-3"
              alt=""
            />
            <img
              src={image5}
              className="w-[120px] h-[120px] mt-[-6px] 800px:ml-[-30px] ml-[-15px]"
              alt=""
            />
            <img
              src={image7}
              className="w-[90px] h-[90px] mt-[-5px] 800px:ml-[-25px] ml-[-18px]"
              alt=""
            />
            <img
              src={image6}
              className="w-[65px] h-[65px] mt-[-6px] ml-[-20px]"
              alt=""
            />
          </div>
          <div className="w-[700px] h-[350px] relative">
            <img src={image} className="w-full h-full" alt="" />
            <div className="absolute left-[50%] top-[50%] bg-gray-400 py-2 px-2 transform -translate-x-1/2 -translate-y-1/2">
              <FaRegCirclePlay size={50} className=" cursor-pointer" />
            </div>
          </div>
          <div className="">
            <img
              src={image1}
              className="w-[150px] h-[150px] mt-[-56px] mr-[-30px] mb-3"
              alt=""
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Premium;
