// textAgendamentos.js
import React from 'react';
import Agendamentos from "./Agendamentos";

export default function textAgendamentos(){
    return (
        <Agendamentos 
            subTitle='Consulta Marcada:'
            dateAndTime='01/06/2024 às 15h30'
            namePsico='Dafny'
            linkSession='https://meet.google.com/yfy-ddzk-nae'
            cancelSession='Cancelar sessão'
        />
    )
}
