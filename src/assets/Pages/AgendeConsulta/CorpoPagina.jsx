import "./CorpoPagina.css";
import Previa from "./PreviaPerfil.jsx";
import FotoDafny from "../../Images/PreviaEspecialistaImg/Dafny.png";
import CincoStar from "../../Images/PreviaEspecialistaImg/Estrelas.png";
import Filter from "./Filter.jsx";

function CorpoPagina() {
  return (
    <section>
      <h2 id="TituloEncontre">Encontre seu profissional</h2>
      <section id="Encontre">
        <div id="div1">
          <h1>Filtrar por:</h1>
          <Filter />
        </div>
        <div id="div2">
          <Previa
            FotoEspecialista={FotoDafny}
            NomeEspecialista="Dafny"
            Especialidade="Especialidade"
            crm="908076"
            Avaliacao={CincoStar}
            QuantiAvaliacoes="10"
            Duracao="50"
            Descricao="Oi! Eu sou a Dafny, uma neuropsicóloga apaixonada pelo estudo do cérebro e sua relação com o comportamento humano. Meu foco é abordar de forma abrangente o paciente, combinando técnicas de avaliação neuropsicológica e terapia cognitivo-comportamental para criar planos de intervenção personalizados para cada pessoa."
            Habilidades="Avaliação neuropsicológica, 
        Avaliação e tratamento de pacientes com lesão cerebral adquirida ou congênita, 
        Habilidade para interpretar e comunicar resultados de avaliações neuropsicológicas."
            // VerCompleto=
          />
          <Previa
            FotoEspecialista={FotoDafny}
            NomeEspecialista="Dafny"
            Especialidade="Especialidade"
            crm="908076"
            Avaliacao={CincoStar}
            QuantiAvaliacoes="10"
            Duracao="50"
            Descricao="Oi! Eu sou a Dafny, uma neuropsicóloga apaixonada pelo estudo do cérebro e sua relação com o comportamento humano. Meu foco é abordar de forma abrangente o paciente, combinando técnicas de avaliação neuropsicológica e terapia cognitivo-comportamental para criar planos de intervenção personalizados para cada pessoa."
            Habilidades="Avaliação neuropsicológica, 
        Avaliação e tratamento de pacientes com lesão cerebral adquirida ou congênita, 
        Habilidade para interpretar e comunicar resultados de avaliações neuropsicológicas."
            // VerCompleto=
          />
          <Previa
            FotoEspecialista={FotoDafny}
            NomeEspecialista="Dafny"
            Especialidade="Especialidade"
            crm="908076"
            Avaliacao={CincoStar}
            QuantiAvaliacoes="10"
            Duracao="50"
            Descricao="Oi! Eu sou a Dafny, uma neuropsicóloga apaixonada pelo estudo do cérebro e sua relação com o comportamento humano. Meu foco é abordar de forma abrangente o paciente, combinando técnicas de avaliação neuropsicológica e terapia cognitivo-comportamental para criar planos de intervenção personalizados para cada pessoa."
            Habilidades="Avaliação neuropsicológica, 
        Avaliação e tratamento de pacientes com lesão cerebral adquirida ou congênita, 
        Habilidade para interpretar e comunicar resultados de avaliações neuropsicológicas."
            // VerCompleto=
          />
        </div>
      </section>
    </section>
  );
}

export default CorpoPagina;
