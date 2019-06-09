import React, { Component } from "react";
import Navbar from "./Header/Navbar";
import FeaturedPic from "./Header/FeaturedPic";

const Header = () => {
  return (
    <header>
      <Navbar />
      <FeaturedPic />
    </header>
  );
};

export default Header;
