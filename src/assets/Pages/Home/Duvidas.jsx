import Styles from './Duvidas.module.css';
import maos from '../../Images/HomeImg/maos.png';
import { motion } from 'framer-motion';


function Duvidas() {
    return (
        <section className={Styles.section_duvidas}>

            <motion.div className={Styles.container_duvidas}
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
            >
                <h3>Duvidas</h3>
                <p>Psicoterapia online - uma solução de democratização do cuidado com a saúde mental à população que vive em regiões com acesso limitado a serviços psicológicos, brasileiros que moram no exterior ou para aqueles que buscam mais comodidade para cuidar da saúde mental.</p>

                <span>*A terapia online foi regulamentada no Brasil em 12/11/2018, através da Resolução CFP 011/2018.</span>
            </motion.div>
            <div className={Styles.faq_duvidas}>
                <motion.details
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <summary>O que é terapia online?</summary>
                    <p>A terapia online é o atendimento psicológico realizado através de plataformas digitais, como videochamadas, chat ou e-mail. Essa modalidade oferece diversos benefícios, como praticidade, flexibilidade e acessibilidade.</p>
                </motion.details>
                <motion.details
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <summary>Como funciona a terapia online?</summary>
                    <p>As sessões de terapia online acontecem de forma similar às presenciais. Você conversa com o psicólogo sobre seus sentimentos, pensamentos e comportamentos, e recebe orientação e apoio para lidar com os desafios da vida.</p>
                </motion.details>
                <motion.details
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <summary>Quais as vantagens da terapia online?</summary>
                    <ul>
                        <li>Praticidade: Você pode fazer as sessões de qualquer lugar, desde que tenha acesso à internet.</li>
                        <li>Flexibilidade: Você pode agendar as sessões em horários que sejam convenientes para você.</li>
                        <li>Acessibilidade: A terapia online costuma ter preços mais baixos do que a terapia presencial.</li>
                        <li>Conforto: Você pode se sentir mais à vontade para falar sobre seus problemas no ambiente familiar.</li>
                        <li>Segurança: As plataformas de terapia online são seguras e confidenciais.</li>
                    </ul>
                </motion.details>
                <motion.details
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <summary>A terapia online é segura?</summary>
                    <p>Sim, a terapia online é segura. Os psicólogos que oferecem atendimento online são obrigados a seguir os mesmos princípios éticos e legais da terapia presencial. As plataformas de terapia online também são seguras e confidenciais.
                        Como posso encontrar um psicólogo para fazer terapia online?</p>
                </motion.details>
                <motion.details
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <summary>Como posso encontrar um psicólogo para fazer terapia online?</summary>
                    <p>Você pode encontrar um psicólogo para fazer terapia online em nosso site. Basta preencher um cadastro rápido e informar suas necessidades. Em seguida, você receberá uma lista de psicólogos que atendem aos seus critérios.</p>
                </motion.details>
                <p className={Styles.faq_p}>Construa pontes para o bem-estar com <span className='CorRoxa'>InterMentes</span>. Atravesse para um futuro mais saudável e resiliente, onde a saúde mental de todos é a base para o sucesso coletivo.</p>
            </div>

            <div className={Styles.importante_duvidas}>
                <img src={maos} alt="" className={Styles.maos} />
                <p>Atenção: Este site não oferece tratamento ou aconselhamento imediato para pessoas em crise suicida. Em caso de crise, ligue para 188 (CVV)ou acesse www.cvv.org.br. Em caso de emergência, procure atendimento em um hospital mais próximo.</p>
            </div>

        </section>
    );
}

export default Duvidas;