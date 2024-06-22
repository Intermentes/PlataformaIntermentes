import "./PropParceiros.css";
import { Link } from "react-router-dom";

function PropParceiros({ Parceiro, Logo, Parceria }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };
  return (
    <div id="DivParceiros">
      <div id="LogoParceiro">
        <img src={Logo} alt="Logo" />
      </div>
      <h4>
        {Parceiro} e&nbsp;<span>Intermentes</span>
      </h4>
      <div id="SaibaMais">
        <Link to={Parceria} onClick={scrollToTop}>
          Saiba mais
        </Link>
      </div>
    </div>
  );
}

export default PropParceiros;
