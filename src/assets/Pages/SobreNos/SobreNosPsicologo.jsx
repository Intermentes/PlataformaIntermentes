import Valores from "./Valores.jsx";
import Devs from "./Desenvolvedores.jsx";
import Acesso from './Acesso_Psicologia.jsx';
import Header from "../../Componentes/UsuarioLogado/EspecialistaHeaderFooter/HeaderEspecialista.jsx"
import Footer from "../../Componentes/UsuarioLogado/EspecialistaHeaderFooter/FooterEspecialista.jsx"
import ODS from '../../Images/SobreNosImg/ODS.png'
import PlanoFuturo from '../../Images/SobreNosImg/PlanoFuturo.png'
import style from './SobreNos.module.css'

function SobreNos() {
  return (
    <main>
      <Header/>
      <Acesso />
      <Valores />
      <Devs />
      <div className={style.slide}>
        <img src={ODS} alt=""/>
        <img src={PlanoFuturo} alt="" />        
      </div>

      <Footer/>
    </main>
  );
}

export default SobreNos;
