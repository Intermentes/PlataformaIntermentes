import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderPaciente.module.css';
import Logo from '../../../Images/Icons/Logo.png';
import HeaderMobile from '../../UsuarioLogado/PacienteHeaderFooter/MobileHeader/MobileHeader'

function HeaderPaciente() {
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
        <Link to={'/Perfil/PainelInicial'}>
          <div className={styles.boxAcessar}>
            <p>Olá, Beatriz </p>
          </div>
        </Link>
    
      </nav>
    </header>
  );
}

export default HeaderPaciente;
