import Agendamentos from './assets/Componentes/OpçõesPerfil/textAgendamentos.jsx'
import { Routes, Route, RouterProvider } from "react-router-dom";
import Beneficiario from "./assets/Pages/Beneficiario/Beneficiario";
import PsicologiaGratuita from "./assets/Pages/PsicologiaGratuita/PsicologiaGratuita";
import Login from "./assets/Pages/Login/Login";
import Especialista from "./assets/Pages/Especialista/Especialista";
import Home from "./assets/Pages/Home/Home";
// import Blog from "./assets/Pages/Blog/Blog";
// import Blog_P1 from "./assets/Pages/Blog/Blog_p1.jsx";
// import Blog_P2 from "./assets/Pages/Blog/Blog_p2.jsx";
// import Blog_P3 from "./assets/Pages/Blog/Blog_p3.jsx";
// import Blog_P4 from "./assets/Pages/Blog/Blog_p4.jsx";
import SobreNos from "./assets/Pages/SobreNos/SobreNos.jsx";
import EncontrePsico from "./assets/Pages/AgendeConsulta/EncontrePsico.jsx";
import Perfil from "./assets/Pages/UsuarioLogado/Perfil";
import MeioPagamento from './assets/Componentes/OpçõesPerfil/MeioPagamento.jsx';
import PainelInicial from './assets/Componentes/OpçõesPerfil/PainelInicial.jsx';
import DadosPessoais from './assets/Componentes/OpçõesPerfil/DadosPessoais.jsx';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/Beneficiario' element={<Beneficiario />}></Route>
      <Route path="/Especialista" element={<Especialista />} />
      <Route path='/PsicologiaGratuita' element={<PsicologiaGratuita />}></Route>
      <Route path='/Login' element={<Login />}></Route>
      {/* <Route path="/Blog" element={<Blog />} />
      <Route path="/Blog_P1" element={<Blog_P1 />} />
      <Route path="/Blog_P2" element={<Blog_P2 />} />
      <Route path="/Blog_P3" element={<Blog_P3 />} />
      <Route path="/Blog_P4" element={<Blog_P4 />} /> */}
      <Route path="/EncontrePsico" element={<EncontrePsico />} />
      <Route path="/SobreNos" element={<SobreNos />} />

      {/* Roda dentro do perfil do usuário */}

      <Route path='/Perfil' element={<Perfil />}>
        <Route path='/Perfil/PainelInicial' element={<PainelInicial />}></Route>
        <Route path='/Perfil/DadosPessoais' element={<DadosPessoais />}></Route>
        <Route path='/Perfil/Agendamentos' element={<Agendamentos />}></Route>
        <Route path='/Perfil/MeioPagamento' element={<MeioPagamento />}></Route>
      </Route>

    </Routes>
  )
}