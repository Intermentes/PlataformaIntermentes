import Style from "./PreviaPerfil.module.css";
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
    <div className={Style.previa}>
      <div className={Style.informacoesPrevia}>
        <div className={Style.fotoPrevia}>
          <div className={Style.imagemPrevia}>
            <img src={FotoEspecialista} alt="Foto do especialista" />
          </div>
          <div className={Style.nomePrevia}>
            <h2 className={Style.previaNome}>{NomeEspecialista}</h2>
            <h3 className={Style.previaEspecialidade}>{Especialidade}</h3>
            <h4 className={Style.previaCrm}>CRM: {crm}</h4>
            <div className={Style.avaliacaoPrevia}>
              <img src={Avaliacao} alt="Avaliação" className={Style.estrelasPrevia} />
              <p className={Style.quantidadePrevia}>({QuantiAvaliacoes})</p>
            </div>
            <p className={Style.duracaoPrevia}>Duração da sessão: {Duracao} Min</p>
          </div>
        </div>
        <div className={Style.previaBotao}>
          <div className={Style.descricaoPrevia}>
            <p>
              {Descricao} <br /> <br />
              <span>
                Habilidades: <br /> <br />
                {Habilidades}
              </span>
            </p>
          </div>
          <div className={Style.verCompleto}>
            <a href={VerCompleto} target="blank">
              Ver perfil completo
            </a>
          </div>
        </div>
      </div>
      <div className={Style.calendarioPrevia}>
        <div className={Style.temporarioCalendario}>
          <img src={Calendario} alt="Calendário" />
        </div>
        {/* <div className={Style.temporarioBotao}>
          <a href="">Agendar consulta</a>
        </div> */}
      </div>
    </div>
  );
}

export default PreviaPerfil;
