import React, { useState, useEffect } from 'react';
import style from './PainelInicial.module.css';
import IconSetaDireita from '../../Images/UserPage/arrow-square-right.png';
// import FotoPessoa from '../../Images/UserPage/Bea.png';
import IconSom from '../../Images/UserPage/IconSom.png';
import Notif from '../../Images/UserPage/Notif.png';

export default function PainelInicial({ statusSocial }) {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const storedUserName = localStorage.getItem('userName');
        if (storedUserName) {
            setUserName(storedUserName);
        }
    }, []);

    return (
        <section className={style.sectionPainelInicial}>
            <div className={style.containerPrincipal}>
                <div className={style.boxTitlePainel}>
                    <h1>Perfil</h1>
                    <p>Bem vindo de volta!! Esperamos que seu dia seja incrível</p>
                </div>
                <div className={style.boxSessoes}>
                    <div className={style.acessarSessao}>
                        <p>Hoje é o dia da sua sessão com a Dr.(a) Dafny</p>
                        <div>
                            <p>Acesse a sala</p>
                            <img src={IconSetaDireita} alt="" />
                        </div>
                    </div>
                    <div className={style.acaoSocial}>
                        <div>
                            <p className={style.titleSocial}>Sessões sociais</p>
                            {/* <p>{statusSocial}</p> */}
                        </div>
                        <div className={style.boxDescriptionText}>
                            <p>Realize sua validação de renda para acessar sessões com valor social</p>
                            <img src={IconSetaDireita} alt="" />
                        </div>
                    </div>
                </div>
                <div className={style.boxUltimasConsultas}>
                    <div className={style.titleUltimasConsultas}>
                        <p>Últimas consultas realizadas</p>
                        <p className="CorRoxa Strong">Veja Todas</p>
                    </div>
                </div>
            </div>
            <aside className={style.containerSecundario}>
                <div className={style.boxImagemUser}>
                    {/* <img src={FotoPessoa} alt="" /> */}
                    <h2>{userName}</h2>
                    <hr />
                </div>
                <div className={style.titleLembrete}>
                    <h2>Lembretes</h2>
                    <img src={Notif} alt="" />
                </div>
                <div className={style.alertBox}>
                    <img src={IconSom} alt="" />
                    <div className={style.alertDescription}>
                        <p>Próxima consulta</p>
                        <p>8:00 AM - 12:00 PM</p>
                    </div>
                </div>
            </aside>
        </section>
    );
}
