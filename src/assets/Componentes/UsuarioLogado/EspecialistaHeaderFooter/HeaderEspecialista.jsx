import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderEspecialista.module.css';
import Logo from '../../../Images/Icons/Logo.png';

function HeaderEspecialista() {
  return (
    <header className={styles.header}>
      <nav className={styles.menuLinks}>
        <Link to={'/'}>
          <img src={Logo} alt="Logo da Intermentes" className={styles.imgLogo} />
        </Link>
        <ul className={styles.listaLinks}>
          <Link to={'/'}>
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
          <Link to={'/SobreNos'}>
            <li className={styles.linkItem}>
              Sobre nós
            </li>
          </Link>
          <Link to={'/Parceria'}>
            <li className={styles.linkItem}>
            Parcerias
            </li>
          </Link>
        </ul>
        <div className={styles.boxAcessar}>
            <p>Olá, Dafny </p>
        </div>
      </nav>
    </header>
  );
}

export default HeaderEspecialista;
