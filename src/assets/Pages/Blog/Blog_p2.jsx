import Styles from './Blog_p2.Module.css'; // Importando o CSS Module
import icon1 from '../../Images/BlogImg/meditação1.png';

function Blog_P2() {
    return (
        <section className={Styles.section_pg2}> {/* Usando as classes do CSS Module */}
            <h2>Meditação</h2>
            <div className={Styles.div_pg2}>
                <div className={Styles.container_pg2}>
                    <img src={icon1} alt="" />
                    <div>
                        <h3>Meditação Guiada para RELAXAMENTO PROFUNDO</h3>
                        <p>Essa é uma meditação para te ajudar a relaxar profundamente, aliviar o estresse e se conectar com uma versão mais tranquila e equilibrada do seu ser.</p>
                        <button>Saiba Mais</button>
                    </div>
                </div>
            </div>

            <div className={Styles.div_pg2}>
                <div className={Styles.container_pg2}>
                    <img src={icon1} alt="" />
                    <div>
                        <h3>Meditação Guiada para Aliviar ANSIEDADE</h3>
                        <p>Essa meditação guiada vai te ajudar a aliviar a ansiedade. Vamos começar tomando consciência da respiração, percebendo como esse simples gesto transforma seu estado mental. Em seguida, vou te guiar em uma visualização para que você se entregue ainda mais para um momento de relaxamento. Você pode fazer no final do dia, antes de dormir ou mesmo de manhã se preferir.</p>
                        <button>Saiba Mais</button>
                    </div>
                </div>
            </div>

            <div className={Styles.div_pg2}>
                <div className={Styles.container_pg2}>
                    <img src={icon1} alt="" />
                    <div>
                        <h3>Meditação Para Dormir: Calma</h3>
                        <p>Utilize essa meditação para acalmar-se, superar a ansiedade, a irritabilidade e o estresse. Para obter melhores resultados medite diariamente.</p>
                        <button>Saiba Mais</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog_P2;