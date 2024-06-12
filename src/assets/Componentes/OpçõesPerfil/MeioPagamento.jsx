import style from './MeioPagamento.module.css';
import IconAdicao from '../../Images/UserPage/IconAdicao.png';
import IconCard from '../../Images/UserPage/IconCard.png';
import React, { useState } from 'react';
import ModalCartao from './ComponentesModal/ModalCartao';

export default function MeioPagamento() {
    const [isModalCartaoOpen, setIsModalCartaoOpen] = useState(false);

    const openModalCartao = () => setIsModalCartaoOpen(true);
    const closeModalCartao = () => setIsModalCartaoOpen(false);
    
    return (
        <section className={style.SectionPagamentos}>
            <div className={style.containerDataBanker}>
                <h2 className={style.titleDados}>
                    <img src={IconCard} alt="Icone de uma pessoa" /> <span>Dados bancários</span>
                </h2>
                <div className={style.bankerBox}>
                    <div className={style.boxCardData}>
                        <div className={style.descriptionCardData}>
                            <p>Diogo Santana</p>
                            <p>•••• •••• •••• 9990</p>
                        </div>
                        <div className={style.descriptionCardData}>
                            <span className={style.iconCard}>M</span>
                            <p>Excluir</p>
                        </div>
                    </div>
                    <div className={`${style.boxCardData} ${style.abrirCartao}`} >
                        <div className={style.descriptionAddCard} onClick={openModalCartao}>
                            <img src={IconAdicao} alt="" />
                            <p className={style.newCardText}>Novo método de pagamento</p>
                        </div>
                    </div>
                    <div className={style.boxCardData}>
                        <div className={style.descriptionCardData}>
                            <p>Diogo Santana</p>
                            <p>•••• •••• •••• 5532</p>
                        </div>
                        <div className={style.descriptionCardData}>
                            <span className={style.iconCard}>M</span>
                            <p>Excluir</p>
                        </div>
                    </div>
                    <div className={style.boxCardData}>
                        <div className={style.descriptionCardData}>
                            <p>Diogo Santana</p>
                            <p>•••• •••• •••• 9990</p>
                        </div>
                        <div className={style.descriptionCardData}>
                            <span className={style.iconCard}>M</span>
                            <p>Excluir</p>
                        </div>
                    </div>
                    <ModalCartao isOpen={isModalCartaoOpen} onClose={closeModalCartao}>

                    </ModalCartao>
                </div>

            </div>
        </section>
    )

} 