import React, { useState } from "react";
import NavDashboard from "./navDashboard";
import "../styles/sidebarDashboard.css";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
const SidebarDashboard = (props) => {
  const { navSidebar, show_sidebar } = props;

  const logo =
    "https://imagenesrutalab.s3.amazonaws.com/sanmateo/logo/logo_sanmateo_final.jpg";
  const logo_name =
    "https://imagenesrutalab.s3.amazonaws.com/sanmateo/logo/nombre_sanmateo_final+copy.png";

  return (
    <>
      <div
        className={`overlay-sidebar ${
          !navSidebar ? "overlay-sidebar-show" : ""
        }`}
        onClick={show_sidebar}
      ></div>
      <NavDashboard navSidebar={navSidebar} show_sidebar={show_sidebar} />
      <aside
        className={`aside-dashboard ${!navSidebar ? "closed_sidebar" : ""}`}
      >
        <div className="header-aside">
          <div className="logo">
            <img src={logo} alt="logo-img" className="logo-icon" />
            <img src={logo_name} alt="logo-img" className="logo-name" />
          </div>
        </div>
        <div className="main">
          <ul className="nav-links">
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SidebarDashboard;
