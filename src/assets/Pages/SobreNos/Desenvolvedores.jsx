import "./Desenvolvedores.css";
import Regis from "../../Images/SobreNosImg/Regis.jpeg";
import Bea from "../../Images/SobreNosImg/Bea.jpg";
import Leo from "../../Images/SobreNosImg/Leo.jpg";
import Caue from "../../Images/SobreNosImg/Caue.jpg";
import Lari from "../../Images/SobreNosImg/Lari.jpeg";
import Victor from "../../Images/SobreNosImg/Victor.jpeg";
import Hiago from "../../Images/SobreNosImg/Hiago.jpeg";
import Linkedin from "../../Images/SobreNosImg/Linkedin.png";
import Github from "../../Images/SobreNosImg/Github.png";
function Devs() {
  return (
    <section id="Devs">
      <h2>Desenvolvedores</h2>
      <div id="CaixaFotos">
        <div className="Colunas">
          <div className="Card">
            <div className="Foto">
              <img src={Leo} alt="foto dev" />
            </div>
            <h5>Leonardo Marcilino</h5>
            <h6>Scrum Master, UI/UX, Full Stack</h6>
            <div className="Redes">
              <a href="#">
                <img src={Linkedin} alt="" />
              </a>
              <a href="#">
                <img src={Github} alt="" />
              </a>
            </div>
          </div>
          <div className="Card">
            <div className="Foto">
              <img src={Caue} alt="" />
            </div>
            <h5>Cauê Costa</h5>
            <h6>Financeiro, Desenvolvedor Full Stack</h6>
            <div className="Redes">
              <a href="#">
                <img src={Linkedin} alt="" />
              </a>
              <a href="#">
                <img src={Github} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="Colunas">
          <div className="Card">
            <div className="Foto">
              <img src={Lari} alt="" />
            </div>
            <h5>Larissa Oliveira</h5>
            <h6>PO, Desenvolvedora Back End</h6>
            <div className="Redes">
              <a href="#">
                <img src={Linkedin} alt="" />
              </a>
              <a href="#">
                <img src={Github} alt="" />
              </a>
            </div>
          </div>
          <div className="Card">
            <div className="Foto">
              <img src={Regis} alt="" />
            </div>
            <h5>Reginaldo Júnior</h5>
            <h6>Desenvolvedor Full Stack</h6>
            <div className="Redes">
              <a href="#">
                <img src={Linkedin} alt="" />
              </a>
              <a href="#">
                <img src={Github} alt="" />
              </a>
            </div>
          </div>
          <div className="Card">
            <div className="Foto">
              <img src={Hiago} alt="" />
            </div>
            <h5>Hiago Salvador</h5>
            <h6>Desenvolvedor Back End</h6>
            <div className="Redes">
              <a href="#">
                <img src={Linkedin} alt="" />
              </a>
              <a href="#">
                <img src={Github} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="Colunas">
          <div className="Card">
            <div className="Foto">
              <img src={Bea} alt="" />
            </div>
            <h5>Beatriz Pequeno</h5>
            <h6>UI/UX, Desenvolvedora Front End</h6>
            <div className="Redes">
              <a href="#">
                <img src={Linkedin} alt="" />
              </a>
              <a href="#">
                <img src={Github} alt="" />
              </a>
            </div>
          </div>
          <div className="Card">
            <div className="Foto">
              <img src={Victor} alt="" />
            </div>
            <h5>Victor Da Silva</h5>
            <h6>Desenvolvedor Back End</h6>
            <div className="Redes">
              <a href="#">
                <img src={Linkedin} alt="" />
              </a>
              <a href="#">
                <img src={Github} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Devs;
