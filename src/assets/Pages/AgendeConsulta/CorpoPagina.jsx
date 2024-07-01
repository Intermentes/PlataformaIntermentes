import Style from "./CorpoPagina.module.css";
import Previa from "./PreviaPerfil.jsx";
import FotoDafny from "../../Images/PreviaEspecialistaImg/Dafny.png";
import Julia from '../../Images/HomeImg/Vector7.png'
import Debora from '../../Images/HomeImg/Vector6.png'
import Gabrielle from '../../Images/HomeImg/Vector5.png'
import CincoStar from "../../Images/PreviaEspecialistaImg/Estrelas.png";
import Filter from "./Filter.jsx";

function CorpoPagina() {
  return (
    <section className={Style.corpoPagina}>
      <h2 className={Style.tituloEncontre}>Encontre seu profissional</h2>
      <section className={Style.encontre}>
        <div className={Style.div1}>
          <Filter />
        </div>
        <div className={Style.div2}>
          <Previa
            FotoEspecialista={FotoDafny}
            NomeEspecialista="Dafny"
            Especialidade="Psico-Oncologia"
            crm="908076"
            Avaliacao={CincoStar}
            QuantiAvaliacoes="10"
            Duracao="50"
            Descricao="Oi! Eu sou a Dafny, uma neuropsicóloga apaixonada pelo estudo do cérebro e sua relação com o comportamento humano. Meu foco é abordar de forma abrangente o paciente, combinando técnicas de avaliação neuropsicológica e terapia cognitivo-comportamental para criar planos de intervenção personalizados para cada pessoa."
            Habilidades="Avaliação neuropsicológica, 
              Avaliação e tratamento de pacientes com lesão cerebral adquirida ou congênita, 
              Habilidade para interpretar e comunicar resultados de avaliações neuropsicológicas."
          />
          <Previa
            FotoEspecialista={Julia}
            NomeEspecialista="Júlia"
            Especialidade="TEA - Terapia ABA"
            crm="06/160048"
            Avaliacao={CincoStar}
            QuantiAvaliacoes="10"
            Duracao="50"
            Descricao="Olá, sou a Júlia, especialista em atendimento para crianças e adolescentes com diagnóstico de TEA. Sou apaixonada pela Psicologia e suas muitas formas de trabalho. Meu objetivo é acolher de forma abrangente e global com técnicas especializadas e olhar clínico. Junto da Terapia Cognitivo Comportamental criar um plano individual de tratamento para cada criança e adolescente atendidos. "
            Habilidades="Avaliação Psicológica de pacientes com diagnóstico de TEA, Habilidades para interpretar e comunicar resultados de avaliações, habilidades de escuta qualificada e técnicas psicoterapêuticas."
          />
          <Previa
            FotoEspecialista={Debora}
            NomeEspecialista="Debora"
            Especialidade="Atendimento à população LGBTQIA+"
            crm=" 06l190785"
            Avaliacao={CincoStar}
            QuantiAvaliacoes="10"
            Duracao="50"
            Descricao="Olá! Sou a Débora, psicóloga especializada em atendimento ao público LGBT+ e em sexualidade humana. Desde o início da minha carreira, meu foco tem sido oferecer um espaço seguro e acolhedor, para permitir que os pacientes possam explorar livremente suas identidades e questões relacionadas à sexualidade."
            Habilidades="Utilizando técnicas como entrevistas, anamnese e psicoeducação, crio um ambiente que promove a inclusão e o respeito. A psicoterapia não apenas ajuda a enfrentar desafios emocionais, mas também promove o autoconhecimento e o desenvolvimento pessoal, permitindo aos pacientes relações interpessoais mais saudáveis e um bom relacionamento consigo mesmo."
          />
          <Previa
            FotoEspecialista={Gabrielle}
            NomeEspecialista="Gabrielle Damacena Penha"
            Especialidade="Saude Mental e Violência"
            crm="06/190248"
            Avaliacao={CincoStar}
            QuantiAvaliacoes="10"
            Duracao="50"
            Descricao="Olá, sou a Gabrielle, psicóloga clínica e social.  
            Realizo atendimentos visando o histórico do paciente e seu momento atual de vida. Utilizando entrevistas de anamnese,  técnicas da terapia cognitiva comportamental, para auxiliar no processo de autoconhecimento, reestruturação cognitiva e regulação emocional."
            Habilidades="Os atendimentos para pessoas que sofreram algum tipo de violência, é pautado na escuta ativa, na psicoeducação e na ressignificação das violências vivenciadas. Com foco especialidade nos atendimentos às mulheres, maiores vítimas de violências."
          />
        </div>
      </section>
    </section>
  );
}

export default CorpoPagina;
