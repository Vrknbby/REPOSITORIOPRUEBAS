import React from "react";
import styles from "../Style/HistorialApuestas.module.css";

export const HistorialApuestas = () => {
  return (
    <div>
      <h1 className={styles.titulo}>Historial de Apuestas</h1>
      <div className="container mt-5">
      
        <div className={`match-banner ${styles.banner}`}>
          <div
            className={`match-details d-flex align-items-center justify-content-center ${styles.detalles}`}
          >
            <div className={`team team-1 d-flex align-items-center ${styles.equipo}`}>
            <span className={`winner ${styles.winner}`}>Ganador</span>
              <img
                src="/img/river.png"
                alt="Equipo 1"
                className={`team-logo ${styles.logo2}`}
              />
              
              <div className={`team-info ms-2 ${styles.info}`}>
                <span className={`team-name ${styles.name}`}><b>River Plate</b></span>
                <span className={`score ${styles.score}`}>2</span>
              </div>
            </div>

            <div className={`vs mx-3 ${styles.versus}`}>
              <span>vs</span>
            </div>

            <div className={`team team-2 d-flex align-items-center ${styles.equipo}`}>
              <div className={`team-info me-2 ${styles.info}`}>
                <span className={`team-name ${styles.name}`}><b>Boca Juniors</b></span>
                <span className={`score ${styles.score}`}>1</span>
              </div>
              <img
                src="/img/boca.png"
                alt="Equipo 2"
                className={`team-logo ${styles.logo}`}
              />
              <span className={`loser ${styles.loser}`}>Perdedor</span>
            </div>
          </div>
          <div className={`match-info mt-3 ${styles.matchinfo}`}>
            <span className={`match-date ${styles.matchdate}`}>
              17 de agosto de 2024
            </span>
            <span className={`match-result ${styles.matchresult}`}>
              <span className={styles.resultado}><b>Equipo Apostado:</b> River Plate</span><br />
              <span className={styles.resultado}><b>Estado de la Apuesta:</b> Ganado</span><br />
              <span className={styles.resultado}><b>Tasa de la Apuesta:</b> 0.5</span><br />
              <span className={styles.resultado}><b>Monto Apostado:</b> s/100</span><br />
              <span className={styles.resultado}><b>Monto Ganado:</b> s/50</span><br />
              <span className={styles.resultado}><b>Ganancia Total:</b> s/150</span><br />

            </span>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};
