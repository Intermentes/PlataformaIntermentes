import React, { useState } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import foto from '../../Images/PerfilCompletoImg/Foto_Perfil.png';
import estrelas from '../../Images/PerfilCompletoImg/estrelas.png';
import seta from '../../Images/PerfilCompletoImg/seta-direita.png';
import seta2 from '../../Images/PerfilCompletoImg/seta-esquerda.png';
import calendario from '../../Images/PerfilCompletoImg/calendario.png';
import cartaoImg from '../../Images/PerfilCompletoImg/cartao.png';
import styles from './Perfil_completo.module.css';

function Perfil_Completo(props) {
    const { crm, nome, especialidade, valorSessao, duracaoSessao, sobre, estudos } = props;

    const comentarios = [
        {
            id: 1, 
            nome: 'Beatriz',
            data: '10/01/2024',
            texto: 'Adorei a consulta, ela foi super gentil e me fez me sentir acolhida, ouvida. Quero continuar o atendimento com ela. E melhorar muito mais com a orientação dela.',
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
    const [modalAberto, setModalAberto] = useState(false);
    const [metodoPagamento, setMetodoPagamento] = useState('');

    const proximoComentario = () => {
        setComentarioAtual((comentarioAtual + 1) % comentarios.length);
    };

    const comentarioAnterior = () => {
        const novoIndice = comentarioAtual === 0 ? comentarios.length - 1 : comentarioAtual - 1;
        setComentarioAtual(novoIndice);
    };

    const abrirModal = () => {
        setModalAberto(true);
    };

    const fecharModal = () => {
        setModalAberto(false);
    };

    const  handleMetodoPagamento = (metodo) => {
        setMetodoPagamento(metodo);
    };

    const comentario = comentarios[comentarioAtual];

    return (
        <section className={styles.sectionPerfilcompleto}>
            <div className={styles.perfil}>
                <div className={styles.guia}>
                    <Link to={"/EncontrePsico"}><span>
                        <a href="#">especialistas</a></span>
                    </Link>
                    <img src={seta} alt="Seta" />
                    <span><a href="#">perfil especialista</a></span>
                </div>

                <div className={styles.containerDivPerfil}>
                    <div className={styles.leftDivPerfil}>
                        <img src={foto} alt="Foto da Psicologa" />
                        <span>Psicologa: {nome}</span>
                        <span>CRM: {crm}</span>
                    </div>
                    <div className={styles.midDivPerfil}>
                        <span>{especialidade}</span>
                        <p>Valor Sessão: <span>{valorSessao}</span></p>
                        <span>Duração da Sessão: {duracaoSessao}</span>
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
                        <p>{sobre}</p>
                    </div>
                    <div>
                        <h4>Estudos</h4>
                        <p>{estudos}</p>
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
                    <button className={styles.botaoSobre} onClick={abrirModal}>Agendar Consulta</button>
                </div>
            </div>
            {modalAberto && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalGuia}>
                            <Link to={"/EncontrePsico"}><span>
                                <a href="#">especialistas</a></span>
                            </Link>
                            <img src={seta} alt="Seta" />
                            <span><a href="#">perfil especialista</a></span>
                        </div>

                        <div className={styles.modalPrincipal}>
                            <div className={styles.modalEsquerda}>
                                <div className={styles.modalCaixa}>
                                    <h3>Resumo da Sessão</h3>
                                    <p>Dados da sessão</p>
                                    <span>Data: 20/05/2024</span>
                                    <span>Horário: 16h30</span>
                                    <p>Profissional</p>
                                    <span>Nome: Dafny</span>
                                    <span>Especialidade: Psico-Oncologia</span>
                                    <p>Total a pagar: R$150</p>
                                </div>
                                <div className={styles.modalConfirmar}>
                                    <input type="checkbox" name="" className={styles.Checkbox} />
                                    <p>Li e concordo com os Termos e Condições e Política de Privacidade</p>
                                </div>
                                <button onClick={fecharModal}>Finalizar pagamento</button>
                            </div>
                            <div className={styles.modalDireita}>
                                <h3>Insira as informações de pagamento</h3>
                                <p>Escolha o método de pagamento</p>
                                <div className={styles.cartoesEscolha}>
                                <div>
                                        <img src={cartaoImg} alt="" />
                                        <button
                                            className={`${styles.botaoMetodo} ${metodoPagamento === 'Cartão' ? styles.botaoMetodoSelecionado : ''}`}
                                            onClick={() => handleMetodoPagamento('Cartão')}
                                        >
                                            Cartão
                                        </button>
                                    </div>
                                    <div>
                                        <img src={cartaoImg} alt="" />
                                        <button
                                            className={`${styles.botaoMetodo} ${metodoPagamento === 'Débito' ? styles.botaoMetodoSelecionado : ''}`}
                                            onClick={() => handleMetodoPagamento('Débito')}
                                        >
                                            Débito
                                        </button>
                                    </div>
                                    <div>
                                        <img src={cartaoImg} alt="" />
                                        <button
                                            className={`${styles.botaoMetodo} ${metodoPagamento === 'Pix' ? styles.botaoMetodoSelecionado : ''}`}
                                            onClick={() => handleMetodoPagamento('Pix')}
                                        >
                                            Pix
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.cartoesDiv}>
                                        <div className={styles.cartoesInfo}>
                                            <img src={cartaoImg} alt="cartao" />
                                            <p>Cartões cadastrados</p>
                                        </div>
                                        <div className={styles.cartoesInfo}>
                                            <div className={styles.cartoesCampo}>
                                                <div className={styles.cartoesBanco}>
                                                    <input type="checkbox" name="" id="" />
                                                    <p>Banco</p>
                                                </div>
                                                <div className={styles.cartoesBanco}>
                                                    <img src={cartaoImg} alt="foto cartao" />
                                                    <span>Nubank</span>
                                                </div>
                                            </div>
                                            <div className={styles.cartoesCampo}>
                                                <p>Número do Cartão</p>
                                                <span>5109 0523 5923 7883</span>
                                            </div>
                                            <div className={styles.cartoesCampo}>
                                                <p>Nome do Titular</p>
                                                <span>Beatriz Pequeno</span>
                                            </div>
                                            <div className={styles.cartoesCampo}>
                                                <p>Data de Validade</p>
                                                <span>12/34</span>
                                            </div>
                                        </div>
                                        <div className={styles.cartoesInfo}>
                                            <div className={styles.cartoesCampo}>
                                                <div className={styles.cartoesBanco}>
                                                    <input type="checkbox" name="" id="" />
                                                    <p>Banco</p>
                                                </div>
                                                <div className={styles.cartoesBanco}>
                                                    <img src={cartaoImg} alt="foto cartao" />
                                                    <span>Nubank</span>
                                                </div>
                                            </div>
                                            <div className={styles.cartoesCampo}>
                                                <p>Número do Cartão</p>
                                                <span>5109 0523 5923 7883</span>
                                            </div>
                                            <div className={styles.cartoesCampo}>
                                                <p>Nome do Titular</p>
                                                <span>Beatriz Pequeno</span>
                                            </div>
                                            <div className={styles.cartoesCampo}>
                                                <p>Data de Validade</p>
                                                <span>12/34</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className={styles.modalRegistrar}>
                                    <div className={styles.modalSemCartao}>
                                        <input type="checkbox" name="" />
                                        <p>Pague sem cadastrar cartão</p>
                                    </div>
                                    <div className={styles.modalRegistrarInfo}>
                                        <div className={styles.modalRegistrarCaixa}>
                                            <div className={styles.modalRegistrarTexto}>
                                                <span>Número do cartão</span>
                                                <p>Insira o número com até 16 dígitos</p>
                                            </div>
                                            <div className={styles.modalRegistrarInput}>
                                                <img src={cartaoImg} alt="" />
                                                <input type="number" />
                                            </div>
                                        </div>
                                        <div className={styles.modalRegistrarCaixa}>
                                            <div className={styles.modalRegistrarTexto}>
                                                <span>Nome titular</span>
                                                <p>Insira o nome impresso no cartão</p>
                                            </div>
                                            <div className={styles.modalRegistrarInput}>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className={styles.modalRegistrarCaixa}>
                                            <div className={styles.modalRegistrarTexto}>
                                                <span>Data / CVV</span>
                                                <p>Insira a data de validade e o CVV</p>
                                            </div>
                                            <div className={styles.modalRegistrarInput}>
                                                <input type="text" placeholder="MM/AA" className={styles.dataInput} />
                                            </div>
                                            <div className={styles.modalRegistrarInput}>
                                                <input type="CVV" placeholder="CVV" className={styles.cvvInput} />
                                            </div>
                                        </div>
                                        <div className={styles.modalRegistrarCaixa}>
                                            <div className={styles.modalRegistrarTexto}>
                                                <span>Documento titular</span>
                                                <p>Insira o CPF ou CNPJ</p>
                                            </div>
                                            <div className={styles.modalRegistrarInput}>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

Perfil_Completo.propTypes = {
    crm: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    especialidade: PropTypes.string.isRequired,
    valorSessao: PropTypes.string.isRequired,
    duracaoSessao: PropTypes.string.isRequired,
    sobre: PropTypes.string.isRequired,
    estudos: PropTypes.string.isRequired,
};

export default Perfil_Completo;
