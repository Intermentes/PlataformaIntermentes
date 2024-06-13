import React, { Component } from "react"
import Styles from './Especialista.module.css'
import ComentsStyles from './Coments.module.css'
import CadastroForm from './CadastreseEspecialista'
import FaqEspecialista from './FaqEspecialista'
import Banner from '../../Images/EspecialistasImg/BannerEspecialista.png'
import Seta from '../../Images/EspecialistasImg/Icon.png'
import Fundo from '../../Images/EspecialistasImg/Fundo.png'
import Lock from '../../Images/EspecialistasImg/Lock.png'
import Aproved from '../../Images/EspecialistasImg/Aproved.png'
import Girl from '../../Images/EspecialistasImg/3Girls.png'
import Um from '../../Images/EspecialistasImg/um.png'
import Dois from '../../Images/EspecialistasImg/dois.png'
import Tres from '../../Images/EspecialistasImg/tres.png'
import CadastroImage from '../../Images/EspecialistasImg/blob.png'
import check from '../../Images/EspecialistasImg/check.png'
import close from '../../Images/EspecialistasImg/close.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css/navigation'
import Avaliacao from '../../Images/EspecialistasImg/star.png'


export default class Especialistas extends Component {
    state = {
        Depoimentos: [
            {
                Review: '"A plataforma é bastante intuitiva, o que facilita tanto para mim quanto para os pacientes marcarem e participarem das sessões online de forma tranquila e sem complicações."',
                Autor: 'Dafny Cristina Psicóloga'
            },
            {
                Review: '"Os recursos disponíveis são realmente úteis. eles enriquecem a experiência terapêutica, permitindo uma colaboração mais eficaz e uma melhor compreensão das necessidades dos pacientes"',
                Autor: 'Dafny Cristina Psicóloga'
            },
            {
                Review: '"A capacidade de personalizar minha experiência na plataforma é um grande diferencial. Tenho a liberdade de moldar a plataforma de acordo com minhas necessidades específicas e estilo de trabalho."',
                Autor: 'Dafny Cristina Psicóloga'
            },
            {
                Review: '"A plataforma é bastante intuitiva, o que facilita tanto para mim quanto para os pacientes marcarem e participarem das sessões online de forma tranquila e sem complicações."',
                Autor: 'Dafny Cristina Psicóloga'
            },
            {
                Review: '"Os recursos disponíveis são realmente úteis. eles enriquecem a experiência terapêutica, permitindo uma colaboração mais eficaz e uma melhor compreensão das necessidades dos pacientes"',
                Autor: 'Dafny Cristina Psicóloga'
            },
            {
                Review: '"A capacidade de personalizar minha experiência na plataforma é um grande diferencial. Tenho a liberdade de moldar a plataforma de acordo com minhas necessidades específicas e estilo de trabalho."',
                Autor: 'Dafny Cristina Psicóloga'
            }
        ]
    }

    render() {
        return (
            <>
                <section className={Styles.PageEspecialistas}>
                    <div className={Styles.CabecalhoEspecialista}>
                        <div className={Styles.CabecalhoTextos}>
                            <h1>Seu <span>consultório online, inovando e otimizando</span> a vida do especialista </h1>
                            <p>O seu ambiente de trabalho completo em apenas um lugar, investimos no futuro e bem estar do profissional.</p>
                            <div className={Styles.BtnCabecalho}>
                                <button>Faça parte do nosso time <img src={Seta} /></button>
                            </div>
                        </div>
                        <div className={Styles.CabecalhoBanner}>
                            <img src={Banner} />
                        </div>
                    </div>
                    <div className={Styles.Vantagens}>
                        <div className={Styles.Textos2}>
                            <h2>Faça parte da <span>Intermentes</span><br /> e não saia perdendo</h2>
                            <p>Impulsionando a otimização e visibilidade do seu trabalho em apenas um lugar.</p>
                            <FaqEspecialista />
                        </div>
                        <div className={Styles.Cards}>
                            <div className={Styles.Card1}>
                                <img src={Lock} />
                                <p>Dados<br /><span>Criptografados</span></p>
                            </div>
                            <div className={Styles.Card2}>
                                <img src={Aproved} />
                                <p>Conformidade<br /><span>LGPD</span></p>
                            </div>
                            <div className={Styles.Banner2}>
                                <img src={Fundo} />
                            </div>
                        </div>
                    </div>
                    <div className={Styles.Titulo3}>
                        <h2>Como funciona a inscrição na<br /><span>Intermentes</span></h2>
                    </div>
                    <div className={Styles.FazerParte}>
                        <div className={Styles.Textos3}>
                            <ul>
                                <li>
                                    <div className={Styles.Passos1}>
                                        <img src={Um} />
                                        <h3>Cadastro</h3>
                                        <p>Aqui, é o nosso primeiro contato juntos, preencha todo o nosso <span>formulário.</span><br />Para seguir para a próxima fase é necessário preencher todos os dados solicitados no <span>formulário.</span> Depois disso, passamos para a próxima fase.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={Styles.Passos2}>
                                        <img src={Dois} />
                                        <h3>Validação</h3>
                                        <p>Nesta etapa, os dados que você informou serão analisados. E após análise, retornaremos a aprovação e reprovação detalhada e justificada via e-mail. </p>
                                    </div>
                                </li>
                                <li>
                                    <div className={Styles.Passos3}>
                                        <img src={Tres} />
                                        <h3>Ativação</h3>
                                        <p>Nesta etapa, caso tenha sido aprovado, seu perfil ficara disponível para iniciar o atendimento  na rede e os planos com benefícios exclusivos ficaram abertos para sua escolha e compra.<br /> Caso compre um plano, você estará disponível na rede de buscas e apto a receber novos clientes em até 48h úteis.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className={Styles.Girl}>
                            <img src={Girl} />
                        </div>
                    </div>
                    <div className={Styles.CadastroContainer}>
                        <div className={Styles.Formsbox}>
                        <CadastroForm/>
                        <img src={CadastroImage} alt="Cadastro" />
                        </div>
                    </div>
                    <div className={Styles.Planos}>
                        <div className={Styles.Texto6}>
                            <h2>Conheça nossas planos</h2>
                            <p>Transforme o local de trabalho com terapia sob medida. Saúde mental é o alicerce para inovação e sucesso!</p>
                        </div>
                        <div className={Styles.Cards3}>
                            <div className={Styles.Card4}>
                                <h3>Plano Raiz</h3>
                                <h4>R$ 150,00<span>/por mês</span></h4>
                                <p> Forneça seus serviços na plataforma sem custo de hospedagem</p>
                                <ul>
                                    <li><img src={check} />at tellus at urna condimentum</li>
                                    <li><img src={check} />at tellus at urna condimentum</li>
                                    <li><img src={close} />at tellus at urna condimentum</li>
                                    <li><img src={close} />at tellus at urna condimentum</li>
                                </ul>
                            </div>
                            <div className={Styles.Card4}>
                                <h3>Plano Crescimento</h3>
                                <h4>R$ 440,97<span>/por 3 meses</span></h4>
                                <p>Up na carreira prioridades na busca</p>
                                <ul>
                                    <li><img src={check} />at tellus at urna condimentum</li>
                                    <li><img src={check} />at tellus at urna condimentum</li>
                                    <li><img src={close} />at tellus at urna condimentum</li>
                                    <li><img src={close} />at tellus at urna condimentum</li>
                                </ul>
                            </div>
                            <div className={Styles.Card4}>
                                <h3>Plano Florescer</h3>
                                <h4>R$ 854,94<span>/por 6 meses</span></h4>
                                <p>Profissão nas alturas, time de marketing para você</p>
                                <ul>
                                    <li><img src={check} />at tellus at urna condimentum</li>
                                    <li><img src={check} />at tellus at urna condimentum</li>
                                    <li><img src={close} />at tellus at urna condimentum</li>
                                    <li><img src={close} />at tellus at urna condimentum</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={ComentsStyles.Box}>
                        <div className={ComentsStyles.Subtexto}>
                            <h2>E quem já trabalha conosco?</h2>
                            <p>Confira os feedback dos nossos especialistas sobre a plataforma da <span>Intermentes</span></p>
                        </div>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={50}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}>
                            {this.state.Depoimentos.map((item) => (
                                <SwiperSlide key={item.Autor}>
                                    <div className={ComentsStyles.Depoimentos}>
                                        <div className={ComentsStyles.Comentario}>
                                            <p>{item.Review}</p>
                                        </div>
                                        <div className={ComentsStyles.Autores}>
                                            <img src={Avaliacao} alt="" />
                                            <p>{item.Autor}</p>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className={ComentsStyles.Btn2}>
                            <h3>Faça parte da <span>Intermente</span></h3>
                            <button>Cadastre-se</button>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
