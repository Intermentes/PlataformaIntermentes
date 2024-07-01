import "./MenuParceiros.css";
import Props from "./PropParceiros.jsx";
import LogoPaces from "../../Images/ParceiriasImg/PACES.png";
import LogoCalmoMilla from "../../Images/ParceiriasImg/CalmoMilla.png";
import Header from '../../Componentes/Header/Header.jsx';

function MenuParceiros() {
  return (
    <>
    <Header/>
    <section>
      <h2 id="ParceirosTitulo1">Parceiros</h2>
      <section id="ParceirosBotoes">
        <Props
          Logo={LogoPaces}
          Parceiro="Paces"
          Parceria={'/Paces'}
        />
        <Props 
         Logo={LogoCalmoMilla}
         Parceiro="CalmoMilla" 
         Parceria={'/CalmoMilla'}
         />
      </section>
    </section>
    </>
  );
}

export default MenuParceiros;
