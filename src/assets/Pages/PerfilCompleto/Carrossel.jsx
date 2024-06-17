import React, { Component } from "react";
import Style from './Carrossel.module.css'; // Importando o módulo CSS
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/swiper.css'; // Importe apenas o CSS base do Swiper
import 'swiper/css/navigation.css'; // Importe apenas o CSS de navegação do Swiper

class App extends Component {
  state = {
    Depoimentos: [
      {
        Review: '"Adorei a consulta, ela foi super gentil e me fez me sentir acolhida, ouvida. Quero continuar o atendimento com ela. E melhorar."',
        Autor: 'Bea Paciente da',
        Paciente: 'Dafny Cristina'
      },
      {
        Review: '"Adorei a consulta, ela foi super gentil e me fez me sentir acolhida, ouvida. Quero continuar o atendimento com ela. E melhorar."',
        Autor: 'Bea Paciente da',
        Paciente: 'Dafny Cristina'
      },
      {
        Review: '"Adorei a consulta, ela foi super gentil e me fez me sentir acolhida, ouvida. Quero continuar o atendimento com ela. E melhorar."',
        Autor: 'Bea Paciente da',
        Paciente: 'Dafny Cristina'
      },
      {
        Review: '"Adorei a consulta, ela foi super gentil e me fez me sentir acolhida, ouvida. Quero continuar o atendimento com ela. E melhorar."',
        Autor: 'Bea Paciente da',
        Paciente: 'Dafny Cristina'
      },
      {
        Review: '"Adorei a consulta, ela foi super gentil e me fez me sentir acolhida, ouvida. Quero continuar o atendimento com ela. E melhorar."',
        Autor: 'Bea Paciente da',
        Paciente: 'Dafny Cristina'
      },
      {
        Review: '"Adorei a consulta, ela foi super gentil e me fez me sentir acolhida, ouvida. Quero continuar o atendimento com ela. E melhorar."',
        Autor: 'Bea Paciente da',
        Paciente: 'Dafny Cristina'
      }
    ]
  }

  render() {
    return (
      <section className={Style.SectionCarrosel}>
        <div className={Style.Box}>
          <div className={Style.SubtextoCarrosel}>
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
          >
            {this.state.Depoimentos.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={Style.Depoimentos}>
                  <div className={Style.Comentario}>
                    <p>{item.Review}</p>
                  </div>
                  <div className={Style.Autores}>
                    <p>{item.Autor}</p>
                    <span>{item.Paciente}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={Style.Btn2}>
            <h3>Conheça nossos profissionais</h3>
            <button>Escolha seu Psicólogo</button>
          </div>
        </div>
      </section>
    )
  }
}

export default App;
