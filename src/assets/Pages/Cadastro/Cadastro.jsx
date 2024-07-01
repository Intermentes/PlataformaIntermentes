import React, { useState } from 'react';
import styles from './Cadastro.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

const Cadastro = () => {
    const [userType, setUserType] = useState('paciente');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        birthDate: '',
        gender: '',
        ethnicity: '',
        phone: '',
        cpf: '',
        crp: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const formatDate = (date) => {
        const [year, month, day] = date.split('-');
        return `${day}/${month}/${year}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataToSubmit = {
            ...formData,
            birthDate: formatDate(formData.birthDate),
            crp: userType === 'paciente' ? null : formData.crp // Envia null se for paciente
        };

        try {
            const response = await axios.post('http://localhost:8080/auth/sign-up', dataToSubmit, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Cadastro realizado com sucesso!', response.data);
            navigate('/Login');
        } catch (error) {
            console.error('Erro ao cadastrar:', error.response ? error.response.data : error.message);
        }
    };

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
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
                    <input className={styles.input} type="text" name="name" value={formData.name} onChange={handleChange} required />

                    <label className={styles.label}>Etnia</label>
                    <select className={styles.select} name="ethnicity" value={formData.ethnicity} onChange={handleChange} required>
                        <option value="">Selecione</option>
                        <option value="BLACK">Negro</option>
                        <option value="WHITE">Branco</option>
                        <option value="BROWN">Pardo</option>
                        <option value="YELLOW">Amarelo</option>
                        <option value="INDIGENOUS">Indígena</option>
                    </select>

                    <label className={styles.label}>Gênero</label>
                    <select className={styles.select} name="gender" value={formData.gender} onChange={handleChange} required>
                        <option value="">Selecione</option>
                        <option value="MALE">Masculino</option>
                        <option value="FEMALE">Feminino</option>
                        <option value="TRANS_FEMALE">Mulher trans</option>
                        <option value="TRANS_MALE">Homem trans</option>
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
                    <input className={styles.input} type="text" name="phone" value={formData.phone} onChange={handleChange} required />

                    <label className={styles.label}>Data de Nascimento</label>
                    <input className={styles.input} type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required />

                    <label className={styles.label}>Email</label>
                    <input className={styles.input} type="email" name="email" value={formData.email} onChange={handleChange} required />

                    <label className={styles.label}>Senha</label>
                    <input className={styles.input} type="password" name="password" value={formData.password} onChange={handleChange} required />

                    {/* <label className={styles.label}>Confirmar Senha</label>
                    <input className={styles.input} type="password" name="confirmarSenha" value={formData.confirmarSenha} onChange={handleChange} required /> */}

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
