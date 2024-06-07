import "./AlgumasFuncionalidades.css";
import Fundo from "../../Images/HomeImg/algumasfuncionalidades.png";
function AlgumasFuncionalidades() {
  return (
    <section id="FundoAlgumasFun">
      <h2>
        Cuidando da saúde com a <span>Intermentes</span>
      </h2>
      <div id="ConteudoAlgumasFun">
        <img
          src={Fundo}
          alt="Imagem com algumas funcionalidades da Intermentes"
        />
      </div>
    </section>
  );
}
export default AlgumasFuncionalidades;
