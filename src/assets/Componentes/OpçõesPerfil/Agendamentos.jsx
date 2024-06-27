import style from './Agendamentos.module.css';
import React, { useState } from 'react';
import Modal from './ComponentesModal/ModalSessao';



export default function Agendamentos({
    typeSession,
    valueSession,
    dateAndTime,
    namePsico,
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
                    <h2>Consulta marcada: {typeSession} </h2>
                    <p>Valor pago: R${valueSession}</p>
                    <p>{dateAndTime}</p>
                </div>
                <div className={style.boxNameLinkSession}>
                    <p>com a(o) psicóloga(o) {namePsico} na sala:</p>
                    <a href={linkSession}>Link da sala: {linkSession}</a>
                </div>
            </div>
            <button className={style.btnCancelSession} onClick={openModal}>{cancelSession}</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className={style.boxCancelar}>
                    <h2>Tem certeza?</h2>
                    <p>Se cancelar sua sessão, é provável que não consiga remarcar no mesmo horário com o mesmo psicólogo.</p>
                    <div>
                        <button>Cancelar</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

