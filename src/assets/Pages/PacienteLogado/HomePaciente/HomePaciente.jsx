import Styles from './HomePaciente.module.css'
import calendar from '../../../Images/EspecialistasImg/calendar (2).png'
import perfil from '../../../Images/EspecialistasImg/perfil.png'
import tutorial from '../../../Images/EspecialistasImg/tutorial.png'
import carteira from '../../../Images/EspecialistasImg/carteira.png'
import psicologiaGratuita from '../../../Images/UserPage/IconPsicologiaGratuita.png'
import agende from '../../../Images/UserPage/IconAgendeSessao.png'
import Header from '../../../Componentes/UsuarioLogado/PacienteHeaderFooter/HeaderPaciente';
import Footer from '../../../Componentes/UsuarioLogado/PacienteHeaderFooter/FooterPaciente';
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
                    <Link>
                        <div className={Styles.Card}>
                            <span>Tutorial</span>
                            <img src={tutorial} alt="icone fone" />
                        </div>
                    </Link>
                    <Link to={'/EncontrePsico'}>
                        <div className={Styles.Card}>
                            <span>Agendar<br /> Consulta</span>
                            <img src={agende} alt="icone fone" />
                        </div>
                    </Link>
                    <Link to={'/PsicologiaGratuita'}>
                        <div className={Styles.Card}>
                            <span>Psicologia<br />Gratuita</span>
                            <img src={psicologiaGratuita} alt="icone fone" />
                        </div>
                    </Link>

                    <Link to={'/Perfil/PainelInicial'}>
                        <div className={Styles.Card}>
                            <span>Perfil</span>
                            <img src={perfil} alt="icone fone" />
                        </div>
                    </Link>
                    <Link to={'/Perfil/Agendamentos'}>
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