/* eslint-disable react/prop-types */
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { signOut } from "firebase/auth";
import { clearUserData } from "../../redux/slice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../../Firebase/firebase";
const DashboardSideBar = ({ active }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/", { replace: true });
    dispatch(clearUserData());
  };
  return (
    <React.Fragment>
      <div className=" h-[100vh] w-full bg-black shadow-lg sticky top-0 left-0 z-10 py-10">
        {/* single item */}
        <div className="flex w-full items-center py-16 px-5">
          <Link to={"/user-dashboard"} className=" w-full flex items-center">
            <RxDashboard
              color={`${active === 1 ? "#7FB843" : "#fff"}`}
              size={25}
            />
          </Link>
        </div>
        <div className="flex w-full items-center py-10 px-5">
          <Link to={"/user-booking"} className=" w-full flex items-center">
            <SlCalender
              color={`${active === 2 ? "#7FB843" : "#fff"}`}
              size={25}
            />
          </Link>
        </div>
        <div className="flex w-full items-center py-10 px-5">
          <Link
            to={"/shop/dashboard/products"}
            className=" w-full flex items-center"
          >
            <IoMdNotificationsOutline
              color={`${active === 3 ? "#7FB843" : "#fff"}`}
              size={25}
            />
          </Link>
        </div>
        <div className="flex w-full items-center py-10 px-5">
          <Link to={"/user-profile"} className=" w-full flex items-center">
            <CiSettings
              color={`${active === 4 ? "#7FB843" : "#fff"}`}
              size={25}
            />
          </Link>
        </div>
        <div className="flex w-full items-center py-10 px-5">
          <Link className=" w-full flex items-center" onClick={handleLogout}>
            <RiLogoutCircleRLine
              color={`${active === 11 ? "#7FB843" : "#fff"}`}
              size={25}
            />
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashboardSideBar;
