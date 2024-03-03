/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "../../style/styles";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "../../Firebase/firebase";
import { useNavigate } from "react-router-dom";
const Register = ({ setActive }) => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let userRole = "user";
    try {
      if (password !== Cpassword) {
        toast.warning("password and confirm password did not match");
        return;
      }

      const formData = {
        email,
        password,
        fullName,
        phone,
        role: userRole,
      };
      const users = await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, {
        displayName: fullName,
        PhoneNumber: phone,
        Email: email,
      });

      const usersData = users.user;
      const formDataCopy = { ...formData, uid: usersData.uid };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", usersData.uid), formDataCopy);
      toast.success("You have successfull create account");
      navigate("/user-dashboard", { replace: true });
      e.target.reset();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email have already been used");
        console.log(error);
      } else if (error.code === "auth/weak-password") {
        toast.warning("Password should be more than 6 letters");
      } else {
        toast.error("Something went wrong");
        // console.log(error.message);
      }
    }
  };
  return (
    <React.Fragment>
      <div className=" mt-8">
        <h1 className="text-[30px] font-[600] mb-3">Help us know you!</h1>
        <p className="text-[14px] mb-3">
          To become a member, kindly input the required information below.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="py-3">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name<span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="fullName"
                id="fullName"
                required
                placeholder="John Doe"
                autoComplete="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>
          </div>
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
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number<span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <input
                type="phone"
                name="phone"
                id="phone"
                required
                placeholder="+0123456789"
                autoComplete="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
          <div className="py-3">
            <label
              htmlFor="cpassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password<span className="text-red-500">*</span>
            </label>
            <div className="mt-1 relative">
              <input
                type={!visible ? "password" : "text"}
                name="cpassword"
                id="cpassword"
                required
                placeholder="confirm password"
                autoComplete="current-password"
                value={Cpassword}
                onChange={(e) => setCPassword(e.target.value)}
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
              Already have an account ?
              <Link
                className="text-gray-500 pl-1 underline"
                onClick={() => setActive(1)}
              >
                Login
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
              Sign up
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Register;
