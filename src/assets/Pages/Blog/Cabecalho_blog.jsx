import Styles from './Cabecalho_blog.module.css'
import imagem from '../../Images/BlogImg/moça_com_varios_celulares.png'
import seta2 from '../../Images/BlogImg/seta_dupla_icon.png'

function Cabecalho_Blog() {
    return (
        <>
            <div className={Styles.fundo}>
                <div className={Styles.container}>
                    <div className={Styles.img}><img src={imagem} alt="algumas pessoas curtindo" /></div>
                    <div className={Styles.container_texto}>
                        <h1>Se <span>conecte</span> ao mundo da psicologia, <span>Blog intermentes</span> para entreter</h1>

                        <p>Além da psicologia, concentramos alguns conteúdos para impulsionar o cuidado da sua saúde mental</p>

                        <p>Nosso Blog para psicologos e pacientes, navegue pelo mundo mental</p>

                    </div>
                </div>
                <div className={Styles.Button_fixed}><img src={seta2} alt="setas duplas" /></div>
            </div>
        </>
    );
}

export default Cabecalho_Blog;