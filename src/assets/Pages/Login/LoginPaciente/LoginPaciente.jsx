import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './LoginPaciente.module.css';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function LoginPaciente() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const navigate = useNavigate();

    const validateForm = () => {
        if (!formData.email || !formData.password) {
            setError('Todos os campos são obrigatórios.');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
            const loginResponse = await axios.post('http://localhost:8080/auth/login', {
                email: formData.email,
                password: formData.password
            });

            console.log('Login realizado com sucesso!', loginResponse.data);
            const token = loginResponse.data.token;
            const userId = loginResponse.data.id;

            // Armazenar o token e o ID no localStorage
            localStorage.setItem('token', token);
            localStorage.setItem('userId', userId);

            // Redirecionar para a página HomePaciente
            navigate('/HomePaciente');
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            if (error.response && error.response.status === 401) {
                setError('Email ou senha incorretos.');
            } else {
                setError('Ocorreu um erro. Usuário ou senha inválidos.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.form 
            onSubmit={handleSubmit} 
            className={style.LoginForm}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
        >
            <h2 className={style.titlePaciente}>InterMentes</h2>
            <div className={style.dadosLogin}>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Digite seu E-mail" 
                        className={style.inputAcesso} 
                        value={formData.email}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-invalid={!!error}
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <input 
                        type="password" 
                        name="password"
                        placeholder="Digite sua Senha" 
                        className={style.inputAcesso} 
                        value={formData.password}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-invalid={!!error}
                    />
                </motion.div>
            </div>
            {error && <p className={style.errorMessage} id='error'>{error}</p>}
            <input 
                type="submit" 
                value={loading ? 'Entrando...' : 'Login'} 
                className={style.inputSubmit} 
                disabled={loading}
            />
        </motion.form>
    );
}
