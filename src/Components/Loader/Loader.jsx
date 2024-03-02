/* eslint-disable react/prop-types */
import React from "react";
import { DNA } from "react-loader-spinner";

const Loader = ({ text }) => {
  return (
    <React.Fragment>
      <div className="fixed w-full h-screen top-0 left-0 bg-[#000000c4] z-50 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <DNA
            visible={true}
            height="100"
            width="100"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
          <div className=" text-white pt-4 font-[500] font-Poppins text-[16px]">
            <h4>{text}</h4>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Loader;
