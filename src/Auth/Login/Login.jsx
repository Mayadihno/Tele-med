/* eslint-disable no-constant-condition */
import React, { useState } from "react";
import styles from "../../style/styles";
import image1 from "../../assets/login1.svg";
import image2 from "../../assets/login3.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import image3 from "../../assets/Ellipse1.svg";
import image4 from "../../assets/Ellipse2.svg";
import image5 from "../../assets/Ellipse3.svg";
import image6 from "../../assets/reg1.svg";
import image7 from "../../assets/reg2.svg";
import image8 from "../../assets/reg3.svg";
import Register from "../Register/Register";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../Firebase/firebase";
const Login = () => {
  const [active, setActive] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/user-dashboard", { replace: true });
      e.target.reset();
    } catch (error) {
      if (error.code === "auth/wrong-password" || "auth/user-not-found") {
        toast.error("Incorrect Email or Password");
      }
    }
  };

  return (
    <React.Fragment>
      <div
        className={`${styles.section} 800px:mt-16 mt-[100px] mb-10 px-[-20px]`}
      >
        <div className="flex justify-around">
          {active === 1 ? (
            <div className=" 800px:block hidden">
              <div className="right flex flex-col space-y-16">
                <div className="flex items-center">
                  <h4 className="absolute z-40 left-[9.3%] text-[14px] font-[600]">
                    Primary 360 Services
                  </h4>
                  <img src={image1} className="w-[150px] relative" alt="" />
                </div>
                <div className="ml-[-100px] flex items-center">
                  <img src={image2} className="w-[150px] relative" alt="" />
                  <h4 className="absolute z-40 left-[17.5%] text-[14px] font-[600]">
                    Mental Health <br /> Support
                  </h4>
                </div>
              </div>
            </div>
          ) : (
            <div className=" 800px:block hidden">
              <div className="mt-14">
                <div className="right flex flex-col space-y-16">
                  <div className=" ml-[-100px] flex items-center">
                    <h4 className="absolute z-40 left-[16.8%] text-[14px] font-[600]">
                      Specialists & Expert <br />
                      Opinions
                    </h4>
                    <img src={image6} className="w-[150px] relative" alt="" />
                  </div>
                  <div className=" flex items-center">
                    <img src={image7} className="w-[150px] relative" alt="" />
                    <h4 className="absolute z-40 left-[12.5%] text-[14px] font-[600]">
                      Wellness Care <br />
                      Options
                    </h4>
                  </div>
                  <div className=" ml-[-100px] flex items-center">
                    <img src={image8} className="w-[150px] relative" alt="" />
                    <h4 className="absolute z-40 left-[17%] text-[14px] font-[600]">
                      Comprehensive <br /> Healthcare
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="active">
            <div className="flex w-full space-x-24 border border-gray-300 px-3 py-2 rounded-[5px]  ">
              <div className="relative">
                <h5
                  className={`px-1 leading-5 ${
                    active === 2 ? "text-[#000]" : " text-gray-400"
                  } text-[13px] font-[600] mb-2 cursor-pointer 800px:text-[14px]`}
                  onClick={() => setActive(2)}
                >
                  Become a Member
                </h5>
                {active === 2 ? (
                  <div
                    className={`absolute bottom-[-27%] left-0 h-[4px] mb-2 rounded-full w-full bg-green-500`}
                  />
                ) : (
                  <div
                    className={`absolute bottom-[-27%] left-0 h-[4px] mb-2 rounded-full w-full bg-gray-200`}
                  />
                )}
              </div>
              <div className="relative">
                <h5
                  className={`px-1 leading-5 ${
                    active === 1 ? "text-[#000]" : " text-gray-400"
                  } text-[13px] font-[600] mb-2 cursor-pointer 800px:text-[14px]`}
                  onClick={() => setActive(1)}
                >
                  Patient Login
                </h5>
                {active === 1 ? (
                  <div
                    className={`absolute bottom-[-27%] left-0 h-[4px] mb-2 rounded-full w-full bg-green-500`}
                  />
                ) : (
                  <div
                    className={`absolute bottom-[-27%] left-0 h-[4px] mb-2 rounded-full w-full bg-gray-200`}
                  />
                )}
              </div>
            </div>
            {active === 1 ? (
              <div className=" mt-8">
                <h1 className="text-[30px] font-[600] mb-3">Welcome back!</h1>
                <p className="text-[14px] mb-3">
                  To continue, kindly input the required information below
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="py-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address<span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="yourEmail@gmail.com"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="py-3">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password<span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type={!visible ? "password" : "text"}
                        name="password"
                        id="password"
                        required
                        placeholder="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      />
                      {visible ? (
                        <AiOutlineEye
                          className="absolute top-2 right-2 cursor-pointer"
                          size={25}
                          onClick={() => setVisible(false)}
                        />
                      ) : (
                        <AiOutlineEyeInvisible
                          className="absolute top-2 right-2 cursor-pointer"
                          size={25}
                          onClick={() => setVisible(true)}
                        />
                      )}
                    </div>
                  </div>
                  <div className={`${styles.normalFlex} justify-between`}>
                    <h4 className="text-sm">
                      Not having account ?
                      <Link
                        className="text-gray-500 pl-1 underline"
                        onClick={() => setActive(2)}
                      >
                        Sign up
                      </Link>
                    </h4>

                    <div className="text-sm font-medium text-gray-500 hover:text-gray-500">
                      <Link>Forgot password</Link>
                    </div>
                  </div>
                  <div className=" mt-3 flex justify-end">
                    <button
                      type="submit"
                      className="group relative h-[35px] py-2 px-4 border-transparent text-sm font-medium rounded-md text-white bg-[#7FB843] hover:bg-[#80b843a1] "
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <Register active={active} setActive={setActive} />
            )}
          </div>
        </div>
      </div>
      {active === 1 ? (
        <div className="circle 800px:mt-[-100px] mt-2 800px:block hidden">
          <img src={image5} alt="" className="800px:w-[300px] w-[150px]" />
          <div className="flex mt-[-200px]">
            <img src={image4} className="mt-[10px] ml-[-40px]" alt="" />
            <img src={image3} className=" 800px:ml-14 " alt="" />
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Login;
