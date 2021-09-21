import React, { useState } from "react";
import NavBarComponent from "../templates/NavBarComponent";
import Cookies from "../components/Cookies";
// import Tickets from "../components/Tickets";
// import Carousel from "react-bootstrap/Carousel";
// markup
const Administrador = () => {
  const [cookies, setCookies] = useState(true);
  const handlecookies = () => {
    setCookies(false);
  };
  return (
    <>
      <NavBarComponent />
      {/* <h1>Bienvenido Administrador</h1>
      <button className="btn">Generar pdf</button> */}
      {cookies ? (
        <Cookies cookies={cookies} handlecookies={handlecookies} />
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Administrador;
