import React, { useState } from 'react';
import styles from './Cadastro.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Cadastro = () => {
    const [userType, setUserType] = useState('paciente');
    const [formData, setFormData] = useState({
        nome: '',
        etnia: '',
        genero: '',
        cpf: '',
        celular: '',
        dataNascimento: '',
        email: '',
        senha: '',
        confirmarSenha: '',
        crp: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para envio do formulário
        console.log('Form Data Submitted:', formData);
    };

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/'); // Volta para a página anterior
    };

    return (
        <main className={styles.cadastroPage}>
            <div className={styles.container}>
                <div className={styles.btnVoltar} onClick={handleBackClick}>Voltar</div>
                <h1 className={styles.title}>Cadastro de {userType === 'paciente' ? 'Paciente' : 'Psicólogo'}</h1>
                <motion.form className={styles.form} onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}>
                    <label className={styles.label}>
                        Tipo de Usuário:
                        <select className={styles.select} name="userType" value={userType} onChange={(e) => setUserType(e.target.value)}>
                            <option value="paciente">Paciente</option>
                            <option value="psicologo">Psicólogo</option>
                        </select>
                    </label>
                    <label className={styles.label}>Nome Completo</label>
                    <input className={styles.input} type="text" name="nome" value={formData.nome} onChange={handleChange} required />

                    <label className={styles.label}>Etnia</label>
                    <select className={styles.select} name="etnia" value={formData.etnia} onChange={handleChange} required>
                        <option value="">Selecione</option>
                        <option value="Negro">Negro</option>
                        <option value="Branco">Branco</option>
                        <option value="Pardo">Pardo</option>
                        <option value="Amarelo">Amarelo</option>
                        <option value="Indígena">Indígena</option>
                    </select>

                    <label className={styles.label}>Gênero</label>
                    <select className={styles.select} name="genero" value={formData.genero} onChange={handleChange} required>
                        <option value="">Selecione</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Mulher trans">Mulher trans</option>
                        <option value="Homem trans">Homem trans</option>
                    </select>

                    <label className={styles.label}>CPF</label>
                    <input className={styles.input} type="text" name="cpf" value={formData.cpf} onChange={handleChange} required />

                    {userType === 'psicologo' && (
                        <>
                            <label className={styles.label}>CRP</label>
                            <input className={styles.input} type="text" name="crp" value={formData.crp} onChange={handleChange} required />
                        </>
                    )}

                    <label className={styles.label}>Celular</label>
                    <input className={styles.input} type="text" name="celular" value={formData.celular} onChange={handleChange} required />

                    <label className={styles.label}>Data de Nascimento</label>
                    <input className={styles.input} type="date" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} required />

                    <label className={styles.label}>Email</label>
                    <input className={styles.input} type="email" name="email" value={formData.email} onChange={handleChange} required />

                    <label className={styles.label}>Senha</label>
                    <input className={styles.input} type="password" name="senha" value={formData.senha} onChange={handleChange} required />

                    <label className={styles.label}>Confirmar Senha</label>
                    <input className={styles.input} type="password" name="confirmarSenha" value={formData.confirmarSenha} onChange={handleChange} required />

                    <button className={styles.button} type="submit">Cadastrar</button>
                </motion.form>
                <div className={styles.loginLink}>
                    Já tem conta? <Link to="/Login">Clique aqui</Link>
                </div>
            </div>
        </main>
    );
};

export default Cadastro;
