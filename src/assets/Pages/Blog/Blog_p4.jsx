
import './Blog_p4.css'
import icon1 from '../../Images/BlogImg/meditação1.png';


function Blog_P2(){
    return(
        <section className='section-pg2'>
            <h2>Recomendação</h2>
            <div className="div-pg2">
                <div className='container-pg2'>
                    <img src={icon1} alt="" />
                    <div>
                        <h3>Cromoterapia: o que é, benefícios e como é feita</h3>
                        <p>A Cromoterapia é o tratamento que, por intermédio das cores, estabelece o equilíbrio e a harmonia entre corpo, mente e emoções. Cada cor tem sua função terapêutica específica e atua em um chakra ou um órgão do corpo humano.</p>
                        <button>Saiba Mais</button>
                    </div>
                    
                </div>
                
                

            </div>

            <div className="div-pg2">
                <div className='container-pg2'>
                    <img src={icon1} alt="" />
                    <div>
                        <h3>Biodança: psicologia e dança promovem equilíbrio psíquico</h3>
                        <p>Atividade induz vivências integradas por meio da música e dança, atuando com movimentos naturais do corpo provocados pela musicalidade</p>
                        <button>Saiba Mais</button>
                    </div>
                </div>

            </div>

            <div className="div-pg2">
                <div className='container-pg2'>
                    <img src={icon1} alt="" />
                    <div>
                        <h3>Musicoterapia: sobre os sintomas de ansiedade e depressão </h3>
                        <p>Efeitos da musicoterapia sobre os sintomas de ansiedade e depressão em adultos com diagnóstico de transtornos mentais</p>
                        <button>Saiba Mais</button>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Blog_P2

