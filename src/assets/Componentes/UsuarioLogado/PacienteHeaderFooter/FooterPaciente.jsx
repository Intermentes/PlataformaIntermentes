import React from 'react';
import styles from './FooterPaciente.module.css';
import Logo from '../../../Images/Icons/Logo.png';
import IconInsta from '../../../Images/FooterImg/IconInsta.png';
import IconLinkdin from '../../../Images/FooterImg/IconLinkdin.png';
import IconFace from '../../../Images/FooterImg/IconFace.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.containerItem}>
                    <h3 className={styles.subTitle}>Sou Paciente</h3>
                    <ul className={styles.listFooter}>
                        <Link><li>Encontre seu Psicologo</li></Link>
                        <Link><li>Sessões Gratuitas?</li></Link>
                    </ul>
                    <h3 className={styles.subTitle}>Sou especialista</h3>
                    <ul className={styles.listFooter}>
                        <Link to={'/Especialista'}><li>Beneficio para minha profissão</li></Link>
                    </ul>
                    <div className={styles.boxLogoFooter}>
                        <Link to={''}> <img src={Logo} alt="Logo da Intermentes" /></Link>
                    </div>
                </div>
                <div className={styles.grayLine}></div>
                <div className={styles.containerItem}>
                    <h3 className={styles.subTitle}>Ajuda</h3>
                    <ul className={styles.listFooter}>
                        <li><a href="">Política de privacidade</a></li>
                        <li><a href="">Perguntas frequentes</a></li>
                        <li><a href="">Canal de Denuncias</a></li>
                        <li><a href="">Termos de uso</a></li>
                    </ul>
                </div>
                <div className={styles.grayLine}></div>
                <div className={styles.containerItem}>
                    <h3 className={styles.subTitle}>Atendimento</h3>
                    <ul className={styles.listFooter}>
                        <li>Atendimento a clientes de segunda à<br />sexta feira das 09h às 18h (exceto feriados)</li>
                        <li><span>Contato:</span> (00) 00000-0000</li>
                        <li><span>Email:<br /></span> intermentes.hub@gmail.com</li>
                    </ul>
                </div>
                <div className={styles.grayLine}></div>
                <div className={styles.containerItem}>
                    <h3 className={styles.subTitle}>Mapa</h3>
                    <ul className={styles.listFooter}>
                        <Link to={''}><li>Inicio</li></Link>
                        <Link><li>Serviços</li></Link>
                        <Link><li>Parcerias</li></Link>
                        <Link><li>Blog</li></Link>
                        <Link to={'/Blog'}><li>Sobre nós</li></Link>
                    </ul>
                    <h3 className={styles.subTitle}>Onde Estamos?</h3>
                    <ul className={styles.listRedes}>
                        <li><a href=''><img src={IconInsta} alt="" /></a></li>
                        <li><a href='' ><img src={IconFace} alt="" /></a></li>
                        <li><a href=''><img src={IconLinkdin} alt="" /></a></li>
                    </ul>
                </div>
            </div>
            <p className={styles.copy}>© <span className={styles.corRoxa}>Intermentes</span> | todos os direitos reservados | 2024</p>
        </footer>
    );
}

export default Footer;