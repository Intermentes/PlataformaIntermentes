import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './LoginEspecialista.module.css';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function LoginEspecialista() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

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
            const loginResponse = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
                email: formData.email,
                password: formData.password
            }, {
                headers: {
                    'ngrok-skip-browser-warning': 'true'
                }
            });

            console.log('Login realizado com sucesso!', loginResponse.data);
            const token = loginResponse.data.token;
            const userId = loginResponse.data.id;

            // Armazenar o token e o ID no localStorage
            localStorage.setItem('token', token);
            localStorage.setItem('userId', userId);

            // Fazer a requisição para obter os dados do especialista
            const userResponse = await axios.get(`${import.meta.env.VITE_API_URL}/auth/user/${userId}`, {
                headers: { 
                    'ngrok-skip-browser-warning': 'true',
                    Authorization: `Bearer ${token}` 
                }
            });

            const userName = userResponse.data.name;
            localStorage.setItem('userName', userName); // Armazena o nome no localStorage

            // Redirecionar para a página HomeEspecialista
            navigate('/HomeEspecialista');
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            if (error.response && error.response.status === 401) {
                setError('Email ou senha incorretos.');
            } else {
                setError('Ocorreu um erro ao fazer login. Por favor, tente novamente.');
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
            <h2 className={style.titleEspecialista}>OfficeMentes</h2>
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
            {error && <p className={style.errorMessage}>{error}</p>}
            <input
                type="submit"
                value={loading ? 'Entrando...' : 'Login'}
                className={style.inputSubmit}
                disabled={loading}
            />
        </motion.form>
    );
}
