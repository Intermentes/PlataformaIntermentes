import React from 'react';
import Styles from './EspecialistaLogado.module.css'
import calendar from '../../Images/EspecialistasImg/calendar (2).png'
import perfil from '../../Images/EspecialistasImg/perfil.png'
import tutorial from '../../Images/EspecialistasImg/tutorial.png'
import carteira from '../../Images/EspecialistasImg/carteira.png'

function App() {
  return (
    <>
    <section className={Styles.FundoPerfil}>
        <div className={Styles.titulo}>
            <h1>Serviços</h1>
        </div>
        <div className={Styles.Cardsperfil}>
            <div className={Styles.Card}>
                <span>Painel<br/>Financeiro</span>
                <img src={carteira} alt="icone fone" />
            </div>            
            <div className={Styles.Card}>
                <span>Tutorial</span>
                <img src={tutorial} alt="icone fone" />
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