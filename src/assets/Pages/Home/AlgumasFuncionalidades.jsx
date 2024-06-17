import Styles from "./AlgumasFuncionalidades.module.css";
import Fundo from "../../Images/HomeImg/algumasfuncionalidades.png";
import { motion } from 'framer-motion';


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
        <img
          src={Fundo}
          alt="Imagem com algumas funcionalidades da Intermentes"
        />
      </div>
    </motion.section>
  );
}

export default AlgumasFuncionalidades;