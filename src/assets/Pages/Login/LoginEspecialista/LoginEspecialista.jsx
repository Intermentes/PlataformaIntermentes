import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
      // Simulação de login para exemplo, deve ser ajustado conforme a lógica de autenticação da sua aplicação
      // Aqui estou usando apenas um redirecionamento para a página HomeEspecialista
      navigate('/HomeEspecialista');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Ocorreu um erro ao fazer login. Por favor, tente novamente.');
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
