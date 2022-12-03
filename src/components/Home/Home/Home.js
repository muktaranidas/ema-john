import React from "react";
import Shop from "../../Shop/Shop";
import ContactUs from "../ContactUs/ContactUs";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Shop></Shop>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
