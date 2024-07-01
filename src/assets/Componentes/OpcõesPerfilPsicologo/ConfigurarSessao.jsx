import React, { useState } from 'react';
import styles from './ConfigurarSessao.module.css';

const SessionConfigurator = () => {
    const [sessionType, setSessionType] = useState('Sessão comum');
    const [sessionValue, setSessionValue] = useState(0);
    const [sessionTime, setSessionTime] = useState(50);
    const [selectedTimes, setSelectedTimes] = useState([]);
    const [showConfiguredModal, setShowConfiguredModal] = useState(false);

    const handleTimeClick = (time) => {
      setSelectedTimes(prev =>
        prev.includes(time) ? prev.filter(t => t !== time) : [...prev, time]
      );
    };

    const handleSessionTypeChange = (e) => {
      setSessionType(e.target.value);
    };

    const handleSave = () => {
      // Logic to save session configuration can be added here.
      setShowConfiguredModal(true);
    };

    const handleCloseConfiguredModal = () => {
      setShowConfiguredModal(false);
    };

    return (
      <div className={styles.container}>
        <h1>Configure o valor da sua sessão aqui!</h1>
        <div className={styles.configurator}>
          <select value={sessionType} onChange={handleSessionTypeChange}>
            <option value="Sessão comum">Sessão comum</option>
            <option value="Sessão Beneficente">Sessão Beneficente</option>
          </select>

          {sessionType === 'Sessão Beneficente' ? (
            <p>Total de pontos que serão obtidos nesta sessão:</p>
          ) : (
            <div className={styles.inputGroup}>
              <label>Valor da consulta</label>
              <input
                type="number"
                value={sessionValue}
                onChange={(e) => setSessionValue(e.target.value)}
                min="0"
                max="350"
              />
              <span>máximo R$350</span>
            </div>
          )}
          <div className={styles.inputGroup}>
            <label>Tempo da Sessão</label>
            <input
              type="number"
              value={sessionTime}
              onChange={(e) => setSessionTime(e.target.value)}
              min="30"
            />
            <span>mínimo 30min</span>
          </div>
          {sessionType === 'Sessão Beneficente' && (
            <p className={styles.points}>0000 Pontos</p>
          )}
        </div>
        <div className={styles.schedule}>
          <h2>Horário para agendamento</h2>
          <p>selecione o dia que deseja:</p>
          <div className={styles.timeGrid}>
            {['seg', 'ter', 'qua', 'qui', 'sex', 'sáb'].map((day) => (
              <div key={day} className={styles.dayColumn}>
                {['07:30', '11:30', '15:30', '19:30'].map((time) => (
                  <button
                    key={`${day}-${time}`}
                    className={`${styles.timeButton} ${selectedTimes.includes(`${day}-${time}`) ? styles.selected : ''}`}
                    onClick={() => handleTimeClick(`${day}-${time}`)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
        <button className={styles.saveButton} onClick={handleSave}>Salvar</button>

        {showConfiguredModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <p>Sessão configurada</p>
              <button className={styles.actionButton} onClick={handleCloseConfiguredModal}>OK</button>
            </div>
          </div>
        )}
      </div>
    );
  };

  export default SessionConfigurator;
