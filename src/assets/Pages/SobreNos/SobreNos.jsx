import Valores from "./Valores.jsx";
import Devs from "./Desenvolvedores.jsx";
import Acesso from './Acesso_Psicologia.jsx';
import Header from "../../Componentes/Header/Header"
import Footer from "../../Componentes/Footer/Footer"

function SobreNos() {
  return (
    <main>
      <Header/>
      <Acesso />
      <Valores />
      <Devs />
      <Footer/>
    </main>
  );
}

export default SobreNos;
