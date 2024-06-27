import Styles from './Blog_p2.module.css'; // Importando o CSS Module
import icon1 from '../../Images/BlogImg/meditacao1.png';
import icon2 from '../../Images/BlogImg/meditacao2.png';
import icon3 from '../../Images/BlogImg/meditacao3.png';

function Blog_P2() {
    return (
        <section className={Styles.section_pg2}> {/* Usando as classes do CSS Module */}
            <h2>Meditação</h2>

            <div className={Styles.container_pg2}>
                <div className={Styles.imgBox}>
                    <img src={icon1} alt="" />
                </div>
                <div>
                    <h3>Meditação Guiada para RELAXAMENTO PROFUNDO</h3>
                    <p>Essa é uma meditação para te ajudar a relaxar profundamente, aliviar o estresse e se conectar com uma versão mais tranquila e equilibrada do seu ser.</p>
                    <a href="https://youtu.be/dkg1N8-cFV8?si=wXfMa1PmXvoTrOE-" target='_blank'>Saiba Mais</a>
                </div>
            </div>

            <div className={Styles.container_pg2}>
                <div className={Styles.imgBox}>
                    <img src={icon2} alt="" />
                </div>
                <div>
                    <h3>Meditação Guiada para Aliviar ANSIEDADE</h3>
                    <p>
                        Este vídeo de meditação guiada alivia a ansiedade. Comece focando na respiração para transformar seu estado mental. Acompanhe a visualização guiada para um relaxamento profundo, ideal para assistir no final do dia, antes de dormir ou pela manhã.</p>
                    <a href="https://youtu.be/sJjyX9W-E-Y?si=7BQWII62_89cox0k" target='_blank'>Saiba Mais</a>
                </div>
            </div>

            <div className={Styles.container_pg2}>
                <div className={Styles.imgBox}>
                    <img src={icon3} alt="" />
                </div>
                <div>
                    <h3>Meditação Para Dormir: Calma</h3>
                    <p>Utilize essa meditação para acalmar-se, superar a ansiedade, a irritabilidade e o estresse. Para obter melhores resultados medite diariamente.</p>
                    <a href="https://youtu.be/8YCv0RrpIb8?si=sWJPX_ENXKtZs-rp" target="_blank">Saiba Mais</a>
                </div>
            </div>

        </section>
    );
}

export default Blog_P2;