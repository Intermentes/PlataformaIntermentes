import React, { useState } from 'react';
import Styles from './CadastroForm.module.css';

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
                    value={form.genero}
                    onChange={handleChange}
                    placeholder="Gênero"
                    required
                />
                <input
                    type="text"
                    name="etnia"
                    value={form.etnia}
                    onChange={handleChange}
                    placeholder="Etnia"
                    required
                />
            </div>
            <div className={Styles.FormGroup}>
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
            <div className={Styles.Termos}>
                <input
                    type="checkbox"
                    name="termos"
                    checked={form.termos}
                    onChange={handleChange}
                    required
                />
                <label>
                    Li e concordo com os Termos & Condições e Política de Privacidade
                </label>
            </div>
            <div>
                
            </div>
            <button type="submit" className={Styles.SubmitButton}>Cadastrar-se</button>
        </form>
    );
};

export default CadastroForm;
