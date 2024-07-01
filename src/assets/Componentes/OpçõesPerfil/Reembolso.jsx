import React from 'react';
import styles from './Reembolso.module.css';

const Formulario = () => {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <h2 className={styles.heading}>Informações Pessoais</h2>
                
                <div className={styles.formGroup}>
                    <input type="text" placeholder="Nome completo" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <input type="email" placeholder="E-mail" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <input type="tel" placeholder="Telefone" className={styles.input} />
                </div>

                <h2 className={styles.heading}>Detalhes da sessão</h2>
                
                <div className={styles.formGroup}>
                    <input type="date" placeholder="Data da sessão" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <input type="text" placeholder="Nome do terapeuta" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <select className={styles.select}>
                        <option value="">Motivo</option>
                        <option value="Sessão cancelada pelo terapeuta">Sessão cancelada pelo terapeuta</option>
                        <option value="Não poderei comparecer a sessão">Não poderei comparecer a sessão</option>
                        <option value="Problemas técnicos ">Problemas técnicos </option>
                        <option value="Outro">Outro</option>
                    </select>
                </div>

                <h2 className={styles.heading}>Detalhes do reembolso</h2>
                
                <div className={styles.formGroup}>
                    <input type="text" placeholder="Valor" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <input type="text" placeholder="Método de Reembolso" className={styles.input} />
                </div>

                <h2 className={styles.heading}>Dados bancários</h2>
                
                <div className={styles.formGroup}>
                    <input type="text" placeholder="Banco" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <input type="text" placeholder="Agência" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <select className={styles.select}>
                        <option value="">Tipo de conta</option>
                        <option value="Poupança">Poupança</option>
                        <option value="Corrente">Corrente</option>
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <input type="text" placeholder="Nome do Titular da Conta" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <input type="text" placeholder="CPF do Titular da Conta" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <input type="text" placeholder="Comprovante de pagamento" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <input type="file" className={styles.input} />
                </div>

                <div className={styles.formGroup}>
                    <label>
                        <input type="checkbox" className={styles.checkbox} />
                        Declaração: Confirmo que as informações fornecidas são completas e verdadeiras, e entendo que a falsificação de informações pode resultar em penalidades legais.
                    </label>
                </div>

                <div className={styles.buttons}>
                    <button type="button" className={styles.buttonCancel}>Cancelar</button>
                    <button type="submit" className={styles.buttonSubmit}>Enviar</button>
                </div>
            </form>
        </div>
    );
};

export default Formulario;
