import Cabecalho_Blog from './Cabecalho_blog.jsx';
import Blog_Sec from './Blog_sec.jsx';
import Header from '../../Componentes/UsuarioLogado/PacienteHeaderFooter/HeaderPaciente';
import Footer from '../../Componentes/UsuarioLogado/PacienteHeaderFooter/FooterPaciente';
import { Outlet, Link } from 'react-router-dom';

function Blog() {
  return (
    <main>
        <Header />
        <Cabecalho_Blog />
        <Blog_Sec />
        <Outlet />
        <Footer />
    </main>
  );
}

export default Blog;