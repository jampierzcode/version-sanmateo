import React from "react";
import { Link } from "gatsby";

export default function BannerComponent() {
  return (
    <div className="row banner d-flex justify-content-start ">
      <header
        className="col jumbotron jumbotron-fluid bannerFinal"
        style={{
          backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/sanmateo/banner_laboratorioFaseI.4.jpg")`,
          backgroundSize: "cover",
          height: "80vh",
          backgroundPosition: "center",
        }}
      >
        <div className="container-fluid">
          <div className="col-6 col-sm-7 justify-content-md-start">
            <p className="font-weight-bold pt-3 pb-0 text-start bannerTitulo">
              Laboratorio urgente?
            </p>

            <p className="lead pb-2 lugarCorrecto">
              Pruebas a domicilio en un click
            </p>

            <p className="font-weight-bold text-start proximamente">
              Estamos listos a partir del 1º de octubre
            </p>
            <Link to="https://wa.me/5215521293811">
              <button type="button" className="btnSomos btn btn-lg text-white">
                ¡Reserva ya!
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
