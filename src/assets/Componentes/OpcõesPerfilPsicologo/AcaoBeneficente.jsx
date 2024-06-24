import React, { useState } from 'react';
import styles from './Benefits.module.css';

const Benefits = () => {
  const [showNotEnoughPointsModal, setShowNotEnoughPointsModal] = useState(false);
  const [showLevelUpModal, setShowLevelUpModal] = useState(false);

  const handleShowNotEnoughPointsModal = () => setShowNotEnoughPointsModal(true);
  const handleCloseNotEnoughPointsModal = () => setShowNotEnoughPointsModal(false);

  const handleShowLevelUpModal = () => setShowLevelUpModal(true);
  const handleCloseLevelUpModal = () => setShowLevelUpModal(false);

  return (
    <div className={styles.container}>
      <h1>Beneficios</h1>
      <section className={styles.pointsSection}>
        <h2>Seus pontos</h2>
        <div className={styles.card}>
          <h3>Ações beneficentes</h3>
          <p>Visibilidade Baixa</p>
          <div className={styles.level}>
            <span>Nível 1</span>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '34%' }}></div>
            </div>
            <span>34%</span>
          </div>
        </div>
        <p>Aumente seus pontos com consultas gratuitas</p>
        <div className={styles.card}>
          <h3>Seus Pontos</h3>
          <div className={styles.level}>
            <span>Nível 1</span>
            <button className={styles.upgradeButton} onClick={handleShowNotEnoughPointsModal}>
              Subir de nível
            </button>
            <span>3 Consultas realizadas</span>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '34%' }}></div>
            </div>
            <span>34%</span>
          </div>
        </div>
      </section>
      
      {/* Modals */}
      {showNotEnoughPointsModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p>Você não tem pontos suficientes. Realize mais sessões para subir de nível.</p>
            <button className={styles.actionButton} onClick={handleCloseNotEnoughPointsModal}>Realizar sessão</button>
            <button className={styles.actionButton} onClick={handleCloseNotEnoughPointsModal}>Voltar</button>
          </div>
        </div>
      )}

      {showLevelUpModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p>Parabéns! Você subiu para o nível 2 de visibilidade.</p>
            <button className={styles.actionButton} onClick={handleCloseLevelUpModal}>Voltar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Benefits;