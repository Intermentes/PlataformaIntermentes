import Styles from './Video.module.css'; // Importando o CSS Module
import { motion } from 'framer-motion'; 

function Video() {
    return (
        <section className={Styles.section_video}> 
            <motion.div className={Styles.div_video}
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            > {/* Usando as classes do CSS Module */}
                <video controls className={Styles.video}> {/* Usando as classes do CSS Module */}
                    <source type="video/mp4" />
                    Desculpe, seu navegador não suporta vídeos HTML5.
                </video>
            </motion.div>
        </section>
    );
}

export default Video;