import React from "react";
import styles from "../../style/styles";
import logo from "../../assets/logo2.svg";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  footerCompanyLinks,
  footerContactLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../Data/data";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <React.Fragment>
      {location.pathname.includes("/user") ? null : (
        <div className="bg-white 800px:pt-12 pt-0 mb-10">
          <div className={`${styles.section}`}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:px-2 px-5 py-16 sm:text-center">
              <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
                <div className="logo w-[60px]">
                  <img src={logo} alt="" className="w-full object-cover" />
                </div>
                <p className="text-[12px] font-[600] pt-6 800px:w-[90%] w-full">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
                </p>
                <div className="800px:mt-[45px] mt-[20px] flex items-center text-[#7FB843]">
                  <FaFacebookF style={{ cursor: "pointer" }} />
                  <FaTwitter
                    style={{ marginLeft: "15px", cursor: "pointer" }}
                  />
                  <FaInstagram
                    style={{ marginLeft: "15px", cursor: "pointer" }}
                  />
                  <FaLinkedinIn
                    style={{ marginLeft: "15px", cursor: "pointer" }}
                  />
                  <FaYoutube
                    style={{ marginLeft: "15px", cursor: "pointer" }}
                  />
                </div>
              </ul>
              <ul className="text-center sm:text-start">
                <h1 className="800px:mb-6 mb-2 font-[700]">Product</h1>
                {footerProductLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      className="text-black hover:text-teal-400 duration-300
                   text-[16px] font-[400] cursor-pointer leading-8"
                      to={link.link}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="text-center sm:text-start">
                <h1 className="800px:mb-6 mb-2 font-[700]">Company</h1>
                {footerCompanyLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      className="text-black hover:text-teal-400 duration-300
                   text-[16px] cursor-pointer leading-8"
                      to={link.link}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>{" "}
              <ul className="text-center sm:text-start">
                <h1 className="800px:mb-6 mb-2 font-[700]">Support</h1>
                {footerSupportLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      className="text-black hover:text-teal-400 duration-300
                   text-[16px] cursor-pointer leading-8"
                      to={link.link}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>{" "}
              <ul className="text-center sm:text-start">
                <h1 className="800px:mb-6 mb-2 font-[700]">Contact us</h1>
                {footerContactLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      className="text-black hover:text-teal-400 duration-300
                   text-[16px] cursor-pointer leading-8"
                    >
                      <div className="flex items-center py-1">
                        {<link.icon size={25} className="mr-2" />}
                        {link.name}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`${styles.section}`}>
            <hr />
            <div
              className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 800px:gap-10
          pt-4 text-black 800px:text-[18px] text-[14px] pb-3 font-[600] 800px:text-start text-center"
            >
              <span>Copyright © 2022 BRIX Templates</span>
              <div className=" 800px:flex 800px:justify-end 800px:flex-row flex">
                <span className="mr-0.5">All Rights Reserved</span> |
                <span className="text-[#7FB843] mx-0.5">
                  Terms and Conditions
                </span>
                |<span className="text-[#7FB843] ml-0.5">Privacy Policy</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Footer;
