import React, { Component } from "react";
import styles from './Depoimentos.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import Avaliacao from '../../Images/HomeImg/star.png';

export default class App extends Component {
    state = {
        Depoimentos: [
            {
                Review: '"Adorei a consulta, ela foi super gentil e me fez me sentir acolhida, ouvida. Quero continuar o atendimento com ela. E melhorar."',
                Autor: 'Bea Paciente da',
                Paciente: ' Dafny Cristina'
            },
            {
                Review: '"Adorei a consulta, ela foi super gentil e me fez me sentir acolhida, ouvida. Quero continuar o atendimento com ela. E melhorar."',
                Autor: 'Bea Paciente da ',
                Paciente: 'Dafny Cristina'
            },
            {
                Review: '"Adorei a consulta, ela foi super gentil e me fez me sentir acolhida, ouvida. Quero continuar o atendimento com ela. E melhorar."',
                Autor: 'Bea Paciente da ',
                Paciente: 'Dafny Cristina'
            },
            {
                Review: '"Adorei a consulta, ela foi super gentil e me fez me sentir acolhida, ouvida. Quero continuar o atendimento com ela. E melhorar."',
                Autor: 'Bea Paciente da ',
                Paciente: 'Dafny Cristina'
            },
            {
                Review: '"Adorei a consulta, ela foi super gentil e me fez me sentir acolhida, ouvida. Quero continuar o atendimento com ela. E melhorar."',
                Autor: 'Bea Paciente da ',
                Paciente: 'Dafny Cristina'
            },
            {
                Review: '"Adorei a consulta, ela foi super gentil e me fez me sentir acolhida, ouvida. Quero continuar o atendimento com ela. E melhorar."',
                Autor: 'Bea Paciente da ',
                Paciente: 'Dafny Cristina'
            },
            {
                Review: '"Adorei a consulta, ela foi super gentil e me fez me sentir acolhida, ouvida. Quero continuar o atendimento com ela. E melhorar."',
                Autor: 'Bea Paciente da ',
                Paciente: 'Dafny Cristina'
            },            {
                Review: '"Adorei a consulta, ela foi super gentil e me fez me sentir acolhida, ouvida. Quero continuar o atendimento com ela. E melhorar."',
                Autor: 'Bea Paciente da ',
                Paciente: 'Dafny Cristina'
            }
            // Adicione mais depoimentos conforme necessário
        ]
    };

    render() {
        return (
            <section className={styles.CarroselSection}>
                <div className={styles.Box}>
                    <div className={styles.Subtexto}>
                        <h2>E quem já faz terapia?</h2>
                        <p>Confira os feedback dos nossos pacientes sobre a plataforma e psicólogos que atendem na <span>Intermentes</span></p>
                    </div>
                    <Swiper
                        slidesPerView={3}
                        Autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                    >
                        {this.state.Depoimentos.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.Depoimentos}>
                                    <div className={styles.Comentario}>
                                        <p>{item.Review}</p>
                                    </div>
                                    <div className={styles.Autores}>
                                        <img src={Avaliacao} alt="Avaliação" />
                                        <p>{item.Autor}</p>
                                        <span>{item.Paciente}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
        
                </div>
            </section>
        );
    }
}
