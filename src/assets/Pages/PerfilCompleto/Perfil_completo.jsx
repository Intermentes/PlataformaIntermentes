import React, { useState } from 'react';
import foto from '../../Images/PerfilCompletoImg/Foto_Perfil.png';
import estrelas from '../../Images/PerfilCompletoImg/estrelas.png';
import seta from '../../Images/PerfilCompletoImg/seta-direita.png';
import seta2 from '../../Images/PerfilCompletoImg/seta-esquerda.png';
import calendario from '../../Images/PerfilCompletoImg/calendario.png';
import styles from './Perfil_completo.module.css';

function Perfil_Completo() {
    const comentarios = [
        {
            id: 1,
            nome: 'Beatriz',
            data: '10/01/2024',
            texto: 'Adorei a consulta, ela foi super gentil e me fez me sentir acolhida, ouvida. Quero continuar o atendimento com ela. E melhorar',
        },
        {
            id: 2,
            nome: 'Carlos',
            data: '03/07/2024',
            texto: 'A consulta foi incrível, ela foi muito gentil e me fez sentir realmente ouvido e compreendido. Estou ansioso para continuar meu tratamento com ela e seguir melhorando.',
        },
        {
            id: 3,
            nome: 'Fabiana',
            data: '15/06/2024',
            texto: 'Excelente consulta, ela foi extremamente gentil e me fez sentir acolhido e compreendido. Estou motivado para continuar meu acompanhamento com ela.',
        },
        {
            id: 4,
            nome: 'Regina',
            data: '23/04/2024',
            texto: 'A consulta foi maravilhosa, ela foi muito atenciosa e me deixou confortável desde o início. Quero continuar com ela no meu tratamento e trabalhar para melhorar cada vez mais.',
        },
        {
            id: 5,
            nome: 'Ana',
            data: '15/05/2024',
            texto: 'Ótima experiência na consulta, ela foi muito gentil e me fez sentir acolhida e valorizada. Estou ansiosa para dar continuidade ao meu atendimento com ela.',
        },
        // Adicionar mais comentários conforme necessário
    ];

    const [comentarioAtual, setComentarioAtual] = useState(0);

    const proximoComentario = () => {
        setComentarioAtual((comentarioAtual + 1) % comentarios.length);
    };

    const comentarioAnterior = () => {
        const novoIndice = comentarioAtual === 0 ? comentarios.length - 1 : comentarioAtual - 1;
        setComentarioAtual(novoIndice);
    };

    const comentario = comentarios[comentarioAtual];

    return (
        <section className={styles.sectionPerfilcompleto}>
            <div className={styles.perfil}>
                <div className={styles.guia}>
                    <span><a href="/">especialistas</a></span>
                    <img src={seta} alt="Seta" />
                    <span><a href="/">perfil especialista</a></span>
                </div>

                <div className={styles.containerDivPerfil}>
                    <div className={styles.leftDivPerfil}>
                        <img src={foto} alt="Foto da Psicologa" />
                        <span>Psicologa Dafny</span>
                        <span>CRM:</span>
                    </div>
                    <div className={styles.midDivPerfil}>
                        <span>Especialidade</span>
                        <p>Valor Sessão: <span>R$150</span></p>
                        <span>Duração da Sessão: 50min</span>
                        <div>
                            <h4>Aptidões</h4>
                            <div className={styles.midContainerDivs}>
                                <div>ansiedade</div>
                                <div>ansiedade</div>
                                <div>ansiedade</div>
                                <div>ansiedade</div>
                                <div>ansiedade</div>
                                <div>ansiedade</div>
                                <div>ansiedade</div>
                                <div>ansiedade</div>
                                <div>ansiedade</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightDivPerfil}>
                        <img src={estrelas} alt="Estrelas" />
                        <h4>Comentários 5/5</h4>
                        <div className={styles.carrossel}>
                            <span>{comentario.id}. {comentario.nome} {comentario.data}</span>
                            <p>"{comentario.texto}"</p>
                            <div className={styles.botoesCarrossel}>
                                <button className={styles.botaoAnterior} onClick={comentarioAnterior}><img src={seta2} alt="botao esquerda" /></button>
                                <button className={styles.botaoProximo} onClick={proximoComentario}><img src={seta} alt="botao esquerda" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sobre}>
                <div className={styles.leftSobre}>
                    <div>
                        <h3>Sobre mim</h3>
                        <h4>Aptidões</h4>
                        <p>Evaluación neuropsicológica, Evaluación y tratamiento de pacientes con daño cerebral adquirido o congénito. Habilidad para interpretar y comunicar resultados de evaluaciones neuropsicológicas.</p>
                    </div>
                    <div>
                        <h4>Estudos</h4>
                        <p>¡Hola! Soy Camila Torres, una neuropsicóloga apasionada por el estudio del cerebro y su relación con el comportamiento humano. Mi enfoque es el abordaje integral del paciente, donde la combinación de técnicas de evaluación neuropsicológica y terapia cognitivo-conductual me permiten diseñar planes de intervención personalizados para cada persona.</p>
                    </div>
                </div>
                <div className={styles.rightSobre}>
                    <img src={calendario} alt="Calendário" />
                    <h4>Horários Disponíveis:</h4>
                    <div className={styles.rightSobreDivs}>
                        <div>9:00 am</div>
                        <div>9:00 am</div>
                        <div>9:00 am</div>
                        <div>9:00 am</div>
                        <div>9:00 am</div>
                        <div>9:00 am</div>
                    </div>
                    <button className={styles.botaoSobre}>Agendar Consulta</button>
                </div>
            </div>
        </section>
    );
}

export default Perfil_Completo;
