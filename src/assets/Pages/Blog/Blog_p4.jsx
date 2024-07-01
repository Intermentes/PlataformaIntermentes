import Styles from './Blog_p4.module.css'; // Importando o CSS Module
import icon1 from '../../Images/BlogImg/recomendacao.png';
import icon2 from '../../Images/BlogImg/recomendacao2.png';
import icon3 from '../../Images/BlogImg/recomendacao3.png';

function Blog_P4() {
    return (
        <section className={Styles.section_pg4}> {/* Usando as classes do CSS Module */}
            <h2>Recomendação</h2>

            <div className={Styles.container_pg4}>
                <div>  
                    <img src={icon1} alt="imagem de cromoterapia" />
                </div>
                <div>
                    <h3>Cromoterapia: o que é, benefícios e como é feita</h3>
                    <p>A Cromoterapia é o tratamento que, por intermédio das cores, estabelece o equilíbrio e a harmonia entre corpo, mente e emoções. Cada cor tem sua função terapêutica específica e atua em um chakra ou um órgão do corpo humano.</p>
                    <a href='https://www.youtube.com/watch?v=bulGehfCMYM' target='blank'>Saiba Mais</a>
                </div>
            </div>

            <div className={Styles.container_pg4}>
                <div>
                    <img src={icon2} alt="imagem de biodança" />
                </div>
                <div>
                    <h3>Biodança: psicologia e dança promovem equilíbrio psíquico</h3>
                    <p>Atividade induz vivências integradas por meio da música e dança, atuando com movimentos naturais do corpo provocados pela musicalidade</p>
                    <a href='https://www.youtube.com/watch?v=MVdvGqjPfJQ' target='blank'>Saiba Mais</a>
                </div>
            </div>

            <div className={Styles.container_pg4}>
                <div>
                    <img src={icon3} alt="imagem de musicoterapia" />
                </div>
                <div>
                    <h3>Musicoterapia: sobre os sintomas de ansiedade e depressão </h3>
                    <p>Efeitos da musicoterapia sobre os sintomas de ansiedade e depressão em adultos com diagnóstico de transtornos mentais</p>
                    <a href='https://www.youtube.com/watch?v=XpTNvCV5DgE' target='blank'>Saiba Mais</a>
                </div>
            </div>
        </section>
    );
}

export default Blog_P4;