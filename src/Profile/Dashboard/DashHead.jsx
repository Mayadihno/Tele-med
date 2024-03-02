import React from "react";
import image from "../../assets/logo.png";
import { IoNotifications } from "react-icons/io5";
import { FaSortDown } from "react-icons/fa";
const DashHead = () => {
  return (
    <React.Fragment>
      <div className=" 800px:w-[85%] w-full mx-auto">
        <div className="flex justify-between mb-10">
          <div className="flex items-center">
            <img
              src={image}
              alt="logo"
              className="w-[40px] h-40px] object-cover cursor-pointer"
            />
            <h3 className="ml-5 font-[700]">ACTFA</h3>
          </div>
          <div className="flex space-x-14">
            <div className="flex">
              <IoNotifications
                size={40}
                color="#7FB843"
                className="cursor-pointer relative"
              />
              <div className="bg-[#7FB843] ml-[-15px] w-[10px] h-[10px] animate-pulse rounded-full"></div>
            </div>
            <div className="flex items-center">
              <h4 className="text-[14px]">Today</h4>
              <FaSortDown
                size={20}
                className="mb-1 cursor-pointer"
                color="#7FB843"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashHead;
