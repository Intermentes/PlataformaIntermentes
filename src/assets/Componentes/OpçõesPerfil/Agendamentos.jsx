// Agendamentos.js
import style from './Agendamentos.module.css';
import React, { useState } from 'react';
import Modal from './ComponentesModal/ModalSessao';

export default function Agendamentos({
    subTitle,
    dateAndTime,
    namePsico,
    linkSession,
    cancelSession
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <section className={style.sectionAgendamentos}>
            <div className={style.containerAgenda}>
                <div>
                    <div>
                        <h1>{subTitle}</h1>
                        <p>{dateAndTime}</p>
                    </div>
                    <p>com a(o) psicóloga(o) {namePsico} na sala:</p>
                    <a href={linkSession}>{linkSession}</a>
                </div>
                <button className={style.btnCancelSession} onClick={openModal}>{cancelSession}</button>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <h2>Tem certeza?</h2>
                    <p>Se cancelar sua sessão, é provável que não consiga remarcar no mesmo horário com o mesmo psicólogo.</p>
                    <div>
                        <button>Cancelar</button>
                    </div>
                </Modal>
            </div>
        </section>
    )
}

