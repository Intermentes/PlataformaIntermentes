import React, { useState } from 'react';
import './PainelPsicologo.css';
import IconCalendar from '../../../../../Images/UserPage/IconCalendar.png';
import IconLogout from '../../../../../Images/UserPage/IconLogout.png';
import IconPainelControle from '../../../../../Images/UserPage/IconPainelControle.png';
import IconSessoes from '../../../../../Images/UserPage/sessoe.png';
import IconPagamentos from '../../../../../Images/UserPage/IconPagamentos.png';
import IconDadosPessoais from '../../../../../Images/UserPage/IconDadosPessoais.png';
import IconDenuncia from '../../../../../Images/UserPage/IconDenuncia.png';
import Iconfolder from '../../../../../Images/UserPage/folder.png';
import IconMenu from '../../../../../Images/UserPage/iconMenu.png'; // Adicione o ícone de menu
import { Link } from 'react-router-dom';

export default function PainelPsicologo() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="nav-page-user">
            <div className="menu-hamburger" onClick={toggleMenu}>
                <img src={IconMenu} alt="Menu" />
            </div>
            <div className={`menu-content ${menuOpen ? 'open' : ''}`}>
                <div className="box-data-user">
                    <div className="box-name-user">
                        <h2>Minha conta</h2>
                        <p>Oi, Dafny!</p>
                    </div>
                    <Link to={'/PerfilPsicologo/PainelPsicologo'}>
                        <p className="data_user_text" id="text_conta"><img src={IconPainelControle} alt="" />
                            Painel Inicial</p>
                    </Link>
                </div>
                <hr />
                <div className="box-data-user">
                    <h3>PERFIL / AGENDA </h3>
                    <Link to={'/PerfilPsicologo/DadosPessoaisPsicologo'}>
                        <p className="data_user_text" id="text_conta"><img src={IconDadosPessoais} alt="" />
                            Dados pessoais</p>
                    </Link>
                    <Link to={'/PerfilPsicologo/AgendamentosPsicologo'}>
                        <p className="data_user_text" id="text_conta"><img src={IconCalendar} alt="" />
                            Meu calendário</p>
                    </Link>
                    <Link to={'/PerfilPsicologo/PerfilVizualizacao'}>
                        <p className="data_user_text" id="text_conta"><img src={Iconfolder} alt="" />
                        Perfil de visualização</p>
                    </Link>
                </div>
                <hr />
                <div className="box-data-user">
                    <h3>FINANCEIRO</h3>
                    <Link to={'/PerfilPsicologo/ConfigurarSessao'}>
                        <p className="data_user_text" id="text_conta"><img src={IconSessoes} alt="" />
                        Sessões</p>
                    </Link>
                    <Link to={'/PerfilPsicologo/PainelFinanceiro'}>
                        <p className="data_user_text" id="text_conta"><img src={IconPagamentos} alt="" />
                        Painel Financeiro</p>
                    </Link>
                </div>
                <hr />
                <Link to={'/HomeEspecialista'}>
                    <p className="icone-sair"><img src={IconLogout} alt="" />
                    Sair</p>
                </Link>
            </div>
        </nav>
    );
}
