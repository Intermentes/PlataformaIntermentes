import styles from './PsicologiaGratuita.module.css'; // Importando o módulo CSS

import ImgCabecalho from '../../Images/PsicologiaGratuitaImg/ImgCabecalho.png';
import OngCasa1 from '../../Images/PsicologiaGratuitaImg/OngCasa1.png';
import OngIpefem from '../../Images/PsicologiaGratuitaImg/OngIpefem.png';
import OngCvv from '../../Images/PsicologiaGratuitaImg/OngCvv.png';
import OngCasasMarias from '../../Images/PsicologiaGratuitaImg/OngCasasMarias.png';
import OngBorboletaAzul from '../../Images/PsicologiaGratuitaImg/OngBorboletaAzul.png';
import OngBemEstar from '../../Images/PsicologiaGratuitaImg/OngBemEstar.png';
import OngAusOuvidos from '../../Images/PsicologiaGratuitaImg/OngAusOuvidos.png';
import Header from "../../Componentes/Header/Header";
import Footer from "../../Componentes/Footer/Footer";

export default function PsicologiaGratuita() {
    return (
        <main className={styles.MainPsicologiaGratuita}>
            <Header />
            <section className={styles.Cabecalho}>
                <div className={styles.ContainterText}>
                    <p className={styles.CorRoxa}>Saúde mental é necessidade:</p>
                    <h1>Aqui, você encontra a oportunidade de cuidar da sua mente gratuitamente.</h1>
                    <p>Recomendamos esta opção para quem não tem condições financeiras de cuidar da saúde mental.</p>
                    <p>Reunimos algumas ONGs para ampliar o acesso ao cuidado necessário.</p>

                    <p className={styles.AlertText}> *As Ong’s recomendadas pela Intermentes não garantem consultas gratuitas.</p>
                    <p className={styles.AlertText}>**A Intermentes não se responsabiliza pela experiência do usuário nas plataformas recomendadas.</p>
                </div>
                <div className={styles.BoxImg}>
                    <img src={ImgCabecalho} alt="Imagens de 3 pessoas diferentes sorrindo" />
                </div>
            </section>
            <section className={styles.SectionOngs}>
                <h2>ONG'S</h2>
                <div className={styles.ContainerOngs}>
                    <div className={styles.BoxOng}>
                        <div className={styles.BoxLogoOng}>
                            <div className={styles.BoxImg}>
                                <img src={OngCasa1} alt="" />
                            </div>
                        </div>
                        <div className={styles.BoxDescriptionOng}>
                            <div className={styles.GroupNameLocalization}>
                                <h3>Casa 1</h3>
                            </div>
                            <p>Entre os serviços ofertados pela Clínica Social Casa 1 está atendimento psicoterápico continuado, atendimento psiquiátrico, acompanhamento com nutricionistas, plantão de escuta e diversas modalidades de terapias complementares.</p>
                            <a href="https://www.casaum.org/" target='_blank' className={styles.BtnOng}>Saiba Mais</a>
                        </div>
                    </div>
                    {/* ... outros blocos de BoxOng seguem o mesmo padrão */}
                </div>
            </section>
            <Footer />
        </main>
    );
}


            {/* <section className='SectionOngs'>
                <h2>ONG'S</h2>
                <div className='ContainerOngs'>
                    <div className='BoxOng'>
                        <div className='BoxLogoOng'>
                            <div className='BoxImg'>
                                <img src={OngCasa1} alt="" /> 
                            </div>
                        </div>
                        <div className='BoxDescriptionOng'>
                            <div className='GroupNameLocalization'>
                                <h3>Casa 1</h3>
                            </div>
                            <p>Entre os serviços ofertados pela Clínica Social Casa 1 está atendimento psicoterápico continuado, atendimento psiquiátrico, acompanhamento com nutricionistas, plantão de escuta e diversas modalidades de terapias complementares.</p>
                            <a href="https://www.casaum.org/" target='_blank' className='BtnOng'>Saiba Mais</a>
                        </div>
                    </div>
                    <div className='BoxOng'>
                        <div className='BoxLogoOng'>
                            <div className='BoxImg'>
                                <img src={OngIpefem} alt="" /> 
                            </div>
                        </div>
                        <div className='BoxDescriptionOng'>
                            <div className='GroupNameLocalization'>
                                <h3>Ipefem</h3>
                            </div>
                            <p>O Ipefem é uma Organização Não Governamental (ONG) de educação em saúde mental criada para ajudar pessoas a identificar e interromper os processos de violência socioemocional no trabalho – principalmente as microagressões contra mulheres.</p>
                            <a href="https://ipefem.org.br/" target='_blank' className='BtnOng'>Saiba Mais</a>
                        </div>
                    </div>
                    <div className='BoxOng'>
                        <div className='BoxLogoOng'>
                            <div className='BoxImg'>
                                <img src={OngCvv} alt="" /> 
                            </div>
                        </div>
                        <div className='BoxDescriptionOng'>
                            <div className='GroupNameLocalization'>
                                <h3>CVV (Centro de Valorização da Vida)</h3>
                            </div>
                            <p>O CVV – Centro de Valorização da Vida realiza apoio emocional e prevenção do suicídio, atendendo voluntária e gratuitamente todas as pessoas que querem e precisam conversar, sob total sigilo por telefone, e-mail e chat 24 horas todos os dias. Ligue 188.</p>
                            <a href="https://cvv.org.br/conheca-mais/" target='_blank' className='BtnOng'>Saiba Mais</a>
                        </div>
                    </div>
                    <div className='BoxOng'>
                        <div className='BoxLogoOng'>
                            <div className='BoxImg'>
                                <img src={OngCasasMarias} alt="" /> 
                            </div>
                        </div>
                        <div className='BoxDescriptionOng'>
                            <div className='GroupNameLocalization'>
                                <h3>Casa de Marias</h3>
                            </div>
                            <p>A Casa de Marias é um projeto sem fins lucrativos que surgiu na Vila Esperança, zona leste da cidade de São Paulo. Com a equipe formada por um grupo de psicoterapeutas, o foco do projeto é no atendimento à população negra, periférica, que reside na região, especialmente mulheres.</p>
                            <a href="https://www.instagram.com/casademariasoficial/" target='_blank' className='BtnOng'>Saiba Mais</a>
                        </div>
                    </div>
                    <div className='BoxOng'>
                        <div className='BoxLogoOng'>
                            <div className='BoxImg'>
                                <img src={OngBorboletaAzul} alt="" /> 
                            </div>
                        </div>
                        <div className='BoxDescriptionOng'>
                            <div className='GroupNameLocalization'>
                                <h3>Instituto Borboleta Azul</h3>
                            </div>
                            <p>O objetivo do Instituto Borboleta Azul é oferecer atendimento psicológico gratuito e qualificado, dando acesso à saúde mental à jovens e suas famílias em situação de vulnerabilidade social.</p>
                            <a href="https://institutoborboletaazul.org.br/" target='_blank' className='BtnOng'>Saiba Mais</a>
                        </div>
                    </div>
                    <div className='BoxOng'>
                        <div className='BoxLogoOng'>
                            <div className='BoxImg'>
                                <img src={OngBemEstar} alt="" /> 
                            </div>
                        </div>
                        <div className='BoxDescriptionOng'>
                            <div className='GroupNameLocalization'>
                                <h3>Instituto Bem do Estar</h3>
                            </div>
                            <p>O Instituto Bem do Estar tem como propósito desafiar as pessoas a mudar o seu comportamento em relação à saúde da mente, colaborando para a prevenção de doenças psicológicas e contribuindo para uma sociedade mais consciente e saudável.</p>
                            <a href="https://www.bemdoestar.org/" target='_blank' className='BtnOng'>Saiba Mais</a>
                        </div>
                    </div>
                    <div className='BoxOng'>
                        <div className='BoxLogoOng'>
                            <div className='BoxImg'>
                                <img src={OngAusOuvidos} alt="" /> 
                            </div>
                        </div>
                        <div className='BoxDescriptionOng'>
                            <div className='GroupNameLocalization'>
                                <h3>Instituto Aus ouvidos</h3>
                            </div>
                            <p>Aus Ouvidos, é uma plataforma digital que oferece um serviço especializado de escutas pontuais que incide no cuidado emocional, físico e social das pessoas.</p>
                            <a href="https://www.ausouvidos.com/" target='_blank' className='BtnOng'>Saiba Mais</a>
                        </div>
                    </div>
                </div>
            </section> */}

