import CorpoPagina from "./CorpoPagina";
import Header from '../../Componentes/UsuarioLogado/PacienteHeaderFooter/HeaderPaciente';
import Footer from '../../Componentes/UsuarioLogado/PacienteHeaderFooter/FooterPaciente';

function EncontrePsico() {
  return (
    <main>
      <Header />
      <CorpoPagina />
      <Footer />
    </main>
  );
}

export default EncontrePsico;
