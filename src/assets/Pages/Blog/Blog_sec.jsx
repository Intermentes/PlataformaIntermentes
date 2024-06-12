import { Link } from 'react-router-dom';
import Styles from './Blog_sec.Module.css'; // Importando o CSS Module
import icon from '../../Images/BlogImg/Icon_fone.png';
import icon2 from '../../Images/BlogImg/Icon_cabeca.png';
import icon3 from '../../Images/BlogImg/Icon_livro.png';
import icon4 from '../../Images/BlogImg/Icon_pessoa.png';

function Blog_Sec() {
    return (
        <>
            <section className={Styles.section_blog}> {/* Usando as classes do CSS Module */}
                <h2>Encontre aqui o conteúdo para o seu desenvolvimento</h2>
                <div className={Styles.container_blog}>
                    <Link to={"/Blog_P1"}>
                        <div>
                            <span>Podcast</span>
                            <img src={icon} alt="icone fone" />
                        </div>
                    </Link>
                    <Link to={"/Blog_P2"}>
                        <div>
                            <span>Meditação</span>
                            <img src={icon2} alt="icone cabeça" />
                        </div>
                    </Link>
                    <Link to={"/Blog_P3"}>
                        <div>
                            <span>Artigos</span>
                            <img src={icon3} alt="icone livro" />
                        </div>
                    </Link>
                    <Link to={"/Blog_P4"}>
                        <div>
                            <span>Recomendações</span>
                            <img src={icon4} alt="icone pessoa" />
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
}

export default Blog_Sec;