import Styles from "./AlgumasFuncionalidades.Module.css";
import Fundo from "../../Images/HomeImg/algumasfuncionalidades.png";

function AlgumasFuncionalidades() {
  return (
    <section className={Styles.FundoAlgumasFun}> {/* Usando as classes do CSS Module */}
      <h2>
        Cuidando da saúde com a <span>Intermentes</span>
      </h2>
      <div className={Styles.ConteudoAlgumasFun}> {/* Usando as classes do CSS Module */}
        <img
          src={Fundo}
          alt="Imagem com algumas funcionalidades da Intermentes"
        />
      </div>
    </section>
  );
}

export default AlgumasFuncionalidades;