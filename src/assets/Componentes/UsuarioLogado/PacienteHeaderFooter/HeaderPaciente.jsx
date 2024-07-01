import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderPaciente.module.css';
import Logo from '../../../Images/Icons/Logo.png';
import HeaderMobile from '../../UsuarioLogado/PacienteHeaderFooter/MobileHeader/MobileHeader';
import axios from 'axios';


function HeaderPaciente() {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const fetchUserName = async () => {
            try {
                const token = localStorage.getItem('token');
                const userId = localStorage.getItem('userId'); // Certifique-se de usar a chave correta 'userId'

                if (!token || !userId) {
                    console.error('Token ou ID não encontrado no localStorage.');
                    return;
                }

                // Fazendo a requisição GET para obter os dados do usuário
                const userResponse = await axios.get(`http://localhost:8080/auth/user/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                if (userResponse.data) {
                    setUserName(userResponse.data.name);
                    localStorage.setItem('userName', userResponse.data.name); // Armazena o nome no localStorage
                } else {
                    console.error('Usuário não encontrado.');
                }
            } catch (error) {
                console.error('Erro ao buscar o nome do usuário:', error);
            }
        };

        fetchUserName(); // Chama a função ao montar o componente

    }, []); // Array vazio para garantir que useEffect execute apenas uma vez

    return (
        <header className={styles.header}>
            <HeaderMobile />
            <nav className={styles.menuLinks}>
                <Link to={'/HomePaciente'}>
                    <img src={Logo} alt="Logo da Intermentes" className={styles.imgLogo} />
                </Link>
                <ul className={styles.listaLinks}>
                    <Link to={'/HomePaciente'}>
                        <li className={styles.linkItem}>
                            Serviços
                        </li>
                    </Link>
                    <Link to={'/Blog'}>
                        <li className={`${styles.linkItem} ${styles.liDropMenu}`}>
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
                            Sobre nós
                        </li>
                    </Link>
                    <Link to={'/ParceriaPaciente'}>
                        <li className={styles.linkItem}>
                            Parcerias
                        </li>
                    </Link>
                </ul>
                <div className={styles.boxAcessar}>
                    <p>Olá, {userName}</p>
                </div>
            </nav>
        </header>
    );

}

export default HeaderPaciente;
