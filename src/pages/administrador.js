import React, { useState } from "react";
import SidebarDashboard from "../components/sidebarDashboard";
import Registros from "../components/Registros";
// import Tickets from "../components/Tickets";
// import Carousel from "react-bootstrap/Carousel";
// markup
const Administrador = () => {
  const [navSidebar, setNavSidebar] = useState(true);
  const show_sidebar = () => {
    setNavSidebar(!navSidebar);
  };
  return (
    <>
      <SidebarDashboard navSidebar={navSidebar} show_sidebar={show_sidebar} />
      <Registros navSidebar={navSidebar} show_sidebar={show_sidebar} />
    </>
  );
};

export default Administrador;
