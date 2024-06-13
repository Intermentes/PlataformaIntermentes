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