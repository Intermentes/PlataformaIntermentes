import style from './PerfilPsicologo.module.css';
import PainelUser2 from './MenuPsicologo/PainelPsicologo';
import { Outlet } from "react-router-dom"
import Header from '../../../../Componentes/UsuarioLogado/EspecialistaHeaderFooter/HeaderEspecialista';
import Footer from '../../../../Componentes/UsuarioLogado/EspecialistaHeaderFooter/FooterEspecialista';

export default function Perfil() {
    return (
        <div>
            <Header />
            <div className={style.container}>
                <PainelUser2 />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}