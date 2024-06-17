import style from './Perfil.module.css';
import PainelUser from './MenuPerfil/PainelUser';
import { Outlet } from "react-router-dom"
import Header from '../../../Componentes/UsuarioLogado/PacienteHeaderFooter/HeaderPaciente';
import Footer from '../../../Componentes/UsuarioLogado/PacienteHeaderFooter/FooterPaciente';

export default function Perfil() {
    return (
        <div>
            <Header />
            <div className={style.container}>
                <PainelUser />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}