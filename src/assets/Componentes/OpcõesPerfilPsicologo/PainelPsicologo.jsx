import style from './PainelPsicologo.module.css'
import IconSetaDireita from '../../Images/UserPage/arrow-square-right.png'
import FotoPessoa from '../../Images/UserPage/FotoPessoa.png'
import IconSom from '../../Images/UserPage/IconSom.png'
import Notif from '../../Images/UserPage/Notif.png'
import star from '../../Images/UserPage/star.png'
import pontinhoroxo from '../../Images/UserPage/ponto.png'
import barraprogresso from '../../Images/UserPage/Progress bar.png'

export default function PainelPsicologo({
    nomePaciente,
    statusSocial
}
) {
    return (
        <section className={style.sectionPainelInicial}>
            <div className={style.containerPrincipal}>
                <div className={style.boxTitlePainel}>
                    <h1>Perfil</h1>
                    <p>Bem vindo de volta!! Esperamos que seu dia seja incrível</p>
                </div>
                <div className={style.boxSessoes}>
                    <div className={style.acessarSessao}>
                        <img src={star} className={style.imgStar} alt="" />
                        <div>
                        <h2>9.6 AVALIAÇÃO</h2>
                        <p> 86% dos pacientes avaliaram o atendimento</p>
                        </div>
                    </div>
                    <div className={style.acaoSocial}>
                        <div className={style.boxAcoes}>
                            <p className={style.titleSocial}>Ações beneficentes</p>
                            <img src={IconSetaDireita} alt="" />
                            <p className={style.subtitle}>Visibilidade</p>
                        </div>
                        <div className={style.boxDescriptionText}>
                            <div>
                                <img src={pontinhoroxo} alt="" />
                                <p>Nivél 1</p>                                
                            </div>

                            <p>34%</p>
                            <img src={barraprogresso} alt="" />
                        </div>
                    </div>
                </div>
                <div className={style.boxUltimasConsultas}>
                    <div className={style.titleUltimasConsultas}>
                        <p>Últimos pacientes atendidos</p>
                        <p className='CorRoxa Strong'>Veja Todas</p>
                    </div>

                </div>
            </div>
            <aside className={style.containerSecundario}>
                <div className={style.boxImagemUser}>
                    <img src={FotoPessoa} alt="" />
                    <h2>Dra Dafny</h2>
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
                <div className={style.boxPlanos}>
                    <p>PLANO CRESCIMENTO</p>
                    <div className={style.upBox}>
                        <p>Upgrade no plano</p>
                        <img src={IconSetaDireita} alt="" />
                    </div>
                </div>
            </aside>
        </section>
    )
}