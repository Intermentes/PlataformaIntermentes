import styles from "./Valores.module.css";
import { useState } from "react";

function Valores() {
  const [isOpen, setIsOpen] = useState({});

  const toggleDetails = (index) => {
    setIsOpen({ ...isOpen, [index]: isOpen[index] });
  };
  return (
    <section className={styles.valores}>
      <section className={styles.duvidas}>
        <details open={isOpen[0]} onClick={() => toggleDetails(0)}>
          <summary className={styles.summary}>Missão</summary>
          <p className={styles.paragraph}>
            Garantir que o trabalho do psicólogo chegue a todos os públicos,
            assegurando que o cuidado com a saúde mental deixe de ser visto como
            privilégio e passe a ser considerado uma necessidade de todos.
          </p>
        </details>
        <details open={isOpen[1]} onClick={() => toggleDetails(1)}>
          <summary className={styles.summary}>Valores</summary>
          <p className={styles.paragraph}>
            Diversidade de profissionais com diferentes especialidades, valor
            acessível para todos os públicos e gratuidade no cuidado com a saúde
            mental.
          </p>
        </details>
        <details open={isOpen[2]} onClick={() => toggleDetails(2)}>
          <summary className={styles.summary}>Visão</summary>
          <p className={styles.paragraph}>
            Otimizar a vida do psicólogo e do paciente, gerar contato por
            identificação e cuidados mais especializados, disponibilizando um
            espaço onde os psicólogos se sintam confortáveis para fornecer seus
            serviços e possibilitando que todos os públicos consigam encontrar
            esses psicólogos e fazer o melhor match com o especialista que vai
            atendê-los.
          </p>
        </details>
        <details open={isOpen[3]} onClick={() => toggleDetails(3)}>
          <summary className={styles.summary}>Objetivo</summary>
          <p className={styles.paragraph}>
            Quebrar os estigmas estabelecidos hoje na psicologia e garantir que
            a visão de privilégio seja superada, fazendo com que todos entendam
            que o cuidado com a saúde mental é necessário no nosso dia a dia.
          </p>
        </details>
      </section>
    </section>
  );
}

export default Valores;
