import React, { Component } from "react";
import Especialistas from '../../Componentes/Carrosel/Carrosel.jsx';
import Depoimentos from '../../Componentes/Carrosel/Depoimentos';
import AlgumasFuncionalidades from "./AlgumasFuncionalidades.jsx";
import ComoFunciona from "./ComoFunciona.jsx";
import Cabecalho from "./Cabecalho.jsx"; // Corrigido nome do componente
import Duvidas from './Duvidas.jsx';

export default class Home extends Component {
  render() {
    return (
      <>
        <Cabecalho /> {/* Usando o componente corretamente */}
        <AlgumasFuncionalidades />
        <ComoFunciona />
        <Especialistas />
        <Depoimentos />
        <Duvidas />
      </>
    );
  }
}
