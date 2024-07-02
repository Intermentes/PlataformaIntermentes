import styles from "./Desenvolvedores.module.css";
import Regis from "../../Images/SobreNosImg/Regis.jpeg";
import Bea from "../../Images/SobreNosImg/Bea.jpg";
import Leo from "../../Images/SobreNosImg/Leo.jpg";
import Caue from "../../Images/SobreNosImg/Caue.png";
import Lari from "../../Images/SobreNosImg/Lari.jpeg";
import Victor from "../../Images/SobreNosImg/Victor.jpg";
import Hiago from "../../Images/SobreNosImg/Hiago.jpg";
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
              <a href="https://www.linkedin.com/in/leonardo-marcilino/" target="blank">
                <img src={Linkedin} alt="" />
              </a>
              <a href="https://github.com/Leonardo-Marcilino" target="blank">
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
              <a href="https://www.linkedin.com/in/larissa-souza-de-oliveira-" target="blank">
                <img src={Linkedin} alt="" />
              </a>
              <a href="https://github.com/lari021" target="blank">
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
              <a href="https://www.linkedin.com/in/reginaldo-ferreira-j%C3%BAnior/" target="blank">
                <img src={Linkedin} alt="" />
              </a>
              <a href="https://github.com/Reginaldoferreirajr" target="blank">
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
              <a href="https://www.linkedin.com/in/beatriz-pequeno-de-castro/" target="blank">
                <img src={Linkedin} alt="" />
              </a>
              <a href="https://github.com/bia-pequeno" target="blank">
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
              <a href="https://www.linkedin.com/in/hiago-salvador/" target="blank">
                <img src={Linkedin} alt="" />
              </a>
              <a href="https://github.com/HiagoSalvador" target="blank">
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
              <a href="https://www.linkedin.com/in/caue-costa11/" target="blank">
                <img src={Linkedin} alt="" />
              </a>
              <a href="https://github.com/Bluecaue" target="blank">
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
              <a href="http://linkedin.com/in/victor-da-silvaa" target="blank">
                <img src={Linkedin} alt="" />
              </a>
              <a href="github.com/VictordaSilvaa" target="blank">
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
