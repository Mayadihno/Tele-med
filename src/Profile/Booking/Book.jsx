import React, { useState } from "react";
import styles from "../../style/styles";
import { useSelector } from "react-redux";
import { genderData } from "../../Components/Data/data";
import "@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css";
import "react-clock/dist/Clock.css";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { BsCalendarDate } from "react-icons/bs";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import { toast } from "react-toastify";
const Book = () => {
  const { userData } = useSelector((state) => state.user);
  const [email, setEmail] = useState(userData?.email);
  const [fullName, setFullName] = useState(userData?.fullName);
  const [address, setAddress] = useState(userData?.address);
  const [phone, setPhone] = useState(userData?.phone);
  const [gender, setGender] = useState(userData?.gender);
  const [value, onChange] = useState();
  const [show, setShow] = useState(false);
  const [values, onChanges] = useState(new Date());
  const [description, setDescription] = useState("");
  const formattedDate = values.toLocaleDateString();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email,
      fullName,
      address,
      phone,
      gender,
      formattedDate,
      time: value,
      description,
    };
    try {
      const userDocRef = doc(db, "symptomps", userData.uid);
      await setDoc(userDocRef, {
        ...userData,
        ...formData,
      });
      toast.success("You have successfull book a session with doctor");
      setShow(false);
      setDescription("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <div className={`${styles.section} 800px:mt-10 mt-5`}>
        <div className="flex items-center flex-col justify-center w-full">
          <h4 className="800px:text-[25px] text-[18px] font-[600]">
            Book a session with Doctor Today
          </h4>
          <div className=" bg-slate-200 p-6 mt-5 rounded-[5px] shadow-xl overflow-y-scroll h-[80vh]">
            <div className="form flex items-center justify-center">
              <form onSubmit={handleSubmit}>
                <div className="800px:flex 800px:items-center 800px:space-x-8 800px:flex-row flex flex-col space-y-2">
                  <div className="800px:py-3 py-1 w-full">
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
                  <div className="800px:py-3 py-1 w-full">
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
                </div>
                <div className="800px:flex 800px:items-center 800px:space-x-8 800px:flex-row flex flex-col space-y-2">
                  <div className="800px:py-3 py-1 w-full">
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
                        placeholder="yourEmail@gmail.com"
                        autoComplete="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="800px:py-3 py-1 w-full">
                    <label htmlFor="category" className="pb-2">
                      Gender <span className=" text-red-500">*</span>
                    </label>
                    <select
                      name="gender"
                      id="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className=" block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    >
                      <option value="choose gender">choose gender</option>
                      {genderData &&
                        genderData.map((i) => (
                          <option value={i.val} key={i.text}>
                            {i.text}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="800px:py-3 py-1 w-full">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      required
                      placeholder="No 35, Mercyside, Liverpool"
                      autoComplete="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="pt-2 w-full">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor=""
                  >
                    Pick time for the session
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="flex justify-evenly 800px:ml-[-210px] ml-[-120px]">
                    <span className="text-[11px] text-gray-700">From</span>
                    <span className="text-[11px] text-gray-700 800px:ml-[-80px] ml-[-60px]">
                      To
                    </span>
                  </div>
                  <TimeRangePicker
                    onChange={onChange}
                    value={value}
                    className={"w-full"}
                  />
                </div>
                <div className="calender mt-4">
                  <label
                    htmlFor=""
                    className="block text-sm font-medium text-gray-700"
                  >
                    Book Date for Session<span className="text-red-500">*</span>
                  </label>
                  <div
                    onClick={() => setShow(!show)}
                    className="border flex items-center justify-center w-[150px] rounded-[5px] mt-2 border-gray-300 cursor-pointer p-2"
                  >
                    <BsCalendarDate
                      size={25}
                      color="#7FB843"
                      className="mr-2"
                    />
                    <button>Book Date</button>
                  </div>
                  {show && (
                    <div className="800px:w-full mt-4 800px:ml-10 w-[80%] mx-auto">
                      <Calendar
                        onChange={onChanges}
                        value={values}
                        className="custom-calendar"
                      />
                    </div>
                  )}
                </div>
                <div className="symptoms mt-4">
                  <div className="">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Symptoms Description
                      <span className=" text-red-500">*</span>
                    </label>
                    <textarea
                      cols={30}
                      rows={8}
                      type="text"
                      name="description"
                      value={description}
                      id="description"
                      required
                      onChange={(e) => setDescription(e.target.value)}
                      className=" mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-[#7FB843] focus:border-[#7FB843] sm:text-sm"
                      placeholder="Enter symptoms description..."
                    />
                  </div>
                </div>
                <div className="">
                  <input
                    type="submit"
                    value="Send"
                    className=" mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400  bg-[#7FB843] text-white font-[600] hover:border-[#80b843ac] sm:text-sm cursor-pointer"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Book;
