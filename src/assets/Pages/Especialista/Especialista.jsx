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

import check from '../../Images/EspecialistasImg/check.png'
import close from '../../Images/EspecialistasImg/close.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css/navigation'
import Avaliacao from '../../Images/EspecialistasImg/star.png'
import Header from "../../Componentes/Header/Header"
import Footer from "../../Componentes/Footer/Footer"
import { motion } from 'framer-motion';


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
            <section className={Styles.PageEspecialistas}>
                <Header />
                <div className={Styles.CabecalhoEspecialista}>
                    <motion.div className={Styles.CabecalhoTextos}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                       
                        <h1>Seu <span className="CorRoxa">consultório online, inovando e otimizando </span> a vida do especialista </h1>
                        <p>O seu ambiente de trabalho completo em apenas um lugar, investimos no futuro e bem estar do profissional.</p>
                        <div className={Styles.BtnCabecalho}>
                            <button>Faça parte do nosso time</button>
                        </div>
                    </motion.div>
                    <motion.div className={Styles.CabecalhoBanner}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                    >
                        <img src={Banner} />
                    </motion.div>
                </div>
                <div className={Styles.Vantagens}>
                    <motion.div className={Styles.Textos2}
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h2>Faça parte da <span>Intermentes</span><br /> e não saia perdendo</h2>
                        <p>Impulsionando a otimização e visibilidade do seu trabalho em apenas um lugar.</p>
                        <div className={Styles.faqBox}>
                            <FaqEspecialista />
                        </div>
                    </motion.div>
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
                <div className={Styles.Planos}>
                    <motion.div className={Styles.Texto6}
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2 }}
                    >
                        <h2>Conheça nossas planos</h2>
                        <p>Transforme o local de trabalho com terapia sob medida. Saúde mental é o alicerce para inovação e sucesso!</p>
                    </motion.div>
                    <motion.div className={Styles.Cards3}
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2 }}
                    >
                        <div className={Styles.Card4}>
                            <h3>Plano Raiz</h3>
                            <h4>R$ 150,00<span>/por mês</span></h4>
                        </div>
                        <div className={Styles.Card4}>
                            <h3>Plano Crescimento</h3>
                            <h4>R$ 440,97<span>/por 3 meses</span></h4>
                        </div>
                        <div className={Styles.Card4}>
                            <h3>Plano Florescer</h3>
                            <h4>R$ 854,94<span>/por 6 meses</span></h4>
                        </div>
                    </motion.div>
                </div>
                <div className={ComentsStyles.Box}>
                    <div className={ComentsStyles.Subtexto}>
                        <h2>E quem já trabalha conosco?</h2>
                        <p>Confira os feedback dos nossos especialistas sobre a plataforma da <span>Intermentes</span></p>
                    </div>
                    <Swiper
                        slidesPerView={3}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                            1023: {
                                slidesPerView: 3,
                            },
                            320: {
                                slidesPerView: 1,
                            }
                        }}
                        >
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
                <Footer />
            </section>

        )
    }
}
