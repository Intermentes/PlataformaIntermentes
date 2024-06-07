import React, {Component} from "react"
import Especialistas from '../../Componentes/Carrosel/Carrosel.jsx'
import Depoimentos from '../../Componentes/Carrosel/Depoimentos'
import AlgumasFuncionalidades from "./AlgumasFuncionalidades.jsx";
import ComoFunciona from "./ComoFunciona.jsx";
import Acesso from './Acesso_Psicologia.jsx'
import Home from "./Cabecalho.jsx"
import Duvidas from './Duvidas.jsx'
export default class extends Component{
  render(){
    return(
      <>
      <Home/>
      <Acesso/>
      <AlgumasFuncionalidades />
      <ComoFunciona />
      <Especialistas/>
      <Depoimentos/>
      <Duvidas/>
      </>
    )
  }
}
