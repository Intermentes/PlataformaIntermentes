import Perfil_Completo from './Perfil_completo.jsx';
import Header from '../../Componentes/UsuarioLogado/PacienteHeaderFooter/HeaderPaciente';
import Footer from '../../Componentes/UsuarioLogado/PacienteHeaderFooter/FooterPaciente';


function PerfilCompleto() {
  return (
    <main>
        <Header />
        <Perfil_Completo/>
        <Footer />
    </main>
  );
}

export default PerfilCompleto;