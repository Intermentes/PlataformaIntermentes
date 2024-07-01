import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderEspecialista.module.css';
import Logo from '../../../Images/Icons/Logo.png';
import HeaderMobile from './MobileHeader/MobileHeader';
import axios from 'axios';

function HeaderEspecialista() {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const fetchUserName = async () => {
            try {
                const token = localStorage.getItem('token');
                const userId = localStorage.getItem('userId');

                if (!token || !userId) {
                    console.error('Token ou userId não encontrado no localStorage.');
                    return;
                }

                // Fazendo a requisição GET para obter os dados do especialista
                const userResponse = await axios.get(`http://localhost:8080/auth/user/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                if (userResponse.data) {
                    const userName = userResponse.data.name;
                    setUserName(userName);
                    localStorage.setItem('userName', userName); // Armazena o nome no localStorage
                } else {
                    console.error('Especialista não encontrado.');
                }
            } catch (error) {
                console.error('Erro ao buscar o nome do especialista:', error);
            }
        };

        fetchUserName(); // Chama a função ao montar o componente

    }, []);

    return (
        <header className={styles.header}>
            <HeaderMobile />
            <nav className={styles.menuLinks}>
                <Link to={'/HomeEspecialista'}>
                    <img src={Logo} alt="Logo da Intermentes" className={styles.imgLogo} />
                </Link>
                <ul className={styles.listaLinks}>
                    <Link to={'/HomeEspecialista'}>
                        <li className={styles.linkItem}>
                            Serviços
                        </li>
                    </Link>
                    <Link to={'/BlogPsicologo'}>
                        <li className={`${styles.linkItem} ${styles.liDropMenu}`}>
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
                            Sobre nós
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
                        <p>Olá, {userName}</p>
                    </div>
                </Link>
            </nav>
        </header>
    );
}

export default HeaderEspecialista;
