import React from 'react';
import style from './ModalSenha.module.css'; // Adicione estilos para o modal

const ModalCancelarSessao = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={style.modalOverlay}>
      <div className={style.modal}>
        <button className={style.closeButton} onClick={onClose}>X</button>
        <div className={style.modalContent}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalCancelarSessao;