import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function BannerComponent() {
  return (
    <div className="row banner d-flex justify-content-start ">
      <header
        className="col jumbotron jumbotron-fluid"
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

            <p className="lead pb-5 lugarCorrecto">
              Estás en el lugar correcto
            </p>

            <h1 className="font-weight-bold pt-3 text-start proximamente">
              ¡Próximamente!
            </h1>
            <AnchorLink to="/#somos">
              <button type="button" className="btnSomos btn btn-lg text-white">
                ¿Quiénes somos?
              </button>
            </AnchorLink>
          </div>
        </div>
      </header>
    </div>
  );
}
