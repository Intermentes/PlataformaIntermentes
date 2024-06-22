import React, { useState } from 'react';
import hamburguer from '../../../Images/HeaderImg/HeaderMobile.png';
import styles from './MobileHeader.module.css';
import Logo from '../../../Images/Icons/Logo.png';
import { Link } from 'react-router-dom';

function HeaderMobile() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <div className={styles.containerHeader}>
                <Link to={'/'}>
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
                            <Link to={'/'}>
                                <li className={styles.linkItem}>
                                    Inicio
                                </li>
                            </Link>
                            <Link to={'/Especialista'}>
                                <li className={styles.linkItem}>
                                    Para Psicólogos
                                </li>
                            </Link>
                            <Link to={'/SobreNos'}>
                                <li className={styles.linkItem}>
                                    Sobre nós
                                </li>
                            </Link>
                        </ul>
                        <div className={styles.boxAcessar}>
                            <Link to={'/Login'}><p className={styles.entrar}>Entrar</p></Link>
                            <Link to={'/Cadastro'}><p className={styles.cadastrar}>Cadastrar</p></Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default HeaderMobile;
