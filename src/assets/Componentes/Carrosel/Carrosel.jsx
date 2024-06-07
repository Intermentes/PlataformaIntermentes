import React, {Component} from "react"
import './Carrosel.css'
import Dafny from '../../Images/HomeImg/Vector.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css/navigation';

export default class Bea extends Component{
  state = {
    Profissionais:[
      {
        Photo: '',
        Nome: 'Dafny psicologa',
        Especialidade: 'Especialidade',
        Sobre:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
      },
      {
        Photo: '',
        Nome: 'Giovana psicologa',
        Especialidade: 'Especialidade',
        Sobre:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
      },
      {
        Photo: '',
        Nome: 'Daniela psicanalista',
        Especialidade: 'Especialidade',
        Sobre:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
      },
      {
        Photo: '',
        Nome: 'Dafny psicologa',
        Especialidade: 'Especialidade',
        Sobre:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
      }
    ]
  }
  render(){
    return(
      <>
      <section className='Fundo'>
        <div className='Title'>
          <h2>Conheça alguns profissionais encontrados na intermentes</h2>
          </div>
        <div className='Pro'>

        <Swiper
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
              <div className='Psico'><img src={Dafny} alt="" /></div>
              <div className='Infopro'>
                <div className='Titulos'>
                  <h3>{item.Nome}</h3>
                  <p>{item.Especialidade}</p>
                </div>

                <p>{item.Sobre}</p>
                <button className='Btn1'>Saiba mais</button>
              </div>
            </div>
            </SwiperSlide>          
        ))}
        </Swiper>
        </div>          
        <div className='Usuario'>
          <h2>Dé o primeiro passo...</h2>
          <div className='Userbtn'>
            <div>
              <h3>Paciente</h3>
              <button>Marque uma consuta</button>
              </div>
              <div>
                <h3>Psicologa</h3>
                <button>Faça parte do nosso time</button>
              </div>              
            </div>

        </div> 
      </section>
      </>
    )
  }
}