import Agendamentos from './assets/Componentes/OpçõesPerfil/textAgendamentos.jsx';
import { Routes, Route } from "react-router-dom";
import PsicologiaGratuita from "./assets/Pages/PsicologiaGratuita/PsicologiaGratuita";
import PsicologiaGratuitaPsicologo from "./assets/Pages/PsicologiaGratuita/PsicologiaGratuitaPsicologo";
import Login from "./assets/Pages/Login/Login";
import Cadastro from "./assets/Pages/Cadastro/Cadastro.jsx"
import Especialista from "./assets/Pages/Especialista/Especialista";
import Home from "./assets/Pages/Home/Home";
import Blog from "./assets/Pages/Blog/Blog";
import BlogPsicologo from "./assets/Pages/Blog/BlogPsicologo.jsx";
import Blog_P1 from "./assets/Pages/Blog/Blog_p1.jsx";
import Blog_P2 from "./assets/Pages/Blog/Blog_p2.jsx";
import Blog_P3 from "./assets/Pages/Blog/Blog_p3.jsx";
import Blog_P4 from "./assets/Pages/Blog/Blog_p4.jsx";
import SobreNos from "./assets/Pages/SobreNos/SobreNos.jsx";
import SobreNosPaciente from "./assets/Pages/SobreNos/SobreNosPaciente.jsx";
import SobreNosPsicologo from "./assets/Pages/SobreNos/SobreNosPsicologo.jsx";
import EncontrePsico from "./assets/Pages/AgendeConsulta/EncontrePsico.jsx";
import PerfilCompleto from "./assets/Pages/PerfilCompleto/PerfilCompleto.jsx"
import Perfil from "./assets/Pages/PacienteLogado/PerfilPaciente/Perfil.jsx";
import MeioPagamento from './assets/Componentes/OpçõesPerfil/MeioPagamento.jsx';
import PainelInicial from './assets/Componentes/OpçõesPerfil/PainelInicial.jsx';
import DadosPessoais from './assets/Componentes/OpçõesPerfil/DadosPessoais.jsx';
import Reembolso from './assets/Componentes/OpçõesPerfil/Reembolso.jsx'
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
import Parceria from './assets/Pages/Parceiros/Parceiros.jsx'
import ParceriaPaciente from './assets/Pages/Parceiros/ParceirosPaciente.jsx'
import ParceriaPsicologo from './assets/Pages/Parceiros/ParceirosPsicologo.jsx'
import ConfigurarSessao from './assets/Componentes/OpcõesPerfilPsicologo/ConfigurarSessao.jsx';
import AcaoBeneficente from './assets/Componentes/OpcõesPerfilPsicologo/AcaoBeneficente.jsx';
import VizualizacaoCompleto from './assets/Componentes/OpcõesPerfilPsicologo/VizualizacaoCompleto.jsx';
import CalmoMilla from './assets/Pages/Parceiros/CalmoMilla.jsx';
import Paces from './assets/Pages/Parceiros/Paces.jsx';
import CalmoMillaPsicologo from './assets/Pages/Parceiros/CalmoMillaPsicologo.jsx';
import PacesPsicologo from './assets/Pages/Parceiros/PacesPsicologo.jsx';
import CalmoMillaPaciente from './assets/Pages/Parceiros/CalmoMillaPaciente.jsx';
import PacesPaciente from './assets/Pages/Parceiros/PacesPaciente.jsx';
import MenuParceiros from './assets/Pages/Parceiros/MenuParceiros.jsx';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Especialista" element={<Especialista />} />
      <Route path="/PsicologiaGratuitaPsicologo" element={<PsicologiaGratuitaPsicologo />} />
      <Route path="/PsicologiaGratuita" element={<PsicologiaGratuita />} />
      <Route path="/PerfilCompleto" element={<PerfilCompleto />} />
      <Route path="/Parceria" element={<Parceria />} />
      <Route path="/ParceriaPaciente" element={<ParceriaPaciente />} />
      <Route path="/ParceriaPsicologo" element={<ParceriaPsicologo />} />
      <Route path="/" exact component={MenuParceiros} />
      <Route path='/CalmoMilla' element={<CalmoMilla/>}/>
      <Route path='/Paces' element={<Paces/>}/>
      <Route path='/CalmoMillaPsicologo' element={<CalmoMillaPsicologo/>}/>
      <Route path='/PacesPsicologo' element={<PacesPsicologo/>}/>
      <Route path='/CalmoMillaPaciente' element={<CalmoMillaPaciente/>}/>
      <Route path='/PacesPaciente' element={<PacesPaciente/>}/>

      {/* Rotas dentro do Blog */}
      <Route path="/Blog" element={<Blog />} >
        <Route path="Podcast" element={<Blog_P1 />} />
        <Route path="Meditação" element={<Blog_P2 />} />
        <Route path="Artigos" element={<Blog_P3 />} />
        <Route path="Recomendações" element={<Blog_P4 />} />
      </Route>

      <Route path="/BlogPsicologo" element={<BlogPsicologo />} >
        <Route path="Podcast" element={<Blog_P1 />} />
        <Route path="Meditação" element={<Blog_P2 />} />
        <Route path="Artigos" element={<Blog_P3 />} />
        <Route path="Recomendações" element={<Blog_P4 />} />
      </Route>

      <Route path="/EncontrePsico" element={<EncontrePsico />} />
      <Route path="/SobreNos" element={<SobreNos />} />
      <Route path="/SobreNosPaciente" element={<SobreNosPaciente />} />
      <Route path="/SobreNosPsicologo" element={<SobreNosPsicologo />} />

      {/* Rotas dentro do perfil do usuário */}
      <Route path="/Perfil" element={<Perfil />}>
        <Route path="PainelInicial" element={<PainelInicial />} />
        <Route path="DadosPessoais" element={<DadosPessoais />} />
        <Route path="Agendamentos" element={<Agendamentos />} />
        <Route path="MeioPagamento" element={<MeioPagamento />} />
        <Route path='Reembolso' element={<Reembolso/>}/>
      </Route>

      {/* Rotas dentro do perfil do usuário */}
      <Route path="/PerfilPsicologo" element={<PerfilPsicologo />}>
        <Route path="PainelPsicologo" element={<PainelPsicologo />} />
        <Route path="DadosPessoaisPsicologo" element={<DadosPessoaisPsicologo />} />
        <Route path="PerfilVizualizacao" element={<PerfilVizualizacao />} />
        <Route path="AgendamentosPsicologo" element={<AgendamentosPsicologo />} />
        <Route path="PainelFinanceiro" element={<PainelFinanceiro/>} />
        <Route path='ConfigurarSessao' element={<ConfigurarSessao/>}/>
        <Route path='AcaoBeneficente' element={<AcaoBeneficente/>}/>
        <Route path='VizualizacaoCompleto' element={<VizualizacaoCompleto/>}/>
      </Route>

      {/* Rotas do login do usuário e psicologo */}
      <Route path="/Login" element={<Login />}>
        <Route path="" element={<LoginPaciente />} />
        <Route path="Especialista" element={<LoginEspecialista />} />
      </Route>

      <Route path='/Cadastro' element={<Cadastro />} />


      <Route path="/HomePaciente" element={<HomePaciente />} />
      <Route path="/HomeEspecialista" element={<HomeEspecialista />} />
    </Routes>
  );
}
