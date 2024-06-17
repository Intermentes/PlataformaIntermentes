import React, { useState } from 'react';
import Styles from './CadastroForm.module.css';
import CadastroImage from '../../Images/EspecialistasImg/blob.png'

const CadastroForm = () => {
    const [form, setForm] = useState({
        nome: '',
        genero: '',
        etnia: '',
        cpf: '',
        crp: '',
        telefone: '',
        email: '',
        senha: '',
        confirmarSenha: '',
        termos: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log(form);
    };

    return (
        <form className={Styles.CadastroForm} onSubmit={handleSubmit}>
            <div className={Styles.containerForms}>
                <h2>Cadastre-se</h2>
                <div className={Styles.FormGroup}>
                    <input
                        type="text"
                        name="nome"
                        value={form.nome}
                        onChange={handleChange}
                        placeholder="Digite seu nome"
                        required
                    />
                </div>
                <div className={Styles.FormGroupInline}>
                    <input
                        type="text"
                        name="genero"
                        list='genero'
                        value={form.genero}
                        onChange={handleChange}
                        placeholder="Gênero"
                        required
                    />
                    <datalist id='genero'>
                        <option value="Homem cis"></option>
                        <option value="Mulher cis"></option>
                        <option value="Homem trans"></option>
                        <option value="Mulher trans"></option>
                    </datalist>
                    <input
                        type="text"
                        name="etnia"
                        list='etnia'
                        value={form.etnia}
                        onChange={handleChange}
                        placeholder="Etnia"
                        required
                    />
                     <datalist id='etnia'>
                        <option value="Branco"></option>
                        <option value="Negro"></option>
                        <option value="Pardo"></option>
                        <option value="Amarelo"></option>
                        <option value="Indígena"></option>
                    </datalist>
                </div>
                <div className={Styles.FormGroupInline}>
                    <input
                        type="text"
                        name="cpf"
                        value={form.cpf}
                        onChange={handleChange}
                        placeholder="CPF"
                        required
                    />
                    <input
                        type="text"
                        name="crp"
                        value={form.crp}
                        onChange={handleChange}
                        placeholder="CRP"
                        required
                    />
                </div>
                <div className={Styles.FormGroup}>
                    <input
                        type="tel"
                        name="telefone"
                        value={form.telefone}
                        onChange={handleChange}
                        placeholder="Número de celular"
                        required
                    />
                </div>
                <h3>Dados de acesso</h3>
                <div className={Styles.FormGroup}>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />
                </div>
                <div className={Styles.FormGroupInline}>
                    <input
                        type="password"
                        name="senha"
                        value={form.senha}
                        onChange={handleChange}
                        placeholder="Senha"
                        required
                    />
                    <input
                        type="password"
                        name="confirmarSenha"
                        value={form.confirmarSenha}
                        onChange={handleChange}
                        placeholder="Confirme a senha"
                        required
                    />
                </div>
            </div>
            <div className={Styles.Termos}>
                <img src={CadastroImage} alt="Cadastro" />
                <div className={Styles.ConfirmarTermos}>
                    <input
                        type="checkbox"
                        name="termos"
                        checked={form.termos}
                        onChange={handleChange}
                        required
                        id='termos'
                    />
                    <label for='termos'>
                        Li e concordo com os Termos & Condições e Política de Privacidade
                    </label>
                </div>
                <button type="submit" className={Styles.SubmitButton} >Cadastrar-se</button>
            </div>

        </form>
    );
};

export default CadastroForm;
