import React, { useState } from "react";
import SidebarDashboard from "../components/sidebarDashboard";
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
      <div className="container-dashboard">
        <h1>Perfil OverView</h1>
      </div>
    </>
  );
};

export default Administrador;
