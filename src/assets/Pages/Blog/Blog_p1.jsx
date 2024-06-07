import './Blog_p1.css'
import icon1 from '../../Images/BlogImg/Podcasts1.png';
import icon2 from '../../Images/BlogImg/Podcasts2.png';
import icon3 from '../../Images/BlogImg/Podcasts3.png';
import icon4 from '../../Images/BlogImg/Podcasts4.png';

function Blog_P1(){
    return(

        <section className='section-pg1'>
            <h2>Podcasts</h2>
            <div className="div-pg1">
                <div className='container-pg1'>
                    <img src={icon1} alt="" />
                    <div>
                        <h3>Psicologia Preta- Na Luta Contra o Racismo</h3>
                        <span>Nelson Gentil</span>
                        <p>Podem chegar meu povo o Podcast Psicologia Preta é nosso! Aqui iremos compartilhar questoes de identidade, coletividade, racismo estrutural, promoção de saúde, iremos perpassar por diversas encruzilhadas.....</p>
                    </div>
                    <button>Ouça Agora</button>
                </div>

            </div>

            <div className="div-pg1">
                <div className='container-pg1'>
                    <img src={icon2} alt="" />
                    <div>
                        <h3>Psicologia Sincera</h3>
                        <span>Ana Luiza Braz e Ana Theresa Cavalcanti</span>
                        <p>Você já se autossabotou? Vive em relacionamentos complicados? Segue entre tapas e beijos com a sua família? Já esteve perdida em algum momento na sua carreira? Você não está sozinho! Em "Psicologia Sincera" as psicólogas Ana Luiza Braz e Ana Theresa Cavalcanti comentam os mais diversos assuntos do nosso cotidiano sempre com uma opinião sincera.</p>
                    </div>
                    <button>Ouça Agora</button>
                </div>

            </div>

            <div className="div-pg1">
                <div className='container-pg1'>
                    <img src={icon3} alt="" />
                    <div>
                        <h3>Terapia no dia-a-dia</h3>
                        <span>Psi Bianca Garcia</span>
                        <p>Me chamo Bianca Garcia. Sou psicóloga clínica, especialista em Terapia Cognitivo Comportamental e a minha missão no Spotify é trazer doses de Psicologia pra te ajudar no dia a dia....</p>
                    </div>
                    <button>Ouça Agora</button>
                </div>

            </div>

            <div className="div-pg1">
                <div className='container-pg1'>
                    <img src={icon4} alt="" />
                    <div>
                        <h3>Culpa do Cérebro</h3>
                        <span>Andrei Mayer de Oliveira</span>
                        <p>O “Culpa do Cérebro” é o podcast que discute neurociência de forma simples e fácil. Ele é apresentado pelo professor doutor Andrei Mayer e no seu novo formato tem como objetivo trazer convidados da área acadêmica para que você consiga aplicar todo o conhecimento adquirido no seu dia a dia....</p>
                    </div>
                    <button>Ouça Agora</button>
                </div>

            </div>
        </section>


    );
}
export default Blog_P1;