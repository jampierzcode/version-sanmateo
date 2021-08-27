import React from "react";
import imagen1 from "../images/body_2_serviciosSanMateo.jpg";

export default function Body2Component({ titulo1, text1, text2, titulo2 }) {
  return (
    <div className="row">
      <div className="col-sm-8 d-flex flex-column justify-content-center">
        <h1 className="display-6 font-weight-bold m-2 pt-2">{titulo1}</h1>
        <p className="h5 m-2">{text1}</p>
        <h1 className="display-6 font-weight-bold m-2">{titulo2}</h1>
        <p className="h5 m-2">{text2}</p>
      </div>
      <div className="col-sm-4 containerImagenSomos">
        <img
          className="img-fluid imagenSomos"
          src={imagen1}
          alt="Max-width 100% mw-100"
        />
      </div>
    </div>
  );
}
