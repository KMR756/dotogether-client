import React from "react";
import { Outlet } from "react-router";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
