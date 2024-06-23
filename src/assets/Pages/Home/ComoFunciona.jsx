import React from "react";
import Styles from "./ComoFunciona.module.css"; // Importando o CSS Module
import Fundo from "../../Images/HomeImg/comofunciona.png";
import FundoMobile from "../../Images/HomeImg/comofuncionaMobile.png";
import { motion } from 'framer-motion';

function ComoFunciona() {
  return (
    <motion.section id={Styles.FundoComoFun}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    > {/* Usando as classes do CSS Module */}
      <h2>Como iniciar a sua jornada da saúde mental</h2>
      <div id={Styles.ConteudoComoFun}> {/* Usando as classes do CSS Module */}
        <picture>
          <source media="(max-width: 900px)" srcSet={FundoMobile} className={Styles.imgMobile} />
          <img src={Fundo} alt="Imagem explicando como funciona a plataforma" />
        </picture>
      </div>
    </motion.section>
  );
}

export default ComoFunciona;