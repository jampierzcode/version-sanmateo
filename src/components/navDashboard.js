import React from "react";
import { FaBell } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import "../styles/navDashboard.css";
const navDashboard = (props) => {
  const { navSidebar, show_sidebar } = props;
  const avatar_user =
    "https://image.freepik.com/foto-gratis/hombre-joven-sonriente-playa_23-2147645587.jpg";
  return (
    <>
      <nav className={`navbar-dashboard ${!navSidebar ? "close_sidebar" : ""}`}>
        <div role="button" className="drop-down-menu" onClick={show_sidebar}>
          <FaAlignJustify />
        </div>
        <div className="user-login">
          <FaBell />
          <img src={avatar_user} alt="img_avatar_user" />
        </div>
      </nav>
    </>
  );
};

export default navDashboard;
