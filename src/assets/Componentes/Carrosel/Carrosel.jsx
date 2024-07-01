import React, { Component } from "react"
import './Carrosel.css'
import Dafny from '../../Images/HomeImg/Vector.png'
import Julia from '../../Images/HomeImg/Vector7.png'
import Debora from '../../Images/HomeImg/Vector6.png'
import Gabrielle from '../../Images/HomeImg/Vector5.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination, Autoplay} from 'swiper/modules'
import 'swiper/css/navigation';
import { Link } from "react-router-dom"

export default class Bea extends Component {
  state = {
    Profissionais: [
      {
        Photo: Dafny,
        Nome: 'Dafny psicologa',
        Especialidade: 'Psico-Oncologia',
        Sobre: 'Oi! Eu sou a Dafny, uma neuropsicóloga apaixonada pelo estudo do cérebro e sua relação com o comportamento humano. Meu foco é abordar de forma abrangente o paciente, combinando técnicas de avaliação neuropsicológica e terapia cognitivo-comportamental para criar planos de intervenção personalizados para cada pessoa.'
      },
      {
        Photo: Gabrielle,
        Nome: 'Gabrielle psicologa',
        Especialidade: 'Saúde Mental e violências',
        Sobre: 'Olá, sou a Gabrielle, Eu realizo atendimentos considerando o histórico e o momento de vida atual do paciente. Utilizo entrevistas de anamnese e técnicas da terapia cognitiva comportamental para promover autoconhecimento, reestruturação cognitiva e regulação emocional. Para pessoas que sofreram violência, os atendimentos são baseados na escuta ativa, psicoeducação e ressignificação das experiências vividas, com um foco especial em mulheres, que são as principais vítimas.'
      },
      {
        Photo: Debora,
        Nome: 'Debora psicóloga',
        Especialidade: ' Atendimento à população LGBTQIA+',
        Sobre: ' Olá! Sou a Débora, psicóloga especializada em atendimento ao público LGBT+ e em sexualidade humana. Desde o início da minha carreira, meu foco tem sido oferecer um espaço seguro e acolhedor, para permitir que os pacientes possam explorar livremente suas identidades e questões relacionadas à sexualidade. Utilizando técnicas como entrevistas, anamnese e psicoeducação, crio um ambiente que promove a inclusão e o respeito. A psicoterapia não apenas ajuda a enfrentar desafios emocionais, mas também promove o autoconhecimento e o desenvolvimento pessoal, permitindo aos pacientes relações interpessoais mais saudáveis e um bom relacionamento consigo mesmo.'
      },
      {
        Photo: Julia,
        Nome: 'Júlia Psicologa',
        Especialidade: 'TEA - Terapia ABA',
        Sobre: 'Olá, sou a Júlia, especialista em atendimento para crianças e adolescentes com diagnóstico de TEA. Sou apaixonada pela Psicologia e suas muitas formas de trabalho. Meu objetivo é acolher de forma abrangente e global com técnicas especializadas e olhar clínico. Junto da Terapia Cognitivo Comportamental criar um plano individual de tratamento para cada criança e adolescente atendidos. '
      }
    ]
  }
  render() {
    return (
      <section className='Fundo'>
        <div className='Title'>
          <h2>Conheça alguns profissionais encontrados na intermentes</h2>
        </div>
        <div className='Pro'>

          <Swiper
            slidesPerView={1}
            autoplay={{
              delay: 2900,
              disableOnInteraction: false,
            }}
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination, Autoplay]}>

            {this.state.Profissionais.map((item) => (
              <SwiperSlide>
                <div className='Especialistas'>
                  <div className='Psico'><img src={item.Photo} alt={item.Nome} /></div>
                  <div className='Infopro'>
                    <div className='Titulos'>
                      <h3>{item.Nome}</h3>
                      <p>{item.Especialidade}</p>
                    </div>

                    <p>{item.Sobre}</p>
                    <Link to={"/Cadastro"}>
                      <button className='Btn1'>Saiba mais</button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='Usuario'>
          <h2>Dê o primeiro passo...</h2>
          <div className='Userbtn'>
            <div>
              <h3>Paciente</h3>
              <Link to={"/Cadastro"}>
                <button>Cadastre-se</button>
              </Link>
            </div>
            <div>
              <h3>Psicologa/o</h3>
              <Link to={"/Especialista"}>
                <button>Faça parte do nosso time</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
}