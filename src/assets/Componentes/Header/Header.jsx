import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Logo from '../../Images/Icons/Logo.png';
import HeaderMobile from './MobileHeader/MobileHeader';

function Header() {
  return (
    <header className={styles.header}>
      <HeaderMobile />
      <nav className={styles.menuLinks}>
        <Link to={'/'}>
          <img src={Logo} alt="Logo da Intermentes" className={styles.imgLogo} />
        </Link>
        <ul className={styles.listaLinks}>
          <Link to={'/'}>
            <li className={styles.linkItem}>
              Inicio
            </li>
          </Link>
          <Link to={'/Especialista'}>
            <li className={`${styles.linkItem} ${styles.liDropMenu}`}>
              Para Psicólogos
            </li>
          </Link>
          <Link to={'/Parceria'}>
          <li className={styles.linkItem}>
            Parcerias
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
    </header>
  );
}

export default Header;
