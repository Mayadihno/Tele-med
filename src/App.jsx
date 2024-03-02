import "./App.css";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Login from "./Auth/Login/Login";
import PRoute from "./Proctected/PRoute";
import Dashboard from "./Profile/Dashboard";
import Update from "./Profile/Update";
import Booking from "./Profile/Booking/Booking";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<PRoute />}>
          <Route path="/*/user-dashboard" element={<Dashboard />} />
          <Route path="/*/user-profile" element={<Update />} />
          <Route path="/*/user-booking" element={<Booking />} />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer theme="dark" position="bottom-center" />
    </>
  );
}

export default App;
