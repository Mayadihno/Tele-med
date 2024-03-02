import React from "react";
import DashboardSideBar from "./Dashboard/DashboardSideBar";
import User from "./User/User";

const Update = () => {
  return (
    <React.Fragment>
      <div className="flex justify-between w-full">
        <div className=" w-[80px] 800px:w-[80px]">
          <DashboardSideBar active={4} />
        </div>
        <div className=" w-full">
          <User />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Update;
