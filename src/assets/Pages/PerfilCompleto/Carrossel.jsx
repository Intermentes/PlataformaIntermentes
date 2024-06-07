import React, {Component} from "react"
import './Carrossel.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination} from 'swiper/modules'
import 'swiper/css/navigation'

export default class App{
    state = {
        Depoimentos:[
            {
                Review: '"Adorei a consulta, ela foi super gentil e me fez me sentir acolhida, ouvida. Quero continuar o atendimento com ela. E melhorar."',
                Autor: 'Bea Paciente da',
                Paciente:' Dafny Cristina'
            },
            {
                Review: '"Adorei a consulta, ela foi super gentil e me fez me sentir acolhida, ouvida. Quero continuar o atendimento com ela. E melhorar."',
                Autor: 'Bea Paciente da ',
                Paciente:'Dafny Cristina'
            },
            {
                Review: '"Adorei a consulta, ela foi super gentil e me fez me sentir acolhida, ouvida. Quero continuar o atendimento com ela. E melhorar."',
                Autor: 'Bea Paciente da ',
                Paciente:'Dafny Cristina'
            },
            {
                Review: '"Adorei a consulta, ela foi super gentil e me fez me sentir acolhida, ouvida. Quero continuar o atendimento com ela. E melhorar."',
                Autor: 'Bea Paciente da ',
                Paciente:'Dafny Cristina'
            },
            {
                Review: '"Adorei a consulta, ela foi super gentil e me fez me sentir acolhida, ouvida. Quero continuar o atendimento com ela. E melhorar."',
                Autor: 'Bea Paciente da ',
                Paciente:'Dafny Cristina'
            },
            {
                Review: '"Adorei a consulta, ela foi super gentil e me fez me sentir acolhida, ouvida. Quero continuar o atendimento com ela. E melhorar."',
                Autor: 'Bea Paciente da ',
                Paciente:'Dafny Cristina'
            }
        ]
    }
    render(){
      return(
        <>
        <section>
            <div className="Box">
                <div className="Subtexto">
                    <h2>E quem já faz terapia?</h2>
                    <p>Confira os feedback dos nossos pacientes sobre a plataforma e psicólogos que atendem na <span>Intermentes</span></p>
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
                        <SwiperSlide> 
                            <div className="Depoimentos">
                                <div className="Comentario">
                                   <p>{item.Review}</p>  
                                </div>
                                <div className="Autores">
                                    <img src={Avaliacao} alt="" />
                                    <p>{item.Autor}</p>
                                    <span>{item.Paciente}</span>
                                    <p></p>
                                </div> 
                            </div>
                            
                        </SwiperSlide>          
                        ))}
                    </Swiper> 
                <div className="Btn2">
                    <h3>Conheça nossos profissionais</h3>
                    <button>Escolha seu Psicólogo</button>
                </div>
            </div>
        </section>
        </>
      )
    }}