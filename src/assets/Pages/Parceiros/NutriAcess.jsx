import "./NutriAcess.css";
import Logos from "../../Images/ParceiriasImg/Logos.png";
import Maca from "../../Images/ParceiriasImg/Macas.png";
import Social from "../../Images/ParceiriasImg/Social.png";
import Tela from "../../Images/ParceiriasImg/Tela.png";
import Pagamento from "../../Images/ParceiriasImg/Pagamento.png";
import Puzzle from "../../Images/ParceiriasImg/Puzzle.png";
import Calendario from "../../Images/ParceiriasImg/Calendario.png";
import MenuParceiros from "./MenuParceiros.jsx";
function Nutri() {
  return (
    <section>
      <MenuParceiros />
      <section id="ConteudoTodo">
        <h3 id="TituloNutri">
          NutriAcess e <span>Intermentes</span>
        </h3>
        <section id="HeroParceria">
          <div className="TextoParceria">
            <h3>
              Cuidando da sua <span>saúde mental</span> e do seu{" "}
              <span>corpo</span>
            </h3>
            <img src={Logos} alt="Logo do intermentes e logo do nutriacess" />
            <p>
              Acompanhamento psicologico e alimentar?? <br />
              <br /> Um sonho que se torna realidade com a Intermentes e
              NutriAcess transformando sua rotina em uma{" "}
              <span>vida saúdavel</span> quando o<span> corpo</span> anda em{" "}
              <span>harmonia</span> com a <span>mente</span>.
            </p>
          </div>
          <div id="ImagemParceria">
            <img src={Maca} alt="Mulher com maçãs" />
          </div>
        </section>
        <section id="BeneficiosParceria">
          <div className="TextoParceria" id="TextosDois">
            <h3>Benefícios da nossa parceria</h3>
            <p>
              A NutriAcess democratiza o acesso à consultas nutricionais.
              Considerando a relevância da alimentação saudável para uma{" "}
              <span>qualidade de vida melhor</span>. <br /> <br /> Juntos
              proporcionaremos oportunidades para uma vida mais saudável,
              promovendo a <span>harmonia</span> entre seu corpo e mente.
            </p>
          </div>
          <div id="ListaParceria">
            <div>
              <img src={Social} alt="Ajuda" />
              <p>
                Nosso serviço foi pensado para ser <span>acessível</span> a quem
                mais precisa: <span>VOCÊ!!</span>
              </p>
            </div>
            <div>
              <img src={Tela} alt="Tela" />
              <p>
                Sessões online com apenas alguns cliques que acontecem por
                videochamadas, com total <span>segurança e sigilo.</span>
              </p>
            </div>
            <div>
              <img src={Pagamento} alt="Pagamento" />
              <p>
                <span>Valores para todos os públicos</span>, saúde{" "}
                <span>mental</span> e cuidado
                <span>nutricional</span> não devem ser vistos como privilégios e
                sim como necessidades de todos!!
              </p>
            </div>
            <div>
              <img src={Puzzle} alt="Quebra-cabeça" />
              <p>
                Psicólogos credenciados pelo CRP e nutricionistas com{" "}
                <span>alto desempenho</span> para atendimento de todos os
                públicos.
              </p>
            </div>
            <div>
              <img src={Calendario} alt="Calendário" />
              <p>
                O <span>bem-estar na palma da sua mão</span>, escolha o horário
                que melhor se adapta a sua rotina e inicie sua jornada de
                transformação.
              </p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Nutri;
