import Styles from './Blog_p3.module.css'; // Importando o CSS Module
import icon1 from '../../Images/BlogImg/Artigo.png';
import icon2 from '../../Images/BlogImg/Artigo2.png';
import icon3 from '../../Images/BlogImg/Artigo3.png';

function Blog_P3() {
    return (
        <section className={Styles.section_pg3}>
            <h2>Artigos</h2>

            <div className={Styles.container_pg3}>
                <div>
                    <img src={icon1} alt="imagem de biodança" />
                </div>
                <div>
                    <h3>Por que o Brasil tem a população mais ansiosa do mundo</h3>
                    <p>Aproximadamente 9,3% dos brasileiros sofrem de ansiedade patológica, segundo OMS</p>
                    <a href='https://g1.globo.com/saude/noticia/2023/02/27/por-que-o-brasil-tem-a-populacao-mais-ansiosa-do-mundo.ghtml'  target='blank'>Saiba Mais</a>
                </div>
            </div>

            <div className={Styles.container_pg3}>
                <div>
                    <img src={icon2} alt="imagem de biodança" />
                </div>
                <div>
                    <h3>Apenas 5% dos brasileiros fazem terapia, mas 16% tomam psicoativos</h3>
                    <p>O panorama mostra que mulheres, jovens e estudantes de renda mais alta vão mais a terapia</p>
                    <a href='https://www.correiobraziliense.com.br/ciencia-e-saude/2023/08/5114301-apenas-5-dos-brasileiros-fazem-terapia-mas-16-tomam-psicoativos.html#google_vignette '  target='blank'>Saiba Mais</a>
                </div>
            </div>

            <div className={Styles.container_pg3}>
                <div>
                    <img src={icon3} alt="imagem de musicoterapia" />
                </div>
                <div>
                    <h3>Entenda a importância da terapia para a saúde mental</h3>
                    <p>Psicóloga desmitifica estereótipos sobre a terapia e sinaliza quando é necessário buscar por ajuda
                    </p>
                    <a href='https://www.terra.com.br/vida-e-estilo/saude-mental/entenda-a-importancia-da-terapia-para-a-saude-mental,dcac3175b99dcf04c8e1dfbbdc5ab964jq5z31mf.html' target='blank'>Saiba Mais</a>
                </div>
            </div>
        </section>
    );
}

export default Blog_P3;