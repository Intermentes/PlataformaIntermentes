import React from 'react';
import styled from 'styled-components';
import Setinha from './Setinha.svg';

const ScrollButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.5s;

  &:hover {
    transform: scale(0.9);
  }
`;

const SetinhaVolta = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollButton onClick={scrollToTop}>
      <img src={Setinha} alt="Voltar ao topo" width="60" height="60" />
    </ScrollButton>
  );
};

export default SetinhaVolta;
