import * as React from "react";
import NavBarComponent from "../templates/NavBarComponent";
import BannerComponent from "../templates/BannerComponent";
import Body2Component from "../templates/Body2Component";
import Body3Component from "../templates/Body3Component";
import Footer from "../templates/Fototer";
import Copyright from "../templates/Copyright";
import Reserva from "../templates/Reserva";

// markup
const IndexPage = () => {
  return (
    <>
      <NavBarComponent />
      <BannerComponent />
      <Body2Component
        titulo1={"¿Quiénes somos?"}
        text1={
          "Somos una empresa de laboratorios de Test Clínicos que ofrecen servicios de Primer Mundo a precios accesibles."
        }
        titulo2={"¿Cómo podemos dar estos precios?"}
        text2={
          "Nuestra objetivo es cuidar al paciente y sus ingresos sobre todo en esta etapa de pandemia"
        }
      />
      <Body3Component />
      <Reserva />
      <Footer />
      <Copyright />
    </>
  );
};

export default IndexPage;
