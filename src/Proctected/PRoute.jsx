import { Navigate, Outlet } from "react-router-dom";
import UseAuth from "./UseAuth";
import Loader from "../Components/Loader/Loader";

const PRoute = () => {
  const { loading, loggedIn } = UseAuth();
  if (loading) {
    return <Loader />;
  }
  return loggedIn ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PRoute;
