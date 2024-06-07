import { Routes, Route } from "react-router-dom";
import Beneficiario from "./assets/Pages/Beneficiario/Beneficiario";
import PsicologiaGratuita from "./assets/Pages/PsicologiaGratuita/PsicologiaGratuita";
import Login from "./assets/Pages/Login/Login";
import Especialista from "./assets/Pages/Especialista/Especialista";
import SobreNos from "./assets/Pages/SobreNos/SobreNos.jsx";
import Home from "./assets/Pages/Home/Home.jsx";
import EncontrePsico from "./assets/Pages/AgendeConsulta/EncontrePsico.jsx";
import Perfil from "./assets/Pages/UsuarioLogado/Perfil";
import PainelControle from "./assets/Componentes/OpçõesPerfil/PainelControle";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />}></Route>

      <Route path="/Especialista" element={<Especialista />}></Route>
      <Route path="/Beneficiario" element={<Beneficiario />}></Route>
      <Route
        path="/PsicologiaGratuita"
        element={<PsicologiaGratuita />}></Route>
      <Route path="/Login" element={<Login />}></Route>

      {/* Roda dentro do perfil do usuário */}
      <Route path="/EncontrePsico" element={<EncontrePsico />}></Route>
      <Route path="/SobreNos" element={<SobreNos />}></Route>
      <Route path="/Perfil" element={<Perfil />}>
        <Route
          path="/Perfil/PainelDeControle"
          element={<PainelControle />}></Route>
      </Route>
    </Routes>
  );
}
