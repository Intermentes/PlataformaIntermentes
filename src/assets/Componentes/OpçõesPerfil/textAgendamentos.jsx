// textAgendamentos.js
import React from 'react';
import Agendamentos from "./Agendamentos";
import decoration from './textAgendamento.module.css'
import IconPagamentos from '../../Images/UserPage/IconPagamentos.png'

export default function textAgendamentos() {
    return (
        <section className={decoration.containerAgendamento}>
            <div className={decoration.titleDados}>
                <img src={IconPagamentos} alt="Icone de uma pessoa" />
                <h1>
                    Dados bancários
                </h1>
            </div>

            <Agendamentos
                typeSession='Comum'
                valueSession='150'
                dateAndTime='01/06/2024 às 15h30'
                namePsico='Dafny'
                linkSession='https://meet.google.com/yfy-ddzk-nae'
                cancelSession='Cancelar sessão'
            />
            <Agendamentos
                typeSession='Social'
                valueSession='150'
                dateAndTime='01/06/2024 às 15h30'
                namePsico='Dafny'
                linkSession='https://meet.google.com/yfy-ddzk-nae'
                cancelSession='Cancelar sessão'
            />
            <Agendamentos
                typeSession='Social'
                valueSession='150'
                dateAndTime='01/06/2024 às 15h30'
                namePsico='Dafny'
                linkSession='https://meet.google.com/yfy-ddzk-nae'
                cancelSession='Cancelar sessão'
            />
        </section>


    )
}
