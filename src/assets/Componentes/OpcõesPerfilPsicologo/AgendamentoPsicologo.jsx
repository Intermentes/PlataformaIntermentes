// Agendamentos.js
import style from './AgendamentoPsicologo.module.css';
import React, { useState } from 'react';
import Modal from '../OpçõesPerfil/ComponentesModal/ModalSessao';



export default function Agendamentos({
    namePaciente,
    dateAndTime,
    linkSession,
    cancelSession
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className={style.containerAgenda}>
            
            <div className={style.boxDescription}>
                <div className={style.boxTypeDate}>
                    <h2>Consulta marcada:</h2>
                    <h2>{dateAndTime}</h2>
                </div>
                <div className={style.boxNameLinkSession}>
                    <p>com a(o) paciente {namePaciente} na sala:</p>
                    <a href={linkSession}>Link da sala: {linkSession}</a>
                </div>
            </div>
            <button className={style.btnCancelSession} onClick={openModal}>{cancelSession}</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>Tem certeza?</h2>
                <p>Se cancelar sua sessão, é provável que não consiga remarcar no mesmo horário com o mesmo paciente.</p>
                <div>
                    <button className={style.containerAgendabtn} onClick={closeModal}>Cancelar</button>
                </div>
            </Modal>
        </div>
    )
}

