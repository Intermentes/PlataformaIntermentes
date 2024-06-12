import React from 'react';
import Styles from './EspecialistaLogado.module.css'
import calendar from '../../Images/EspecialistasImg/calendar (2).png'
import perfil from '../../Images/EspecialistasImg/perfil.png'
import grupo from '../../Images/EspecialistasImg/grupo.png'
import tutorial from '../../Images/EspecialistasImg/tutorial.png'
import consulta from '../../Images/EspecialistasImg/consulta.png'

function App() {
  return (
    <>
    <section className={Styles.FundoPerfil}>
        <div className={Styles.titulo}>
            <h1>Serviços</h1>
        </div>
        <div className={Styles.Cardsperfil}>
            <div className={Styles.Card}>
                <span>Tutorial</span>
                <img src={tutorial} alt="icone fone" />
            </div>
            <div className={Styles.Card}>
                <span>Agendar<br/>consulta</span>
                <img src={consulta} alt="icone fone" />
            </div>
            <div className={Styles.Card}>
                <span>Psicologia<br/>Gratuita</span>
                <img src={grupo} alt="icone fone" />
            </div>
            <div className={Styles.Card}>
                <span>Perfil</span>
                <img src={perfil} alt="icone fone" />
            </div>
            <div className={Styles.Card}>
                <span>Sessões</span>
                <img src={calendar} alt="icone fone" />
            </div>
        </div>
    </section>
    </>
  )
}

export default App

{/* <div className={Styles.main}>
        <h1 className={Styles.titulo}>Serviços</h1>

        <section className={Styles.section}>
          <div className={Styles.card}>
            <h2>Tutorial</h2>
            <div className={Styles.link}>
              <a href="#">Agendar consulta gratuita</a>
            </div>
          </div>

          <div className={Styles.card}>
            <h2>Psicologia</h2>
            <p>Oferecemos atendimento psicológico para diversos públicos.</p>
            <div className={Styles.link}>
              <a href="#">Conhecer nossos profissionais</a>
            </div>
          </div>
          <div className={Styles.card}>
            <h2>Sessões</h2>
            <p>Agende suas sessões online ou presenciais.</p>
            <button className={Styles.botao}>Agendar sessão</button>
          </div>
        </section>
      </div> */}