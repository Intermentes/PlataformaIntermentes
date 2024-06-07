import "./PreviaPerfil.css";
//temporário
import Calendario from "../../Images/PreviaEspecialistaImg/Calendario.png";
function PreviaPerfil({
  FotoEspecialista,
  NomeEspecialista,
  Especialidade,
  crm,
  Avaliacao,
  QuantiAvaliacoes,
  Duracao,
  Descricao,
  Habilidades,
  VerCompleto,
}) {
  return (
    <div id="Previa">
      <div id="InformacoesPrevia">
        <div id="FotoPrevia">
          <div id="ImagemPrevia">
            <img src={FotoEspecialista} alt="Foto do especialista" />
          </div>
          <div id="NomePrevia">
            <h2 id="PreviaNome">{NomeEspecialista}</h2>
            <h3 id="PreviaEspecialidade">{Especialidade}</h3>
            <h4 id="PreviaCrm">CRM: {crm}</h4>
            <div id="AvaliacaoPrevia">
              <img src={Avaliacao} alt="Avaliação" id="EstrelasPrevia" />
              <p id="QuantidadePrevia">({QuantiAvaliacoes})</p>
            </div>
            <p id="DuracaoPrevia">Duração da sessão: {Duracao} Min</p>
          </div>
        </div>
        <div id="PreviaBotao">
          <div id="DescricaoPrevia">
            <p>
              {Descricao} <br /> <br />
              <span>
                Habilidades: <br /> <br />
                {Habilidades}
              </span>
            </p>
          </div>
          <div id="VerCompleto">
            <a href={VerCompleto} target="blank">
              Ver perfil completo
            </a>
          </div>
        </div>
      </div>
      <div id="CalendarioPrevia">
        <div id="TemporarioCalendario">
          <img src={Calendario} alt="Calendário" />
        </div>
        {/* <div id="TemporarioBotao">
          <a href="">Agendar consulta</a>
        </div> */}
      </div>
    </div>
  );
}

export default PreviaPerfil;
