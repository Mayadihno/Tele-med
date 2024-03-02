import React from "react";
import DashboardSideBar from "../Dashboard/DashboardSideBar";
import Book from "./Book";

const Booking = () => {
  return (
    <React.Fragment>
      <div className="flex justify-between w-full">
        <div className=" w-[80px] 800px:w-[80px]">
          <DashboardSideBar active={2} />
        </div>
        <div className="flex w-full">
          <Book />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Booking;
