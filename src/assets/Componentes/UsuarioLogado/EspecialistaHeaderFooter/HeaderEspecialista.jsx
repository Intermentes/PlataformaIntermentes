import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderEspecialista.module.css';
import Logo from '../../../Images/Icons/Logo.png';
import HeaderMobile from './MobileHeader/MobileHeader';

function HeaderEspecialista() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
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
