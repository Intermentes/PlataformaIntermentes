// textAgendamentos.js
import React from 'react';
import Agendamentos from "./AgendamentoPsicologo";
import decoration from './textAgendamentosPsicologo.module.css'
import IconPagamentos from '../../Images/UserPage/IconPagamentos.png'

export default function textAgendamentos() {
    return (
        <section className={decoration.containerAgendamento}>
            <div className={decoration.titleDados}>
                <img src={IconPagamentos} alt="Icone de uma pessoa" />
                <h1>
                Agendamentos
                </h1>
            </div>

            <Agendamentos
                typeSession='Comum'
                dateAndTime='01/06/2024 às 15h30'
                namePaciente='Leo'
                linkSession='https://meet.google.com/yfy-ddzk-nae'
                cancelSession='Cancelar sessão'
            />
            <Agendamentos
                typeSession='Social'
                dateAndTime='01/06/2024 às 15h30'
                namePaciente='Bea'
                linkSession='https://meet.google.com/yfy-ddzk-nae'
                cancelSession='Cancelar sessão'
            />
            <Agendamentos
                typeSession='Social'
                dateAndTime='01/06/2024 às 15h30'
                namePaciente='Regis'
                linkSession='https://meet.google.com/yfy-ddzk-nae'
                cancelSession='Cancelar sessão'
            />
        </section>


    )
}
