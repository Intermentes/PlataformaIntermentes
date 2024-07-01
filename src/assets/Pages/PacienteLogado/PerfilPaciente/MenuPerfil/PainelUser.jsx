import React, { useState } from 'react';
import './PainelUser.css';
import IconCalendar from '../../../../Images/UserPage/IconCalendar.png';
import IconLogout from '../../../../Images/UserPage/IconLogout.png';
import IconPainelControle from '../../../../Images/UserPage/IconPainelControle.png';
import IconReembolso from '../../../../Images/UserPage/IconReembolso.png';
import IconPagamentos from '../../../../Images/UserPage/IconPagamentos.png';
import IconDadosPessoais from '../../../../Images/UserPage/IconDadosPessoais.png';
import IconMenu from '../../../../Images/UserPage/iconMenu.png';
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
                    <p>Oi, Bea!</p>
                    </div>
                    <Link to={'/Perfil/PainelInicial'}>
                        <p className="data_user_text" id="text_conta"><img src={IconPainelControle} alt="" />
                            Painel Inicial</p>
                    </Link>
                <hr />
                    <h3>PERFIL / AGENDA</h3>
                    <Link to={'/Perfil/DadosPessoais'}>
                        <p className="data_user_text" id="text_conta">
                            <img src={IconDadosPessoais} alt="" />
                            Dados pessoais
                        </p>
                    </Link>
                    <Link to={'/Perfil/Agendamentos'}>
                        <p className="data_user_text" id="text_conta">
                            <img src={IconCalendar} alt="" />
                            Meu calendário
                        </p>
                    </Link>
                </div>
                <hr />
                <div className="box-data-user">
                <h3>FINANCEIRO</h3>
                    <Link to={'/Perfil/MeioPagamento'}>
                        <p className="data_user_text" id="text_conta">
                            <img src={IconPagamentos} alt="" />
                            Meio de pagamento
                        </p>
                    </Link>
                    <Link to={'/Perfil/Reembolso'}>
                        <p className="data_user_text" id="text_conta">
                            <img src={IconReembolso} alt="" />
                            Reembolsos
                        </p>
                    </Link>
                </div>
                <hr />
                <Link to={'/'}>
                    <p className="icone-sair"><img src={IconLogout} alt="" />
                    Sair</p>
                </Link>
            </div>
        </nav>
    );
}

