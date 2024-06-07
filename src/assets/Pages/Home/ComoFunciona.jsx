import React from "react";
import "./ComoFunciona.css";
import Fundo from "../../Images/HomeImg/comofunciona.png";

function ComoFunciona() {
  return (
    <section id="FundoComoFun">
      <h2>Como iniciar a sua jornada da saúde mental</h2>
      <div id="ConteudoComoFun">
        <img src={Fundo} alt="Imagem explicando como funciona a plataforma" />
      </div>
      <div id="Botao">
        <h3>Escolha seu psicólogo e...</h3>
        <a href="">Agende sua consulta</a>
      </div>
    </section>
  );
}

export default ComoFunciona;