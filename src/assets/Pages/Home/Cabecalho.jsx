import { Link } from "react-router-dom";
import Styles from './Cabecalho.Module.css'; // Importando o CSS Module
import imagem from '../../Images/HomeImg/moças-olhando-celular.png';

function Cabecalho() {
    return (
        <>
            <div className={Styles.fundo}> {/* Usando as classes do CSS Module */}
                <div className={Styles.container}> {/* Usando as classes do CSS Module */}
                    <div className={Styles.container_texto}> {/* Usando as classes do CSS Module */}
                        <span>Apoio Psicológico: </span>
                        <h1> Seu psicólogo, a qualquer hora, em qualquer lugar.</h1>

                        <p>Na <span>Intermentes</span>, promovemos o bem-estar e o desempenho que você deseja alcançar.</p>

                        <p>Junte-se a nós e cuide do seu bem-estar emocional hoje mesmo.</p>

                        <Link to={'/Login'}>
                            <div className={Styles.Button_Agendar}> {/* Usando as classes do CSS Module */}
                                <span>Cadastre-se</span>
                            </div>
                        </Link>
                    </div>    
                    <div className={Styles.img}><img src={imagem} alt="algumas pessoas curtindo" /></div> {/* Usando as classes do CSS Module */}
                </div>
            </div>
        </>
    );
}

export default Cabecalho;