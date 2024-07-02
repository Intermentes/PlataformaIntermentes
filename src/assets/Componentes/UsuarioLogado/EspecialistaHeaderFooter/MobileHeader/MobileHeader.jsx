import React, { useState, useEffect } from 'react';
import axios from 'axios';
import hamburguer from '../../../../Images/HeaderImg/HeaderMobile.png';
import styles from './MobileHeader.module.css';
import Logo from '../../../../Images/Icons/Logo.png';
import { Link } from 'react-router-dom';

function HeaderMobile() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [userName, setUserName] = useState('Dafny');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const fetchUserName = async () => {
            try {
                const token = localStorage.getItem('token'); // Pega o token do localStorage
                if (token) {
                    const response = await axios.get('http://localhost:8080/api/usuario', {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    setUserName(response.data.nome); // Atualiza o estado com o nome do usuário
                    localStorage.setItem('userName', response.data.nome); // Armazena o nome no localStorage
                }
            } catch (error) {
                console.error('Erro ao buscar nome do usuário:', error);
            }
        };

        fetchUserName();
    }, []);

    return (
        <header>
            <div className={styles.containerHeader}>
                <Link to={'/HomeEspecialista'}>
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
                            <Link to={'/HomeEspecialista'}>
                                <li className={styles.linkItem}>
                                    Serviços
                                </li>
                            </Link>
                            <Link to={'/BlogPsicologo'}>
                                <li className={styles.linkItem}>
                                    Blog
                                </li>
                            </Link>
                            <Link to={'/PsicologiaGratuitaPsicologo'}>
                                <li className={styles.linkItem}>
                                    Ong's
                                </li>
                            </Link>
                            <Link to={'/SobreNosPsicologo'}>
                                <li className={styles.linkItem}>
                                    Sobre Nós
                                </li>
                            </Link>
                            <Link to={'/ParceriaPsicologo'}>
                                <li className={styles.linkItem}>
                                    Parcerias
                                </li>
                            </Link>
                        </ul>
                        <Link to={'/PerfilPsicologo/PainelPsicologo'}>
                            <div className={styles.boxAcessar}>
                                <p>Olá, {userName} </p>
                            </div>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default HeaderMobile;
