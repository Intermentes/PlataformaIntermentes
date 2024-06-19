import styles from "./Desenvolvedores.module.css";
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
    <section className={styles.devs}>
      <h2>Desenvolvedores</h2>
      <div className={styles.caixaFotos}>
        <div className={styles.colunas}>
          <div className={styles.card}>
            <div className={styles.foto}>
              <img src={Leo} alt="foto dev" />
            </div>
            <h5>Leonardo Marcilino</h5>
            <h6>Scrum Master, UI/UX, Full Stack</h6>
            <div className={styles.redes}>
              <a href="#">
                <img src={Linkedin} alt="" />
              </a>
              <a href="#">
                <img src={Github} alt="" />
              </a>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.foto}>
              <img src={Lari} alt="foto dev" />
            </div>
            <h5>Larissa Oliveira</h5>
            <h6>Desenvolvedora Back End</h6>
            <div className={styles.redes}>
              <a href="#">
                <img src={Linkedin} alt="" />
              </a>
              <a href="#">
                <img src={Github} alt="" />
              </a>
            </div>
          </div>


        </div>
        <div className={styles.colunas}>
          <div className={styles.card}>
            <div className={styles.foto}>
              <img src={Regis} alt="foto dev" />
            </div>
            <h5>Reginaldo Júnior</h5>
            <h6>Product Owner, Desenvolvedor Full Stack</h6>
            <div className={styles.redes}>
              <a href="#">
                <img src={Linkedin} alt="" />
              </a>
              <a href="#">
                <img src={Github} alt="" />
              </a>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.foto}>
              <img src={Bea} alt="foto dev" />
            </div>
            <h5>Beatriz Pequeno</h5>
            <h6>UI/UX, Desenvolvedora Front End</h6>
            <div className={styles.redes}>
              <a href="#">
                <img src={Linkedin} alt="" />
              </a>
              <a href="#">
                <img src={Github} alt="" />
              </a>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.foto}>
              <img src={Hiago} alt="foto dev" />
            </div>
            <h5>Hiago Salvador</h5>
            <h6>Desenvolvedor Back End</h6>
            <div className={styles.redes}>
              <a href="#">
                <img src={Linkedin} alt="" />
              </a>
              <a href="#">
                <img src={Github} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.colunas}>
          <div className={styles.card}>
            <div className={styles.foto}>
              <img src={Caue} alt="foto dev" />
            </div>
            <h5>Cauê Costa</h5>
            <h6>Financeiro, Desenvolvedor Full Stack</h6>
            <div className={styles.redes}>
              <a href="#">
                <img src={Linkedin} alt="" />
              </a>
              <a href="#">
                <img src={Github} alt="" />
              </a>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.foto}>
              <img src={Victor} alt="foto dev" />
            </div>
            <h5>Victor Da Silva</h5>
            <h6>Desenvolvedor Back End</h6>
            <div className={styles.redes}>
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
