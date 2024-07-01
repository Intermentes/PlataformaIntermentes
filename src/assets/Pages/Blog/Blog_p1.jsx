import Styles from './Blog_p1.module.css'; // Importando o CSS Module
import icon1 from '../../Images/BlogImg/Podcasts1.png';
import icon2 from '../../Images/BlogImg/Podcasts2.png';
import icon3 from '../../Images/BlogImg/Podcasts3.png';
import icon4 from '../../Images/BlogImg/Podcasts4.png';

function Blog_P1() {
    return (
        <section className={Styles.section_pg1}> {/* Usando as classes do CSS Module */}
            <h2>Podcasts</h2>

            <div className={Styles.container_pg1}>
                <div className={Styles.imgBox}>
                    <img src={icon1} alt="" />
                </div>
                <div>
                    <h3>Psicologia Preta- Na Luta Contra o Racismo</h3>
                    <span>Nelson Gentil</span>
                    <p>Podem chegar meu povo o Podcast Psicologia Preta é nosso! Aqui iremos compartilhar questoes de identidade, coletividade, racismo estrutural, promoção de saúde, iremos perpassar por diversas encruzilhadas.....</p>
                    <a href='https://www.listennotes.com/podcasts/psicologia-preta-na-luta-contra-o-racismo-1YJKZwCkrjm/' target='blank'>Ouça Agora</a>
                </div>
            </div>

            <div className={Styles.container_pg1}>
                <div className={Styles.imgBox}>
                    <img src={icon2} alt="" />
                </div>
                <div>
                    <h3>Psicologia Sincera</h3>
                    <span>Ana Luiza Braz e Ana Theresa Cavalcanti</span>
                    <p>Você já se autossabotou? Vive em relacionamentos complicados? Segue entre tapas e beijos com a sua família? Já esteve perdida em algum momento na sua carreira? Você não está sozinho! Em "Psicologia Sincera" as psicólogas Ana Luiza Braz e Ana Theresa Cavalcanti comentam os mais diversos assuntos do nosso cotidiano sempre com uma opinião sincera.</p>
                    <a href='https://www.psicologiasincera.com.br' target='blank'>Ouça Agora</a>
                </div>

            </div>

            <div className={Styles.container_pg1}>
                <div className={Styles.imgBox}>
                    <img src={icon3} alt="" />
                </div>
                <div>
                    <h3>Terapia no dia-a-dia</h3>
                    <span>Psi Bianca Garcia</span>
                    <p>Me chamo Bianca Garcia. Sou psicóloga clínica, especialista em Terapia Cognitivo Comportamental e a minha missão no Spotify é trazer doses de Psicologia pra te ajudar no dia a dia....</p>
                    <a href='https://open.spotify.com/show/60LN9oZJ4lVprp24g05arh' target='blank'>Ouça Agora</a>
                </div>

            </div>

            <div className={Styles.container_pg1}>
                <div className={Styles.imgBox}>
                    <img src={icon4} alt="" />
                </div>
                <div>
                    <h3>Culpa do Cérebro</h3>
                    <span>Andrei Mayer de Oliveira</span>
                    <p>O “Culpa do Cérebro” é o podcast que discute neurociência de forma simples e fácil. Ele é apresentado pelo professor doutor Andrei Mayer e no seu novo formato tem como objetivo trazer convidados da área acadêmica para que você consiga aplicar todo o conhecimento adquirido no seu dia a dia....</p>
                    <a href='https://open.spotify.com/show/6GolJtdp3e6PZ27bHTponh' target='blank'>Ouça Agora</a>
                </div>

            </div>

        </section>
    );
}

export default Blog_P1;