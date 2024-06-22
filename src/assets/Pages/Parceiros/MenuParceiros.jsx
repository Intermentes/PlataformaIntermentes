import "./MenuParceiros.css";
import Props from "./PropParceiros.jsx";
import LogoNutri from "../../Images/ParceiriasImg/NutriAcess.png";
import Nutri from "./NutriAcess.jsx"

function MenuParceiros() {
  return (
    <section>
      <h2 id="ParceirosTitulo1">Parceiros</h2>
      <section id="ParceirosBotoes">
        <Props
          Logo={LogoNutri}
          Parceiro="NutriAcess"
          Parceria={Nutri}
        />
        <Props Logo={LogoNutri} Parceiro="NutriAcess" />
        <Props Logo={LogoNutri} Parceiro="NutriAcess" />
      </section>
    </section>
  );
}

export default MenuParceiros;
