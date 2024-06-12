import Styles from './Video.Module.css'; // Importando o CSS Module

function Video() {
    return (
        <section className={Styles.section_video}> {/* Usando as classes do CSS Module */}
            <div className={Styles.div_video}> {/* Usando as classes do CSS Module */}
                <video controls className={Styles.video}> {/* Usando as classes do CSS Module */}
                    <source src type="video/mp4" />
                    Desculpe, seu navegador não suporta vídeos HTML5.
                </video>
            </div>
        </section>
    );
}

export default Video;