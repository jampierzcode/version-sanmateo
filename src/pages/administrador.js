import React, { useState } from "react";
import NavDashboard from "../components/navDashboard";
import SidebarDashboard from "../components/sidebarDashboard";
import Registros from "../components/Registros";
// import Tickets from "../components/Tickets";
// import Carousel from "react-bootstrap/Carousel";
// markup
const Administrador = () => {
  return (
    <>
      <NavDashboard />
      <SidebarDashboard />
      <Registros />
    </>
  );
};

export default Administrador;
