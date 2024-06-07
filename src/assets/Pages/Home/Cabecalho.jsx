import Styles from './Cabecalho.module.css'
import imagem from '../../Images/HomeImg/pessoas-curtindo.png'
import seta from '../../Images/HomeImg/seta-icon.png'
import seta2 from '../../Images/HomeImg/seta-dupla-icon.png'

function Cabecalho() {
    return (
        <>
            <div className={Styles.fundo}>
                <div className={Styles.container}>
                    <div className={Styles.img}><img src={imagem} alt="algumas pessoas curtindo" /></div>
                    <div className={Styles.container_texto}>
                        <h1>A <span>saúde mental</span> não é apenas um elemento e sim é um dos <span>pilares essenciais.</span></h1>

                        <p>Coloque hoje mesmo sua saúde mental em primeiro lugar com apenas um clique de distância.</p>

                        <p>Desenvolva esse pilar conosco e veja florecer o seu crescimento pessoal e sua qualidade de vida!!</p>

                        <div className={Styles.Button_Agendar}>
                            <span>Cadastre-se</span>
                            <img src={seta} alt="icone seta" />
                        </div>

                    </div>
                </div>
                <div className={Styles.Button_fixed}><img src={seta2} alt="setas duplas" /></div>
            </div>
        </>
    )
}

export default Cabecalho