import React from "react";
import DashboardSideBar from "./DashboardSideBar";
import DashContent from "./DashContent";

const DashHome = () => {
  return (
    <React.Fragment>
      <div className="flex justify-between w-full">
        <div className=" w-[80px] 800px:w-[80px]">
          <DashboardSideBar active={1} />
        </div>
        <div className=" w-full">
          <DashContent />
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashHome;
