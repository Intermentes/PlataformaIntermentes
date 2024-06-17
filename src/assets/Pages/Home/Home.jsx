import Especialistas from '../../Componentes/Carrosel/Carrosel.jsx';
import Depoimentos from '../../Componentes/Carrosel/Depoimentos';
import AlgumasFuncionalidades from "./AlgumasFuncionalidades.jsx";
import ComoFunciona from "./ComoFunciona.jsx";
import Cabecalho from "./Cabecalho.jsx"; 
import Video from './Video.jsx';
import Duvidas from './Duvidas.jsx';
import Header from '../../Componentes/Header/Header.jsx';
import Footer from '../../Componentes/Footer/Footer.jsx';

export default function home() {
    return (
      <section>
        <Header />
        <Cabecalho />
        <Video/>
        <AlgumasFuncionalidades />
        <ComoFunciona />
        <Especialistas />
        <Depoimentos />
        <Duvidas />
        <Footer />
      </section>
    );
}
