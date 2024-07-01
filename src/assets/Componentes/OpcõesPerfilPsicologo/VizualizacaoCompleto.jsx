import React from 'react';
import foto from '../../Images/PerfilCompletoImg/Foto_Perfil.png';
import calendario from '../../Images/PerfilCompletoImg/calendario.png';
import styles from './VizualizacaoCompleto.module.css'

function VizualizacaoCompleto() {
    return (
        <section className={styles.sectionPerfilcompleto}>
            <div className={styles.perfil}>
                <div className={styles.containerDivPerfil}>
                    <div className={styles.leftDivPerfil}>
                        <img src={foto} alt="Foto da Psicologa" />
                        <span>Psicologa Dafny</span>
                        <span>CRM:908076</span>
                    </div>
                    <div className={styles.midDivPerfil}>
                        <span>Psico-Oncologia</span>
                        <p>Valor Sessão: <span>R$150</span></p>
                        <span>Duração da Sessão: 50min</span>
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
                </div>
            </div>
        </section>
    );
}

export default VizualizacaoCompleto;
