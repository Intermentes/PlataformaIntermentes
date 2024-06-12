import Styles from './Cabecalho_blog.module.css'; // Importando o CSS Module
import imagem from '../../Images/BlogImg/moça_com_varios_celulares.png';

function Cabecalho_Blog() {
    return (
        <>
            <div className={Styles.fundo_blog}> {/* Usando as classes do CSS Module */}
                <div className={Styles.container_blog}>
                    <div className={Styles.container_texto_blog}>
                        <span>Seu consultório online</span>
                        <h1>Inovação e otimização para a vida do profissional</h1>

                        <p>Transforme seu ambiente de trabalho com nossa plataforma completa</p>

                        <p>Investimos no futuro e no bem-estar do profissional, integrando todas as suas necessidades em um só lugar.</p>
                    </div>
                    <div className={Styles.img_blog}><img src={imagem} alt="algumas pessoas curtindo" /></div>
                </div>
            </div>
        </>
    );
}

export default Cabecalho_Blog;