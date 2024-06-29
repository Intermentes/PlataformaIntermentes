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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/auth/login', {
                email: formData.email,
                password: formData.password
            });

            console.log('Login realizado com sucesso!', response.data);
            // Armazene o nome do usuário no localStorage
            localStorage.setItem('userName', response.data.name);
            // Redirecionar para a página HomePaciente
            navigate('/HomePaciente');
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            // Tratar erros de forma adequada, como exibir uma mensagem para o usuário
        }
    };

    return (
        <motion.form onSubmit={handleSubmit} className={style.LoginForm}
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
                        type="text" 
                        name="email"
                        placeholder="Digite seu E-mail" 
                        className={style.inputAcesso} 
                        value={formData.email}
                        onChange={handleChange}
                        required
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
                    />
                </motion.div>
            </div>
            <input type="submit" value="Login" className={style.inputSubmit} />
        </motion.form>
    );
}
