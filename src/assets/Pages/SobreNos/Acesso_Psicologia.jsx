import "./Acesso_Psicologia.css";
import imagem1 from "../../Images/HomeImg/Acesso1.png";
import imagem2 from "../../Images/HomeImg/Acesso2.png";

function AcessoTerapia() {
  return (
    <section className="section-acesso">
      <h2>Quem nós somos</h2>

      <div className="container-acesso">
        <div className="div-acesso">
          <img src={imagem1} alt="" />
          <div className="textos-acesso">
            <h3>
              Um olhar necessário, cuide da sua <span>Mente</span> com o melhor{" "}
              <span>match</span> possível!!
            </h3>
            <p>
              Cuidar da saúde mental é essencial. A terapia online pode ser a
              chave para encontrar o equilíbrio. No Intermentes, psicólogos
              qualificados te ajudam a: Desvendar sua mente, Lidar com emoções,
              Construir uma vida mais feliz. Comece sua jornada de autocuidado
              agora!
            </p>
          </div>
        </div>
        <div className="div-acesso">
          <div className="textos-acesso">
            <h3>
              Um olhar necessário, cuide da sua <span>Mente</span> com o melhor{" "}
              <span>match</span> possível!!
            </h3>
            <p>
              Cuidar da saúde mental não precisa ser um luxo. No nosso site,
              você encontra terapia a preços acessíveis. Acreditamos que todos
              merecem acompanhamento psicológico de qualidade. Por isso,
              oferecemos:
              <ul>
                <li>Consultas online com psicólogos experientes</li>
                <li>Planos flexíveis para suas necessidades</li>
              </ul>
            </p>
          </div>
          <img src={imagem2} alt="" />
        </div>
      </div>
    </section>
  );
}
export default AcessoTerapia;
