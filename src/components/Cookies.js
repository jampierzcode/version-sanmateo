import React, { useState } from "react";

import "../styles/cookies.css";
const Cookies = (props) => {
  const { cookies, handlecookies } = props;
  return (
    <>
      <div className="cookies">
        <div className="container-cookies">
          <div className="image-cookies">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv2_jY6CsMXtjOFd7HBaEs7vZ2gVN8Qy0rOg&usqp=CAU"
              alt="img-cookies"
            />
          </div>
          <div className="body-cookies">
            <h1>Cookies</h1>
            <p>
              Utilizamos cookies propias y de terceros para mejorar nuestros
              servicios.
            </p>
            <button onClick={handlecookies} id="check-cookies">
              Aceptar cookies
            </button>

            <a href="#">Aviso de cookies</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cookies;
