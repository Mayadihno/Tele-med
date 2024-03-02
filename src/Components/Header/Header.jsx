/* eslint-disable no-constant-condition */
import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { BiMenuAltLeft } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import image from "../../assets/logo.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import { clearUserData } from "../../redux/slice";
const Header = () => {
  const { userData } = useSelector((state) => state.user);
  const [active, setActive] = useState(1);
  const [actives, setActives] = useState(false);
  const [mobile, setMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  //to make navbar stay at the top
  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActives(true);
    } else {
      setActives(false);
    }
  });

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/", { replace: true });
    dispatch(clearUserData());
  };
  return (
    <React.Fragment>
      {location.pathname.includes("/user") ? null : (
        <div
          className={`${
            actives === true ? "shadow-lg fixed top-0 left-0 z-10 w-full" : null
          }`}
        >
          <div className="header hidden 800px:block 800px:bg-[#fff] px-4 pt-4">
            <div
              className={`flex justify-between items-center text-black px-12 py-2`}
            >
              <div className="flex flex-col items-center">
                <img
                  src={image}
                  alt="logo"
                  className="w-[40px] h-40px] object-cover"
                />
              </div>
              {location.pathname === "/login" ? (
                ""
              ) : (
                <div className="800px:flex space-x-12 hidden items-center ">
                  <NavLink
                    to={"/"}
                    className={`${
                      active === 1
                        ? "px-2 py-1 rounded-[4px] font-Roboto font-[700]"
                        : "font-Poppins font-[600] tracking-wide hover:border-b-2 hover:text-red-600"
                    }`}
                    onClick={() => setActive(1)}
                  >
                    How it works
                  </NavLink>
                  <NavLink
                    className={`${
                      active === 2
                        ? " px-2 py-1 rounded-[4px] font-Roboto font-[700]"
                        : "font-Poppins font-[600] tracking-wide hover:border-b-2 hover:text-red-600"
                    }`}
                  >
                    Our Service
                  </NavLink>
                  <NavLink
                    to={"/about"}
                    className={`${
                      active === 3
                        ? " px-2 py-1 rounded-[4px] font-Roboto font-[700]"
                        : "font-Poppins font-[600] tracking-wide hover:border-b-2 hover:text-red-600"
                    }`}
                    onClick={() => setActive(3)}
                  >
                    Premium Care
                  </NavLink>
                  {userData && (
                    <NavLink
                      to={"/dashboard"}
                      className={`${
                        active === 3
                          ? " px-2 py-1 rounded-[4px] font-Roboto font-[700]"
                          : "font-Poppins font-[600] tracking-wide hover:border-b-2 hover:text-red-600"
                      }`}
                      onClick={() => setActive(3)}
                    >
                      Dashboard
                    </NavLink>
                  )}
                </div>
              )}
              {location.pathname === "/login" ? (
                <div className="flex items-center flex-col">
                  <IoIosArrowRoundBack
                    size={50}
                    fontWeight={700}
                    className=" text-[#7FB843] cursor-pointer"
                    onClick={() => navigate("/")}
                  />
                  <span className=" mt-[-10px] ml-2 text-[10px]">Back</span>
                </div>
              ) : (
                <div className="">
                  {userData ? (
                    <Button
                      onClick={() => {
                        handleLogout();
                        setMobile(false);
                      }}
                    >
                      <span className=" text-[14px] text-green-600 capitalize px-4">
                        Logout
                      </span>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        navigate("/login");
                        setMobile(false);
                      }}
                      variant="outlined"
                      color="success"
                    >
                      <span className=" text-[14px] text-green-600 capitalize px-4">
                        Sign up
                      </span>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
          {/* mobile navbar */}
          <div className="w-full h-[60px] fixed z-50 bg-white top-0 left-0 shadow-lg 800px:hidden">
            <div className="flex items-center w-full justify-between px-2">
              <div className="flex flex-col items-center pt-2">
                <img
                  src={image}
                  alt="logo"
                  className="w-[40px] h-40px] object-cover"
                />
              </div>
              <div className="">
                <BiMenuAltLeft
                  size={40}
                  className="ml-1 mt-2"
                  onClick={() => setMobile(true)}
                  color="black"
                />
              </div>
            </div>
            {/* toggle hamburger menu */}
            {mobile && (
              <div
                className={`scale-up-center fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
              >
                <div
                  className={`fixed w-[80%] bg-[#fff] h-screen  top-0 left-0 z-10 overflow-y-scroll`}
                >
                  <div className="w-full justify-between items-center flex pr-3">
                    <img
                      src={image}
                      alt="logo"
                      className="w-[40px] h-40px] object-cover mt-5"
                    />
                    <RxCross1
                      size={30}
                      className="ml-4 mt-5"
                      onClick={() => setMobile(false)}
                    />
                  </div>
                  <div className="flex flex-col 800px:hidden space-y-12 mt-10 px-4">
                    <NavLink
                      to={"/"}
                      className={`${
                        active === 1
                          ? "font-Roboto font-[700] text-green-600"
                          : "font-Poppins font-[600] tracking-wide hover:text-red-600"
                      }`}
                      onClick={() => {
                        setActive(1);
                        setMobile(false);
                      }}
                    >
                      How it works
                    </NavLink>
                    <NavLink
                      className={`${
                        active === 2
                          ? "font-Roboto font-[700] text-green-600"
                          : "font-Poppins font-[600] tracking-wide hover:text-red-600"
                      }`}
                    >
                      Our Service
                    </NavLink>
                    <NavLink
                      className={`${
                        active === 3
                          ? "font-Roboto font-[700] text-green-600"
                          : "font-Poppins font-[600] tracking-wide hover:text-red-600"
                      }`}
                      onClick={() => setActive(3)}
                    >
                      Premium Care
                    </NavLink>
                    {userData && (
                      <NavLink
                        to={"/dashboard"}
                        className={`${
                          active === 3
                            ? " px-2 py-1 rounded-[4px] font-Roboto font-[700]"
                            : "font-Poppins font-[600] tracking-wide hover:border-b-2 hover:text-red-600"
                        }`}
                        onClick={() => setActive(3)}
                      >
                        Dashboard
                      </NavLink>
                    )}
                    <div className="">
                      {userData ? (
                        <Button
                          onClick={() => {
                            handleLogout();
                            setMobile(false);
                          }}
                          variant="outlined"
                          color="success"
                        >
                          <span className=" text-[14px] text-green-600 capitalize px-4">
                            Logout
                          </span>
                        </Button>
                      ) : (
                        <Button
                          onClick={() => {
                            navigate("/login");
                            setMobile(false);
                          }}
                          variant="outlined"
                          color="success"
                        >
                          <span className=" text-[14px] text-green-600 capitalize px-4">
                            Sign up
                          </span>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Header;
