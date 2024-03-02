import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Premium from "../Premium/Premium";
import Testimony from "../Testimony/Testimony";
import Consult from "../Consult/Consult";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <Services />
      <Premium />
      <Testimony />
      <Consult />
    </React.Fragment>
  );
};

export default Home;
