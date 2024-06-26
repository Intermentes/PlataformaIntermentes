import React from 'react';
import Styles from './EspecialistaLogado.module.css'
import calendar from '../../../Images/EspecialistasImg/calendar (2).png'
import perfil from '../../../Images/EspecialistasImg/perfil.png'
import tutorial from '../../../Images/EspecialistasImg/tutorial.png'
import carteira from '../../../Images/EspecialistasImg/carteira.png'
import Header from '../../../Componentes/UsuarioLogado/EspecialistaHeaderFooter/HeaderEspecialista';
import Footer from '../../../Componentes/UsuarioLogado/EspecialistaHeaderFooter/FooterEspecialista';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function App() {
    return (
        <main>
            <Header />
            <h1 className={Styles.titulo}>Serviços</h1>
            <motion.div className={Styles.FundoPerfil}
                initial={{ opacity: 0, y: -15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div className={Styles.Cardsperfil}
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                >
                    <Link to={'/PerfilPsicologo/PainelFinanceiro'}>
                        <div className={Styles.Card}>
                            <span>Painel<br />Financeiro</span>
                            <img src={carteira} alt="icone fone" />
                        </div>
                    </Link>
                    <Link to={'/PerfilPsicologo/PainelPsicologo'}>
                        <div className={Styles.Card}>
                            <span>Perfil</span>
                            <img src={perfil} alt="icone fone" />
                        </div>
                    </Link>
                    <Link to={'/PerfilPsicologo/AgendamentosPsicologo'}>
                        <div className={Styles.Card}>
                            <span>Meu<br />Calendário</span>
                            <img src={calendar} alt="icone fone" />
                        </div>
                    </Link>
                </motion.div>
            </motion.div>
            <Footer />
        </main>
    )
}

export default App