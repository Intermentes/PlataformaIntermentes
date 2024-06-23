import Styles from "./AlgumasFuncionalidades.module.css";
import Fundo from "../../Images/HomeImg/algumasfuncionalidades.png";
import FundoMobile from "../../Images/HomeImg/algumasfuncionalidadeMobile.png";
import { motion } from 'framer-motion';
import styled from "styled-components";


function AlgumasFuncionalidades() {
  return (
    <motion.section id={Styles.FundoAlgumasFun}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <h2>
        Cuidando da saúde com a <span>Intermentes</span>
      </h2>
      <div id={Styles.ConteudoAlgumasFun}>
        <picture>
          <source media="(max-width: 900px)" srcSet={FundoMobile} className={Styles.imgMobile} /> 
          <img
            src={Fundo}
            alt="Imagem com algumas funcionalidades da Intermentes"
          />
        </picture>
      </div>
    </motion.section>
  );
}

export default AlgumasFuncionalidades;