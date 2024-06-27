import style from './MeioPagamento.module.css';
import IconAdicao from '../../Images/UserPage/IconAdicao.png';
import IconCard from '../../Images/UserPage/IconCard.png';
import React, { useState } from 'react';
import ModalCartao from './ComponentesModal/ModalCartao';

export default function MeioPagamento() {
    const [isModalCartaoOpen, setIsModalCartaoOpen] = useState(false);

    const openModalCartao = () => setIsModalCartaoOpen(true);
    const closeModalCartao = () => setIsModalCartaoOpen(false);

    const [tipoCartao, setTipoCartao] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para enviar os dados do formulário
        console.log('Formulário enviado');
    };

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
                        <section className={style.containerCadastrarCartao}>
                            <p className={style.descricaoSegurancaCartao}>
                                <svg width="21" height="27" viewBox="0 0 21 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.60608 4.81168L10.5 1L19.3939 4.81168C19.7616 4.96926 20 5.3308 20 5.73083V16.5181C20 18.6712 18.8463 20.6593 16.9768 21.7275L10.5 25.4286L4.02317 21.7275C2.15372 20.6593 1 18.6712 1 16.5181V5.73082C1 5.3308 1.2384 4.96926 1.60608 4.81168Z"
                                        stroke="#2C2C2C"
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Para sua proteção, pediremos o código de segurança do cartão nas próximas compras.
                            </p>
                            <form onSubmit={handleSubmit} className={style.formsCartaoNovo}>
                                <div className={style.boxInputCartaoNovo}>
                                    <label htmlFor="tipo-cartao">Tipo de Cartão<span>*</span></label>
                                    <select id="tipo-cartao" value={tipoCartao} onChange={(e) => setTipoCartao(e.target.value)} required>
                                        <option value="">Selecione</option>
                                        <option value="debito">Débito</option>
                                        <option value="credito">Crédito</option>
                                    </select>
                                </div>
                                <div className={style.boxInputCartaoNovo}>
                                    <label htmlFor="nome-titular">Nome do titular<span>*</span></label>
                                    <input type="text" id="nome-titular" className={style.nomeTitular} required />
                                </div>
                                <div className={style.boxInputCartaoNovo}>
                                    <label htmlFor="cpf-cartao">CPF<span>*</span></label>
                                    <input type="text" id="cpf-cartao" className={style.cpfCartao} required />
                                </div>
                                <div className={style.boxInputCartaoNovo}>
                                    <label htmlFor="num-cartao">Número do cartão<span>*</span></label>
                                    <input type="text" id="num-cartao" className={style.numCartao} required />
                                </div>
                                <div className={style.boxInputCartaoNovo}>
                                    <label htmlFor="cvv-cartao">CVV<span>*</span></label>
                                    <input type="text" id="cvv-cartao" className={style.cvvCartao} required />
                                </div>
                                <div className={style.boxInputCartaoNovo}>
                                    <label htmlFor="data-expedicao">Data de expiração<span>*</span></label>
                                    <input type="text" id="data-expedicao" className={style.dataExpedicao} required />
                                </div>
                                <div className={style.boxInputCartaoNovo}>
                                    <label htmlFor="cep-cartao">Cep<span>*</span></label>
                                    <input type="text" id="cep-cartao" className={style.cepCartao} required />
                                </div>

                                <button type="submit">Salvar</button>
                            </form>
                        </section>
                    </ModalCartao>
                </div>

            </div>
        </section>
    )

} 