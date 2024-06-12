import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../Images/Icons/Logo.png";

function Header() {
  return (
    <header>
      <nav className='MenuLinks'>
        <Link to={''}>
            <img src={Logo} alt="Logo da Intermentes" className="ImgLogo" />
        </Link>
        <ul className='ListaLinks'>
          <Link to={''}>
            <li className='LinkItem'>
              Inicio
            </li>
          </Link>
          <Link to={'/Especialista'}>
          <li className='LinkItem LiDropMenu'>
            Para Psicólogos
          </li>
          </Link>
          <Link to={'/PsicologiaGratuita'}>
          <li className='LinkItem '>
            Ong's
          </li>
          </Link>
          <Link to={'/SobreNos'}>
            <li className='LinkItem'>
              Sobre nós
            </li>
          </Link>
          <Link to={'/SobreNos'}>
            <li className='LinkItem'>
              Sobre Nós
            </li>
          </Link>
        </ul>
        <div className='BoxAcessar'>
          <Link to={'/Login'}><a href="" className='Entrar'>Entrar</a></Link>
          <Link to={'/Login'}><a href="" className='Cadastrar' >Cadastrar</a></Link>
        </div>
      </nav>
    </header>
  )
}

export default Header;
