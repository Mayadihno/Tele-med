import React, { useState } from "react";
import styles from "../../style/styles";
import { MdEdit } from "react-icons/md";
import image from "../../assets/defaultimg.png";
import { CiLock, CiSettings } from "react-icons/ci";
import { LuHelpCircle } from "react-icons/lu";
import { genderData } from "../../Components/Data/data";
import { Country, State } from "country-state-city";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { toast } from "react-toastify";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "../../Firebase/firebase";
import Loader from "../../Components/Loader/Loader";
import { reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
const User = () => {
  const { userData } = useSelector((state) => state.user);
  const [email, setEmail] = useState(userData?.email);
  const [fullName, setFullName] = useState(userData?.fullName);
  const [address, setAddress] = useState(userData?.address);
  const [phone, setPhone] = useState(userData?.phone);
  const [gender, setGender] = useState(userData?.gender);
  const [country, setCountry] = useState(userData?.country);
  const [city, setCity] = useState(userData?.city);
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [loading, setLoading] = useState(false);
  const storage = getStorage();

  const handleFileChange = (e) => {
    const files = e.target.files[0];
    setAvatar(files);
  };

  const handleUploadImage = async (e) => {
    e.preventDefault();
    try {
      const storageRef = ref(storage, `images/${avatar.name + v4()}`);
      const uploadTask = uploadBytesResumable(storageRef, avatar);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // get the Progress Function
          const progress =
            Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          //Update Progress
          console.log(`progres is ${progress}`);
          setLoading(true);
        },
        (error) => {
          //Error Function
          console.log(error);
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
            //   setImageUrl(url);
            const userDocRef = doc(db, "users", userData.uid);
            await setDoc(userDocRef, {
              ...userData,
              imageUrl: url,
            });
            const addRef = collection(db, "images");
            await addDoc(addRef, {
              imageUrl: url,
              timestamp: serverTimestamp(),
            });
            toast.success("Image Upload Successfully");
            setLoading(false);
          });
        }
      );
      setAvatar("");
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        email,
        password,
        fullName,
        phone,
        address,
        gender,
        city,
        country,
      };
      // Reauthenticate the user before allowing profile update
      const credential = EmailAuthProvider.credential(
        auth.currentUser.email,
        password
      );
      const res = await reauthenticateWithCredential(
        auth.currentUser,
        credential
      );
      if (res) {
        // Update user profile data in Firestore
        delete formData.password;
        const userDocRef = doc(db, "users", userData.uid);
        await setDoc(userDocRef, {
          ...userData,
          ...formData,
        });
        toast.success("You have successfull upadte your profile");
      }
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email have already been used");
      } else {
        toast.error("Incorect Password");
      }
    }
  };

  return (
    <React.Fragment>
      {loading && <Loader text={"Image uploading don't refresh the page"} />}
      <div className={`${styles.section}`}>
        <div className="800px:flex 800px:divide-x-2 divide-x-0 800px:h-screen divide-gray-400">
          <div className="right w-[20%] mt-10 800px:block hidden">
            <div className="flex flex-col">
              <div className="flex items-center space-x-14">
                <MdEdit color="#7FB843" size={30} />
                <h4 className="text-[#7FB843] text-[16px] font-[600]">
                  Edit Profile
                </h4>
              </div>
              <div className=" pt-10 mx-6">
                <div className="border-2 border-[#EFB8C8] p-3 w-[150px] h-[150px] rounded-full">
                  <div className="border border-[#7FB843] p-2 w-[120px] h-[120px] rounded-full">
                    {userData?.imageUrl ? (
                      <img
                        src={userData?.imageUrl}
                        className=" rounded-full w-[100px] h-[100px]"
                        alt=""
                      />
                    ) : (
                      <img
                        src={image}
                        className=" rounded-full w-[100px]"
                        alt=""
                      />
                    )}
                  </div>
                </div>
                <div className={`${styles.normalFlex} mt-4 justify-between`}>
                  <div className={`${styles.normalFlex}`}>
                    <label
                      htmlFor="avatar"
                      className="block text-sm font-medium text-gray-700"
                    ></label>
                    <div className="mt-2 flex items-center">
                      <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                        {avatar ? (
                          <img
                            src={URL.createObjectURL(avatar)}
                            alt="avatar"
                            className="h-full w-full object-cover rounded-full"
                          />
                        ) : (
                          <RxAvatar className="h-8 w-8" />
                        )}
                      </span>
                      {avatar ? (
                        <span
                          onClick={handleUploadImage}
                          className="text-[12px] ml-3 border border-gray-300 p-2 cursor-pointer rounded-[5px] hover:border-[#7FB843] hover:text-red-400"
                        >
                          Upload Picture
                        </span>
                      ) : (
                        <label
                          htmlFor="file-input"
                          className="text-[12px] ml-3 border border-gray-300 p-2 cursor-pointer rounded-[5px] hover:border-[#7FB843]"
                        >
                          <span>Change Picture</span>
                          <input
                            type="file"
                            name="file"
                            id="file-input"
                            accept=".jpeg,.png,.jpg"
                            onChange={handleFileChange}
                            className="sr-only"
                          />
                        </label>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-14 ml-2 space-y-14">
                <div className="flex items-center space-x-16">
                  <CiLock size={30} />{" "}
                  <h3 className=" text-slate-400 text-[16px]">Security</h3>
                </div>
                <div className="flex items-center space-x-16">
                  <CiSettings size={30} />{" "}
                  <h3 className=" text-slate-400 text-[16px]">Apperance</h3>
                </div>
                <div className="flex items-center space-x-16">
                  <LuHelpCircle size={30} />{" "}
                  <h3 className=" text-slate-400 text-[16px]">Help</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="left 800px:w-[80%] w-[95%]">
            <div className="flex items-center space-x-14 800px:hidden mt-6 ml-10">
              <MdEdit color="#7FB843" size={30} />
              <h4 className="text-[#7FB843] text-[16px] font-[600]">
                Edit Profile
              </h4>
            </div>
            <div className="800px:hidden block">
              <div className="py-6 ml-16">
                <div className="border-2 border-[#EFB8C8] p-3 w-[150px] h-[150px] rounded-full">
                  <div className="border border-[#7FB843] p-2 w-[120px] h-[120px] rounded-full">
                    {userData?.imageUrl ? (
                      <img
                        src={userData?.imageUrl}
                        className=" rounded-full w-[100px] h-[100px]"
                        alt=""
                      />
                    ) : (
                      <img
                        src={image}
                        className=" rounded-full w-[100px]"
                        alt=""
                      />
                    )}
                  </div>
                </div>
                <div className={`${styles.normalFlex} mt-4 justify-between`}>
                  <div className={`${styles.normalFlex}`}>
                    <label
                      htmlFor="avatar"
                      className="block text-sm font-medium text-gray-700"
                    ></label>
                    <div className="mt-2 flex items-center">
                      <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                        {avatar ? (
                          <img
                            src={URL.createObjectURL(avatar)}
                            alt="avatar"
                            className="h-full w-full object-cover rounded-full"
                          />
                        ) : (
                          <RxAvatar className="h-8 w-8" />
                        )}
                      </span>
                      {avatar ? (
                        <span
                          onClick={handleUploadImage}
                          className="text-[12px] ml-3 border border-gray-300 p-2 cursor-pointer rounded-[5px] hover:border-[#7FB843] hover:text-red-400"
                        >
                          Upload Picture
                        </span>
                      ) : (
                        <label
                          htmlFor="file-input"
                          className="text-[12px] ml-3 border border-gray-300 p-2 cursor-pointer rounded-[5px] hover:border-[#7FB843]"
                        >
                          <span>Change Picture</span>
                          <input
                            type="file"
                            name="file"
                            id="file-input"
                            accept=".jpeg,.png,.jpg"
                            onChange={handleFileChange}
                            className="sr-only"
                          />
                        </label>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.section} 800px:mt-20 mt-4`}>
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
                  <div className="py-3 w-full">
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
                  <div className="py-3 w-full">
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
                <div className="py-3 w-full">
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
                <div className="flex items-center space-x-8">
                  <div className="w-full py-3">
                    <label htmlFor="" className="block pb-2">
                      Country<span className="text-red-500">*</span>
                    </label>
                    <select
                      name=""
                      id=""
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className=" block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    >
                      <option value="" className="block pb-2">
                        choose your country
                      </option>
                      {Country &&
                        Country.getAllCountries().map((item) => (
                          <option
                            className="block pb-2"
                            value={item.isoCode}
                            key={item.isoCode}
                          >
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="w-full py-3">
                    <label htmlFor="city" className="block pb-2">
                      State<span className="text-red-500">*</span>
                    </label>
                    <select
                      name="city"
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className=" block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    >
                      <option value="" className="block pb-2">
                        choose your city
                      </option>
                      {State &&
                        State.getStatesOfCountry(country).map((item) => (
                          <option
                            className="block pb-2"
                            value={item.isoCode}
                            key={item.isoCode}
                          >
                            {item.name}
                          </option>
                        ))}
                    </select>
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
                <div className=" mt-5 flex justify-center">
                  {password === "" ? (
                    <button
                      disabled
                      className="group relative h-[35px] py-2 px-14 border-transparent text-sm font-medium rounded-md text-white bg-[#80b84385]"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="group relative h-[35px] py-2 px-14 border-transparent text-sm font-medium rounded-md text-white bg-[#7FB843] hover:bg-[#80b843a1]"
                    >
                      Save
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default User;
