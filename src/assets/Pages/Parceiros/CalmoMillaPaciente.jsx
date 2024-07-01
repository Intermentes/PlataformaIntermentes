import "./CalmoMilla.css";
import MenuParceiros from "./MenuParceirosPaciente.jsx";
import Header from "../../Componentes/UsuarioLogado/PacienteHeaderFooter/HeaderPaciente.jsx";
import Footer from "../../Componentes/UsuarioLogado/PacienteHeaderFooter/FooterPaciente.jsx";
import Logos from "../../Images/ParceiriasImg/Logos2.png";
import Social from "../../Images/ParceiriasImg/Social.png";
import Tela from "../../Images/ParceiriasImg/Tela.png";
import Pagamento from "../../Images/ParceiriasImg/Pagamento.png";
import Puzzle from "../../Images/ParceiriasImg/Puzzle.png";
import Calendario from "../../Images/ParceiriasImg/Calendario.png";
import mila from '../../Images/ParceiriasImg/milla01.png'

function CalmoMilla() {
  return (
    <>
    <MenuParceiros />
    <section id="fundo">
      <section id="ConteudoTodo">
        <section id="HeroParceria">
          <div className="TextoParceria">
            <h3>
              Cuidando da sua <span>saúde mental</span> e do seu{" "}
              <span>corpo</span>
            </h3>
            <img src={Logos} alt="Logo do intermentes e logo do nutriacess" />
            <p>
              Acompanhamento psicologico e alimentar? <br />
              <br /> Um sonho que se torna realidade com a parceria entre Intermentes e Calmo<span id="NomeParceiro">Milla</span>.{" "} 
              Juntas, essas plataformas transformam sua rotina, promovendo uma{" "} 
              <span>vida saúdavel</span> e <span id="NomeParceiro"> harmoniosa.</span>
            </p>
          </div>
          <div id="ImagemParceria">
            <img src={mila} alt="Mulher com maçãs" />
          </div>
        </section>
        <section id="BeneficiosParceria">
          <div className="TextoParceria" id="TextosDois">
            <h3>Benefícios da nossa parceria</h3>
            <p>
            Nossa união visa oferecer uma solução completa para o cuidado mental.{" "}
             <br /> <br /> Ao integrar acompanhamento psicológico com atividades lúdicas e cognitivas, essa parceria não só promove a saúde mental e emocional, mas também fortalece as capacidades cognitivas, ajudando na prevenção de doenças e na manutenção de uma mente ativa e saudável.
            </p>
          </div>
          <div id="ListaParceria">
            <div>
              <img src={Social} alt="Ajuda" />
              <p>
                Nosso serviço foi pensado para ser <span id='corRoxa'>acessível</span> a quem
                mais precisa: <span id="NomeParceiro">VOCÊ!!</span>
              </p>
            </div>
            <div>
              <img src={Tela} alt="Tela" />
              <p>
                Sessões online com apenas alguns cliques que acontecem por
                videochamadas, com total <span id='corRoxa'>segurança e sigilo.</span>
              </p>
            </div>
            <div>
              <img src={Pagamento} alt="Pagamento" />
              <p>
                <span id='corRoxa'>Valores para todos os públicos</span>, saúde{" "}
                <span>mental</span>e  uma abordagem inovadora na prevenção de <span> doenças neurodegenerativas </span> , como Alzheimer, utilizando <span id="NomeParceiro"> jogos estimulantes </span> como Sudoku e jogos de memória!
              </p>
            </div>
            <div>
              <img src={Puzzle} alt="Quebra-cabeça" />
              <p>
                Psicólogos credenciados pelo CRP e nutricionistas com{" "}
                <span id='corRoxa'>alto desempenho</span> para atendimento de todos os
                públicos.
              </p>
            </div>
            <div>
              <img src={Calendario} alt="Calendário" />
              <p>
                O <span id='corRoxa'>bem-estar na palma da sua mão</span>, escolha o horário
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

export default CalmoMilla;
