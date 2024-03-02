import React from "react";
import image from "../../assets/Ellipse 11.png";
import image1 from "../../assets/mdi_open-source-initiative.svg";
import { icons } from "../Data/data";
import styles from "../../style/styles";

const Services = () => {
  return (
    <React.Fragment>
      <div className="smile 800px:mt-0 mt-[-140px]">
        <div className=" absolute left-[55%]  transform -translate-x-1/2 -translate-y-1/2 text-center">
          <img src={image} className="800px:w-[60%] w-[65%]" alt="" />
          <div className="800px:-mt-24 mt-[-80px]">
            <div className=" text-white">
              <p className=" 800px:mr-32 mr-16 800px:text-[23px] text-[16px]">
                Our Services
              </p>
            </div>
          </div>
        </div>
        <div className="absolute 800px:top-[150px] top-[100px] ">
          <div className="800px:flex 800px:justify-between 800px:items-center 800px:flex-row flex flex-col">
            <div className="800px:ml-[100px] ml-5">
              {icons.map((item) => {
                return (
                  <div
                    className="flex items-center 800px:py-7 py-6"
                    key={item.id}
                  >
                    <img
                      src={item.icon}
                      className="w-[25px] 800px:w-[35px]"
                      alt=""
                    />
                    <h5 className="text-white 800px:ml-3 ml-1">{item.text}</h5>
                  </div>
                );
              })}
            </div>
            <div className=" 800px:ml-[650px] ml-[100px] mt-6 800px:mt-0 text-white 800px:block hidden">
              <h4 className="text-[25px] font-[600] tracking-widest">
                We are available <span className="block">to assist you.</span>
              </h4>
              <div className=" 800px:mt-24 mt-8 py-2 800px:px-5">
                <button className="flex items-center ml-2 border-2 border-white px-8 py-2">
                  check it out
                  <span className="ml-4">
                    <img src={image1} className="w-[30px]" alt="" />
                  </span>
                </button>
              </div>
            </div>
            <div className="text-center mt-5 800px:hidden">
              <h4 className="text-[25px] font-[600] tracking-widest text-white">
                We are available <span className="block">to assist you.</span>
              </h4>
              <div className="button mt-4 text-white">
                <button className="border-2 border-white px-10 rounded-[4px] shadow-lg py-2 hover:border-green-600">
                  check it out
                </button>
              </div>
            </div>
          </div>
          <div
            className={`${styles.section} text-center 800px:mt-10 mt-16 800px:ml-[120px] text-white`}
          >
            <p className="800px:w-[85%] w-[90%]">
              Service offerings are subject to variation based on your health
              plan or employer. Kindly establish your account to view the
              specific services accessible to you.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Services;
