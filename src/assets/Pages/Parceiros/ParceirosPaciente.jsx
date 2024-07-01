import MenuParceiros from "./MenuParceirosPaciente.jsx";
import Header from "../../Componentes/UsuarioLogado/PacienteHeaderFooter/HeaderPaciente.jsx";
import Footer from "../../Componentes/UsuarioLogado/PacienteHeaderFooter/FooterPaciente.jsx";

function Parceiros() {
  return (
    <main>
      <MenuParceiros />
      <Footer/>
    </main>
  );
}

export default Parceiros;
