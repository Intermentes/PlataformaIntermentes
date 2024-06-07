import './Duvidas.css'
import maos from '../../Images/HomeImg/maos.png'
function Duvidas() {
    return (

        <section className='section-duvidas'>

            <div className='container-duvidas'>
                <h3>Duvidas</h3>
                <p>Psicoterapia online - uma solução de democratização do cuidado com a saúde mental à população que vive em regiões com acesso limitado a serviços psicológicos, brasileiros que moram no exterior ou para aqueles que buscam mais comodidade para cuidar da saúde mental.</p>

                <span>*A terapia online foi regulamentada no Brasil em 12/11/2018, através da Resolução CFP 011/2018.</span>
            </div>
            <div className='faq-duvidas'>
                <details>
                    <summary>O que é terapia online?<span>V</span></summary>
                    <p>A terapia online é o atendimento psicológico realizado através de plataformas digitais, como videochamadas, chat ou e-mail. Essa modalidade oferece diversos benefícios, como praticidade, flexibilidade e acessibilidade.</p>
                </details>
                <details>
                    <summary>Como funciona a terapia online?<span>V</span></summary>
                    <p>As sessões de terapia online acontecem de forma similar às presenciais. Você conversa com o psicólogo sobre seus sentimentos, pensamentos e comportamentos, e recebe orientação e apoio para lidar com os desafios da vida.</p>
                </details>
                <details>
                    <summary>Quais as vantagens da terapia online?<span>V</span></summary>
                    <ul>
                        <li>Praticidade: Você pode fazer as sessões de qualquer lugar, desde que tenha acesso à internet.</li>
                        <li>Flexibilidade: Você pode agendar as sessões em horários que sejam convenientes para você.</li>
                        <li>Acessibilidade: A terapia online costuma ter preços mais baixos do que a terapia presencial.</li>
                        <li>Conforto: Você pode se sentir mais à vontade para falar sobre seus problemas no ambiente familiar.</li>
                        <li>Segurança: As plataformas de terapia online são seguras e confidenciais.</li>
                    </ul>
                </details>
                <details>
                    <summary>A terapia online é segura?<span>V</span></summary>
                    <p>Sim, a terapia online é segura. Os psicólogos que oferecem atendimento online são obrigados a seguir os mesmos princípios éticos e legais da terapia presencial. As plataformas de terapia online também são seguras e confidenciais.
                        Como posso encontrar um psicólogo para fazer terapia online?</p>
                </details>
                <details>
                    <summary>Como posso encontrar um psicólogo para fazer terapia online?<span>V</span></summary>
                    <p>Você pode encontrar um psicólogo para fazer terapia online em nosso site. Basta preencher um cadastro rápido e informar suas necessidades. Em seguida, você receberá uma lista de psicólogos que atendem aos seus critérios.</p>
                </details>
                <p className='faq-p'>Construa pontes para o bem-estar com Intermentes. Atravesse para um futuro mais saudável e resiliente, onde a saúde mental da sua equipe é a base para o sucesso da empresa.</p>
            </div>

            <div className='importante-duvidas'>
                <img src={maos} alt="" />
                <p>Atenção: Este site não oferece tratamento ou aconselhamento imediato para pessoas em crise suicida. Em caso de crise, ligue para 188 (CVV)ou acesse www.cvv.org.br. Em caso de emergência, procure atendimento em um hospital mais próximo.</p>
            </div>

        </section>

    )
}
export default Duvidas