import React from "react";
import { FaBell } from "react-icons/fa";
import "../styles/navDashboard.css";
const navDashboard = () => {
  const logo =
    "https://imagenesrutalab.s3.amazonaws.com/sanmateo/logo/logo_sanmateo_final.jpg";
  const logo_name =
    "https://imagenesrutalab.s3.amazonaws.com/sanmateo/logo/nombre_sanmateo_final+copy.png";
  const avatar_user =
    "https://image.freepik.com/foto-gratis/joven-sonriendo-camara_13339-98064.jpg";
  return (
    <>
      <nav className="navbar-dashboard">
        <div className="logo">
          <img src={logo} alt="logo-img" className="logo-icon" />
          <img src={logo_name} alt="logo-img" className="logo-name" />
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
