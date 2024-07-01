import styled from "./Paces.module.css";
import MenuParceiros from "./MenuParceiros.jsx";
import Footer from "../../Componentes/Footer/Footer.jsx";
import Logos from "../../Images/ParceiriasImg/Logos3.png";
import Social from "../../Images/ParceiriasImg/Social.png";
import Tela from "../../Images/ParceiriasImg/Tela.png";
import Pagamento from "../../Images/ParceiriasImg/Pagamento.png";
import Puzzle from "../../Images/ParceiriasImg/Puzzle.png";
import Calendario from "../../Images/ParceiriasImg/Calendario.png";
import { color } from "framer-motion";

function Paces() {
  return (
    <>
    <MenuParceiros />
    <section id={styled.fundo}>
      <section id={styled.ConteudoTodo}>
        <section id={styled.HeroParceria}>
          <div className={styled.TextoParceria}>
            <h3>
            Levando o <span>cuidado mental</span> que você precisa{" "}
             a outro patamar.
            </h3>
            <img src={Logos} alt="Logo do intermentes e logo do nutriacess" />
            <p>
              Acompanhamento psicologico? <br />
              <br /> Um sonho que se torna realidade com a parceria entre Intermentes e <span id={styled.NomeParceiro}>Paces.</span>{" "} 
              Juntas, essas plataformas transformam sua rotina, promovendo uma{" "}
              <span>vida saúdavel</span> e <span>harmoniosa.</span>
            </p>
          </div>
        </section>
        <section id={styled.BeneficiosParceria}>
          <div className={styled.TextoParceria} id={styled.TextosDois}>
            <h3>Benefícios da nossa parceria</h3>
            <p>
            A Intermentes e a Paces uniram forças para proporcionar um suporte integral às famílias de crianças com paralisia cerebral.{" "}
              <span>qualidade de vida melhor</span>. <br /> <br /> Com essa parceria, a Intermentes reforça seu compromisso de cuidar da saúde mental, enquanto a Paces se dedica a transformar vidas com amor e dedicação. Vamos juntos caminhar rumo a uma vida mais saudável e equilibrada, onde cada passo é dado com a certeza de que estamos em boas mãos.
            </p>
          </div>
          <div id={styled.ListaParceria}>
            <div>
              <img src={Social} alt="Ajuda" />
              <p>
                Nosso serviço foi pensado para ser <span id={styled.corRoxa}>acessível</span> a quem
                mais precisa: <span id={styled.NomeParceiro}>VOCÊ!!</span>
              </p>
            </div>
            <div>
              <img src={Tela} alt="Tela" />
              <p>
                Sessões online com apenas alguns cliques que acontecem por
                videochamadas, com total <span id={styled.corRoxa}>segurança e sigilo.</span>
              </p>
            </div>
            <div>
              <img src={Pagamento} alt="Pagamento" />
              <p>
                <span id={styled.corRoxa}>Valores para todos os públicos</span>, saúde{" "}
                <span>mental</span> e a Paces,
                especializada em psicologia ocupacional, oferece um ambiente acolhedor e terapias inovadoras para estimular o desenvolvimento
                 <span id={styled.NomeParceiro}> cognitivo e emocional </span>das crianças.
              </p>
            </div>
            <div>
              <img src={Puzzle} alt="Quebra-cabeça" />
              <p>
                Psicólogos credenciados pelo CRP e nutricionistas com{" "}
                <span id="corRoxa">alto desempenho</span> para atendimento de todos os
                públicos.
              </p>
            </div>
            <div>
              <img src={Calendario} alt="Calendário" />
              <p>
                O <span id={styled.corRoxa}>bem-estar na palma da sua mão</span>, escolha o horário
                que melhor se adapta a sua rotina e inicie sua jornada de
                transformação.
              </p>
            </div>
          </div>
        </section>
      </section>
    </section>
    <Footer/>
    </>
  );
}

export default Paces;
