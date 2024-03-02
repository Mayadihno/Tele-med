import React, { useState } from "react";
import styles from "../../style/styles";
import { useSelector } from "react-redux";
import { MdOutlineMessage } from "react-icons/md";
import image from "../../assets/doc.svg";
import { IoMdCheckboxOutline } from "react-icons/io";
import { PiHeartbeat } from "react-icons/pi";
import { MdOutlineMonitorHeart } from "react-icons/md";
import { IoFootsteps } from "react-icons/io5";
import image1 from "../../assets/defaultimg.png";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiBodyHeight } from "react-icons/gi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import DashHead from "./DashHead";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import { clearUserData } from "../../redux/slice";

const DashContent = () => {
  const { userData } = useSelector((state) => state.user);
  const [value, onChange] = useState(new Date());
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/", { replace: true });
    dispatch(clearUserData());
  };
  return (
    <React.Fragment>
      <div className={`${styles.section} mt-5 mb-10`}>
        <div className="800px:flex 800px:justify-between 800px:flex-row flex flex-col">
          <div className="right 800px:w-[75%] w-full">
            <DashHead />
            <h3 className=" text-[16px] font-[600] 800px:ml-20 ml-10 mb-2">
              Device Connected
            </h3>
            <div className=" bg-[#FAFFEA] shadow-xl w-full h-min rounded-[20px] px-8 py-4">
              <div className="800px:flex 800px:items-center 800px:flex-row flex flex-col">
                <div className="">
                  <h2 className=" text-[#7FB843] font-[600] 800px:mt-[-30px]">
                    Hello,
                    <span className=" capitalize 800px:text-[16px] text-[14px] font-[600] ml-3 text-black">
                      {userData?.fullName}
                    </span>
                  </h2>

                  <div className="800px:mt-20 mt-5">
                    <h4 className="800px:pb-6 pb-3 800px:ml-10 ml-5">
                      Message from <span className="font-[600]">Dr Caleb</span>
                    </h4>
                    <div className="flex items-center 800px:pb-0 pb-4">
                      <MdOutlineMessage
                        color="#7FB843"
                        size={20}
                        className=""
                      />
                      <p className="text-[12px] 800px:w-[70%] w-full ml-4">
                        I understand your concerns, and I want to reassure you
                        that we are here to support you through this process
                      </p>
                    </div>
                  </div>
                </div>
                <div className="image w-full">
                  <img src={image} className="w-full" alt="" />
                </div>
              </div>
            </div>
            <div className="card mt-10">
              <h3 className="ml-14 text-[16px] pb-3 font-[600]">Test Result</h3>
              <div className="800px:grid 800px:grid-cols-4 grid grid-cols-1 800px:gap-6 gap-3">
                <div className=" bg-white shadow-xl 800px:px-4 px-8 rounded-[20px]">
                  <h5 className="pb-2 text-[16px] font-[500]">urinalysis</h5>
                  <div className="flex flex-col space-y-1 ">
                    <div className="flex items-center">
                      <h6 className="text-[14px] font-[500]">pH</h6>
                      <IoMdCheckboxOutline
                        size={17}
                        color="#7FB843"
                        className="ml-2"
                      />
                    </div>
                    <div className="flex items-center">
                      <h6 className="text-[14px] font-[500]">Protein</h6>
                      <IoMdCheckboxOutline
                        size={17}
                        color="#7FB843"
                        className="ml-2"
                      />
                    </div>
                    <div className="flex items-center">
                      <h6 className="text-[14px] font-[500]">Glucose</h6>
                      <IoMdCheckboxOutline
                        size={17}
                        color="#7FB843"
                        className="ml-2"
                      />
                    </div>
                    <div className="flex items-center pb-2">
                      <h6 className="text-[14px] font-[500]">Ketones</h6>
                      <IoMdCheckboxOutline
                        size={17}
                        color="#7FB843"
                        className="ml-2"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow-xl 800px:px-4 px-8 py-10 800px:py-0 rounded-[20px]">
                  <div className="flex items-center justify-between">
                    <PiHeartbeat
                      color="#93000A"
                      size={30}
                      style={{ fontWeight: "bold" }}
                    />
                    <h6 className="800px:text-[13px] text-[15px] font-[500]">
                      heart rate
                    </h6>
                  </div>
                  <h4 className="text-[#93000A] text-[15px] font-[600] text-center py-2">
                    104 beat per min
                  </h4>
                  <h5 className="text-[13px] pt-6 text-center">
                    Your heart rate is normal
                  </h5>
                </div>
                <div className="bg-white shadow-xl  rounded-[20px] 800px:px-4 px-8 py-10 800px:py-0">
                  <div className="flex items-center justify-between">
                    <MdOutlineMonitorHeart
                      color="#93000A"
                      size={30}
                      style={{ fontWeight: "bold" }}
                    />
                    <h6 className="text-[13px] font-[500]">90 mmhg</h6>
                  </div>
                  <h4 className="text-[#93000A] text-[15px] font-[600] text-center py-2">
                    Blood Pressure
                  </h4>
                  <h5 className="text-[13px] pt-6 text-center">
                    Your blood pressure rate is normal
                  </h5>
                </div>
                <div className="bg-white shadow-xl 800px:px-4 px-8 py-10 800px:py-0 rounded-[20px]">
                  <div className="flex items-center justify-between">
                    <IoFootsteps
                      color="#21005D"
                      size={30}
                      style={{ fontWeight: "bold" }}
                    />
                    <h6 className="text-[13px] font-[500]">2,011 steps</h6>
                  </div>
                  <h4 className="text-[#21005D] text-[15px] font-[600] text-center py-2">
                    Steps
                  </h4>
                  <h5 className="text-[13px] pt-6 text-center">
                    Needs 7,869 more steps to complete 10,000 step
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="left 800px:w-[25%] w-full 800px:ml-4 800px:mt-0 mt-5">
            <div className="flex flex-col space-y-6">
              <div className="first">
                <div className="bg-black shadow-gray-500 rounded-[10px]">
                  <div className="w-[80px] mx-auto">
                    <div className="pt-8 pb-4">
                      {userData?.imageUrl ? (
                        <img
                          src={userData?.imageUrl}
                          className=" rounded-[20px] w-[100px] h-[80px]"
                          alt=""
                        />
                      ) : (
                        <img
                          src={image1}
                          className=" rounded-[20px] w-[100px]"
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                  <h5 className="text-white text-center capitalize">
                    {userData?.fullName}
                  </h5>
                  <h5 className="text-white text-center pt-1 capitalize">
                    {userData?.phone}
                  </h5>
                  <div className="flex items-center justify-between p-4">
                    <div className="first bg-white h-[96px] px-3 py-2 rounded-[5px] text-center">
                      <GiWeightLiftingUp
                        color="#7FB843"
                        size={30}
                        className="mx-auto cursor-pointer"
                      />
                      <h5 className=" text-[13px] pt-2 pb-1 font-[600]">
                        Weight
                      </h5>
                      <h6 className=" text-[12px] font-[600]">50kg</h6>
                    </div>
                    <div className="first bg-white h-[96px] px-3 py-2 rounded-[5px] text-center">
                      <GiBodyHeight
                        color="#7FB843"
                        size={30}
                        className="mx-auto cursor-pointer"
                      />
                      <h5 className=" text-[13px] pt-2 pb-1 font-[600]">
                        Height
                      </h5>
                      <h6 className=" text-[12px] font-[600]">150cm</h6>
                    </div>
                    <div
                      className="first bg-white h-[96px] px-3 py-2 rounded-[5px] text-center"
                      onClick={handleLogout}
                    >
                      <RiLogoutCircleRLine
                        color="#7FB843"
                        size={30}
                        className="mx-auto cursor-pointer"
                      />
                      <h5 className=" text-[13px] pt-3 font-[600]">Sign out</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="calender">
                <Calendar
                  onChange={onChange}
                  value={value}
                  className="custom-calendar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashContent;
