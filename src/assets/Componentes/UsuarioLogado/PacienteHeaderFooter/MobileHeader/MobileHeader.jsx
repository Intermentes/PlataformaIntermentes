import React, { useState, useEffect } from 'react';
import axios from 'axios';
import hamburguer from '../../../../Images/HeaderImg/HeaderMobile.png';
import styles from './MobileHeader.module.css';
import Logo from '../../../../Images/Icons/Logo.png';
import { Link } from 'react-router-dom';

function HeaderMobile() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [userName, setUserName] = useState('');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const fetchUserName = async () => {
            try {
                const token = localStorage.getItem('token'); // Pega o token do localStorage
                const userId = localStorage.getItem('userId'); // Pega o userId do localStorage

                if (token && userId) {
                    const response = await axios.get(`${import.meta.env.VITE_API_URL}/auth/user/${userId}`, {
                        headers: {
                            'ngrok-skip-browser-warning': 'true',
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    setUserName(response.data.name); // Atualiza o estado com o nome do usuário
                    localStorage.setItem('userName', response.data.name); // Armazena o nome no localStorage
                } else {
                    console.error('Token ou ID não encontrado no localStorage.');
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
                            <Link to={'/SobreNosPaciente'}>
                                <li className={styles.linkItem}>
                                    Sobre Nós
                                </li>
                            </Link>
                            <Link to={'/ParceriaPaciente'}>
                                <li className={styles.linkItem}>
                                    Parcerias
                                </li>
                            </Link>
                        </ul>
                        <Link to={'/Perfil/PainelInicial'}>
                            <div className={styles.boxAcessar}>
                                <p>Olá, {userName}</p>
                            </div>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default HeaderMobile;
