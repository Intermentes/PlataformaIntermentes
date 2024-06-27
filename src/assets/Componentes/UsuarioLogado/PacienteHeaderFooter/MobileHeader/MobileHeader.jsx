import React, { useState } from 'react';
import hamburguer from '../../../../Images/HeaderImg/HeaderMobile.png';
import styles from './MobileHeader.module.css';
import Logo from '../../../../Images/Icons/Logo.png';
import { Link } from 'react-router-dom';

function HeaderMobile() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <div className={styles.containerHeader}>
                <Link to={'/HomePaciente'}>
                    <img src={Logo} alt="Logo da Intermentes" className={styles.logo} />
                </Link>
                <img
                    src={hamburguer}
                    alt="hamburguer menu"
                    className={styles.hamburguer}
                    onClick={toggleMenu}
                />
                <div className={`${styles.menuHamburguer} ${menuOpen ? styles.menuOpen : ''}`}>
                    <nav className={styles.navHamburguer}>
                        <ul className={styles.listaLinks}>
                            <Link to={'/HomePaciente'}>
                                <li className={styles.linkItem}>
                                    Serviços
                                </li>
                            </Link>
                            <Link to={'/Blog'}>
                                <li className={styles.linkItem}>
                                    Blog
                                </li>
                            </Link>
                            <Link to={'/PsicologiaGratuita'}>
                                <li className={styles.linkItem}>
                                    Ong's
                                </li>
                            </Link>
                            <Link to={'/SobreNos'}>
                                <li className={styles.linkItem}>
                                    Sobre Nós
                                </li>
                            </Link>
                            <Link to={'/Parceria'}>
                                <li className={styles.linkItem}>
                                    Parcerias
                                </li>
                            </Link>
                        </ul>
                        <Link to={'/Perfil/PainelInicial'}>
                            <div className={styles.boxAcessar}>
                                <p>Olá, Beatriz </p>
                            </div>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default HeaderMobile;
