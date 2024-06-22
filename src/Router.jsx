import Agendamentos from './assets/Componentes/OpçõesPerfil/textAgendamentos.jsx';
import { Routes, Route } from "react-router-dom";
import PsicologiaGratuita from "./assets/Pages/PsicologiaGratuita/PsicologiaGratuita";
import Login from "./assets/Pages/Login/Login";
import Especialista from "./assets/Pages/Especialista/Especialista";
import Home from "./assets/Pages/Home/Home";
import Blog from "./assets/Pages/Blog/Blog";
import Blog_P1 from "./assets/Pages/Blog/Blog_p1.jsx";
import Blog_P2 from "./assets/Pages/Blog/Blog_p2.jsx";
import Blog_P3 from "./assets/Pages/Blog/Blog_p3.jsx";
import Blog_P4 from "./assets/Pages/Blog/Blog_p4.jsx";
import SobreNos from "./assets/Pages/SobreNos/SobreNos.jsx";
import EncontrePsico from "./assets/Pages/AgendeConsulta/EncontrePsico.jsx";
import PerfilCompleto from "./assets/Pages/PerfilCompleto/Perfil_completo.jsx"
import Perfil from "./assets/Pages/PacienteLogado/PerfilPaciente/Perfil.jsx";
import MeioPagamento from './assets/Componentes/OpçõesPerfil/MeioPagamento.jsx';
import PainelInicial from './assets/Componentes/OpçõesPerfil/PainelInicial.jsx';
import DadosPessoais from './assets/Componentes/OpçõesPerfil/DadosPessoais.jsx';
import HomeEspecialista from './assets/Pages/Especialista/EspecialistaLogado/EspecialistaLogado.jsx';
import HomePaciente from './assets/Pages/PacienteLogado/HomePaciente/HomePaciente.jsx';
import LoginPaciente from './assets/Pages/Login/LoginPaciente/LoginPaciente.jsx';
import LoginEspecialista from './assets/Pages/Login/LoginEspecialista/LoginEspecialista.jsx';
import PerfilPsicologo from "./assets/Pages/Especialista/EspecialistaLogado/PerfilPsicologo/PerfilPsicologo.jsx";
import PainelPsicologo from './assets/Componentes/OpcõesPerfilPsicologo/PainelPsicologo.jsx';
import PainelFinanceiro from './assets/Componentes/OpcõesPerfilPsicologo/PainelFinanceiro.jsx';
import AgendamentosPsicologo from './assets/Componentes/OpcõesPerfilPsicologo/textAgendamentosPsicologo.jsx';
import DadosPessoaisPsicologo from './assets/Componentes/OpcõesPerfilPsicologo/DadosPessoaisPsicologo.jsx';
import PerfilVizualizacao from './assets/Componentes/OpcõesPerfilPsicologo/PerfilVizualizacao.jsx';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Especialista" element={<Especialista />} />
      <Route path="/PsicologiaGratuita" element={<PsicologiaGratuita />} />
      <Route path="/PerfilCompleto" element={<PerfilCompleto />} />

      {/* Rotas dentro do Blog */}
      <Route path="/Blog" element={<Blog />} >
        <Route path="Podcast" element={<Blog_P1 />} />
        <Route path="Meditação" element={<Blog_P2 />} />
        <Route path="Artigos" element={<Blog_P3 />} />
        <Route path="Recomendações" element={<Blog_P4 />} />
      </Route>

      <Route path="/EncontrePsico" element={<EncontrePsico />} />
      <Route path="/SobreNos" element={<SobreNos />} />

      {/* Rotas dentro do perfil do usuário */}
      <Route path="/Perfil" element={<Perfil />}>
        <Route path="PainelInicial" element={<PainelInicial />} />
        <Route path="DadosPessoais" element={<DadosPessoais />} />
        <Route path="Agendamentos" element={<Agendamentos />} />
        <Route path="MeioPagamento" element={<MeioPagamento />} />
      </Route>

      {/* Rotas dentro do perfil do usuário */}
      <Route path="/PerfilPsicologo" element={<PerfilPsicologo />}>
        <Route path="PainelPsicologo" element={<PainelPsicologo />} />
        <Route path="DadosPessoaisPsicologo" element={<DadosPessoaisPsicologo />} />
        <Route path="PerfilVizualizacao" element={<PerfilVizualizacao />} />
        <Route path="AgendamentosPsicologo" element={<AgendamentosPsicologo />} />
        <Route path="PainelFinanceiro" element={<PainelFinanceiro/>} />
      </Route>

      {/* Rotas do login do usuário e psicologo */}
      <Route path="/Login" element={<Login />}>
        <Route path="" element={<LoginPaciente />} />
        <Route path="Especialista" element={<LoginEspecialista />} />
      </Route>

      <Route path="/HomePaciente" element={<HomePaciente />} />
      <Route path="/HomeEspecialista" element={<HomeEspecialista />} />
    </Routes>
  );
}
