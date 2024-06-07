import { Routes, Route } from 'react-router-dom'
import Beneficiario from './assets/Pages/Beneficiario/Beneficiario'
import PsicologiaGratuita from './assets/Pages/PsicologiaGratuita/PsicologiaGratuita'
import Login from './assets/Pages/Login/Login'
import Especialista from './assets/Pages/Especialista/Especialista'
import Home from './assets/Pages/Home/Home'
import Blog from './assets/Pages/Blog/Blog'

import Perfil from './assets/Pages/UsuarioLogado/Perfil'
import PainelControle from './assets/Componentes/OpçõesPerfil/PainelControle'

import Blog_P1 from './assets/Pages/Blog/Blog_p1.jsx';
import Blog_P2 from './assets/Pages/Blog/Blog_p2.jsx';
import Blog_P3 from './assets/Pages/Blog/Blog_p3.jsx';
import Blog_P4 from './assets/Pages/Blog/Blog_p4.jsx';

export default function MainRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Especialista' element={<Especialista/>}></Route>
            <Route path='/Beneficiario' element={<Beneficiario />}></Route>
            <Route path='/PsicologiaGratuita' element={<PsicologiaGratuita />}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/Blog' element={<Blog />}></Route>
            
          <Route path="Blog_P1" element={<Blog_P1 />} />
          <Route path="/Blog_P2" element={<Blog_P2 />} />
          <Route path="/Blog_P3" element={<Blog_P3 />} />
          <Route path="/Blog_P4" element={<Blog_P4 />} />

            {/* Roda dentro do perfil do usuário */}

            <Route path='/Perfil' element={<Perfil />}>
                <Route path='/Perfil/PainelDeControle' element={<PainelControle />}></Route>
            </Route>
            

        </Routes>
    )

}