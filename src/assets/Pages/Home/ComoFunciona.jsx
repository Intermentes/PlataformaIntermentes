import React from "react";
import Styles from "./ComoFunciona.module.css"; // Importando o CSS Module
import Fundo from "../../Images/HomeImg/comofunciona.png";

function ComoFunciona() {
  return (
    <section id={Styles.FundoComoFun}> {/* Usando as classes do CSS Module */}
      <h2>Como iniciar a sua jornada da saúde mental</h2>
      <div id={Styles.ConteudoComoFun}> {/* Usando as classes do CSS Module */}
        <img src={Fundo} alt="Imagem explicando como funciona a plataforma" />
      </div>
    </section>
  );
}

export default ComoFunciona;