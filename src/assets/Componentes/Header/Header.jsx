import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../Images/Icons/Logo.png";

function Header() {
  return (
    <header>
      <nav className="MenuLinks">
        <div className="BoxLogo">
          <a href="/">
            <img src={Logo} alt="Logo da Intermentes" />
          </a>
          <p>Psicologia para todos</p>
        </div>
        <ul className="ListaLinks">
          <li className="LinkItem">
            <Link to={"/Home"}>Inicio</Link>
          </li>
          <li className="LinkItem LiDropMenu">
            <a>Serviços</a>
            <div className="DropMenu">
              <Link to={"/Especialista"}>
                <div className="DropMenuBox">
                  <p className="TitleDropMenu Show">Para especialistas</p>
                  <p className="DescriptionDropMenu Show">
                    Compartilhe seu trabalho conosco e não saia perdendo
                  </p>
                </div>
              </Link>
              <Link to={"/Beneficiario"}>
                <div className="DropMenuBox">
                  <p className="TitleDropMenu Show">Para beneficiários</p>
                  <p className="DescriptionDropMenu Show">
                    O cuidado que precisa em apenas um lugar
                  </p>
                </div>
              </Link>
              <Link to={"/PsicologiaGratuita"}>
                <div className="DropMenuBox">
                  <p className="TitleDropMenu Show">Psicologia Gratuita</p>
                  <p className="DescriptionDropMenu Show">
                    Aqui abraçamos aqueles que precisam e não têm condições
                  </p>
                </div>
              </Link>
              <Link to={"/EncontrePsico"}>
                <div className="DropMenuBox">
                  <p className="TitleDropMenu CorRoxa Show">
                    Agende sua consulta
                  </p>
                  <p className="DescriptionDropMenu CorRoxa Show">
                    Encontre seu psicólogo aqui e inicie a sua jornada
                  </p>
                </div>
              </Link>
            </div>
          </li>
          <li className="LinkItem">
            <a href="">Parcerias</a>
          </li>
          <li className="LinkItem">
            <Link to={"/Blog"}>Blog</Link>
          </li>
          <li className="LinkItem">
            <Link to={"/SobreNos"}>Sobre Nós</Link>
          </li>
        </ul>
        <div className="BoxAcessar">
          <Link to={"/Login"}>
            <a href="" className="Entrar">
              Entrar
            </a>
          </Link>
          <Link to={"/Login"}>
            <a href="" className="Cadastrar">
              Cadastrar
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
