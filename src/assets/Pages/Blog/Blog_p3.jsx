import Styles from './Blog_p3.Module.css'; // Importando o CSS Module
import icon from '../../Images/BlogImg/Artigo.png';
import arrow from '../../Images/BlogImg/Arrow.png';

function Blog_P3() {
    return (
        <section className={Styles.section_pg3}> {/* Usando as classes do CSS Module */}
            <h2>Artigo</h2>
            <div className={Styles.container_divs_pg3}>
                <div className={Styles.div_pg3}>
                    <div className={Styles.container_pg3}>
                        <img src={icon} alt="" />
                        <div>
                            <h3>Por que o Brasil tem a população mais ansiosa do mundo</h3>
                            <p>Aproximadamente 9,3% dos brasileiros sofrem de ansiedade patológica, segundo OMS</p>
                        </div>
                        <div className={Styles.arrow_pg3}>
                            <button>Leia Mais</button>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                </div>
                <div className={Styles.div_pg3}>
                    <div className={Styles.container_pg3}>
                        <img src={icon} alt="" />
                        <div>
                            <h3>Apenas 5% dos brasileiros fazem terapia, mas 16% tomam psicoativos</h3>
                            <p>O panorama mostra que mulheres, jovens e estudantes de renda mais alta vão mais a terapia</p>
                        </div>
                        <div className={Styles.arrow_pg3}>
                            <button>Leia Mais</button>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                </div>
                <div className={Styles.div_pg3}>
                    <div className={Styles.container_pg3}>
                        <img src={icon} alt="" />
                        <div>
                            <h3>Entenda a importância da terapia para a saúde mental</h3>
                            <p>Psicóloga desmitifica estereótipos sobre a terapia e sinaliza quando é necessário buscar por ajuda</p>
                        </div>
                        <div className={Styles.arrow_pg3}>
                            <button>Leia Mais</button>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog_P3;