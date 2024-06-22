import React, { useEffect } from 'react';

const UserWayWidget = () => {
  useEffect(() => {
    // Cria o elemento script
    const script = document.createElement('script');
    script.src = 'https://cdn.userway.org/widget.js';
    script.setAttribute('data-account', 'YpH6Patkrn');
    script.async = true;

    // Adiciona o script ao body
    document.body.appendChild(script);

    // Função para ajustar o estilo do widget
    const adjustWidgetStyle = () => {
      const widget = document.getElementById('userwayAccessibilityWidget');
      if (widget) {
        widget.style.bottom = '0px'; // Ajuste a distância do rodapé conforme necessário
        widget.style.top = 'auto'; // Certifique-se de que a propriedade top esteja desativada
      }
    };

    // Aguardar um tempo para garantir que o widget foi carregado
    setTimeout(adjustWidgetStyle, 3000); // 3 segundos, ajuste conforme necessário

    return () => {
      // Remove o script ao desmontar o componente
      document.body.removeChild(script);
    };
  }, []);

  return null; // Este componente não renderiza nada visível
};

export default UserWayWidget;