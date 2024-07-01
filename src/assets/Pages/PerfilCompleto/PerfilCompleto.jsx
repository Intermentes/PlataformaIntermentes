import Perfil_Completo from './Perfil_completo.jsx';
import Header from '../../Componentes/UsuarioLogado/PacienteHeaderFooter/HeaderPaciente';
import Footer from '../../Componentes/UsuarioLogado/PacienteHeaderFooter/FooterPaciente';


function PerfilCompleto() {
  return (
    <main>
      <Header />
      <Perfil_Completo
        crm="1234567"
        nome=" Dafny"
        especialidade="Psico-Oncologia"
        valorSessao="R$150"
        duracaoSessao="50min"
        sobre="Oi! Eu sou a Dafny, uma neuropsicóloga apaixonada pelo estudo do cérebro e sua relação com o comportamento humano. Meu foco é abordar de forma abrangente o paciente, combinando técnicas de avaliação neuropsicológica e terapia cognitivo-comportamental para criar planos de intervenção personalizados para cada pessoa."
        estudos="Avaliação neuropsicológica, 
              Avaliação e tratamento de pacientes com lesão cerebral adquirida ou congênita, 
              Habilidade para interpretar e comunicar resultados de avaliações neuropsicológicas."
      />

      <Footer />
    </main>
  );
}

export default PerfilCompleto;