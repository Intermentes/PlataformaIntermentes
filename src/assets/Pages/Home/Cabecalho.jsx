import { Link } from "react-router-dom";
import Styles from './Cabecalho.module.css'; // Importando o CSS Module
import imagem from '../../Images/HomeImg/moças-olhando-celular.png';
import { motion } from 'framer-motion'; 

function Cabecalho() {
    return (
        <section className={Styles.container}>
            <motion.div className={Styles.container_texto}
                initial={{ opacity: 0, x: -50 }} // Estado inicial: opacidade 0 e deslocamento -50 no eixo X.
                whileInView={{ opacity: 1, x: 0 }} // Estado final: opacidade 1 e deslocamento 0 no eixo X quando em vista.
                transition={{ duration: 1 }}
            > {/* Usando as classes do CSS Module */}
                <span>Apoio Psicológico: </span>
                <h1> Seu psicólogo, a qualquer hora, em qualquer lugar.</h1>

                <p>Na <span>Intermentes</span>, promovemos o bem-estar e o desempenho que você deseja alcançar.</p>

                <p>Junte-se a nós e cuide do seu bem-estar emocional hoje mesmo.</p>

                <Link to={'/Cadastro'}>
                    <div className={Styles.Button_Agendar}> {/* Usando as classes do CSS Module */}
                        Cadastre-se
                    </div>
                </Link>
            </motion.div>
            <motion.div className={Styles.img}
                initial={{ opacity: 0, x: -50 }} // Estado inicial: opacidade 0 e deslocamento -50 no eixo X.
                whileInView={{ opacity: 1, x: 0 }} // Estado final: opacidade 1 e deslocamento 0 no eixo X quando em vista.
                transition={{ duration: 1.3 }}
            ><img src={imagem} alt="algumas pessoas curtindo" /></motion.div> {/* Usando as classes do CSS Module */}
        </section>
    );
}

export default Cabecalho;