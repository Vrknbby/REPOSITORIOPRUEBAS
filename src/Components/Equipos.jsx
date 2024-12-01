import React from "react";
import styles from "../Style/Equipos.module.css";
export const Equipos = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className={`team-info-card ${styles.card}`}>
            <div
              className={`team-info-header d-flex align-items-center ${styles.header}`}
            >
              <img
                src="/img/barcelona.png"
                alt="Equipo"
                className={`team-logo ${styles.logo}`}
              />
              <div className={`team-details ms-3 ${styles.details}`}>
                <span className={`team-name ${styles.name}`}>
                Barcelona
                </span>
                <span className={`team-country ${styles.country}`}>
                  País: España
                </span>
                <span className={`team-founded ${styles.founded}`}>
                  Fundado: 1899
                </span>
                <span className={`team-owner ${styles.owner}`}>
                  Presidente: Joan Laporta
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className={`team-info-card ${styles.card}`}>
            <div
              className={`team-info-header d-flex align-items-center ${styles.header}`}
            >
              <img
                src="/img/alianza.png"
                alt="Equipo"
                className={`team-logo ${styles.logo}`}
              />
              <div className={`team-details ms-3 ${styles.details}`}>
                <span className={`team-name ${styles.name}`}>
                Alianza Lima
                </span>
                <span className={`team-country ${styles.country}`}>
                  País: Perú
                </span>
                <span className={`team-founded ${styles.founded}`}>
                  Fundado: 1901
                </span>
                <span className={`team-owner ${styles.owner}`}>
                  Presidente: César Torres
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className={`team-info-card ${styles.card}`}>
            <div
              className={`team-info-header d-flex align-items-center ${styles.header}`}
            >
              <img
                src="/img/boca.png"
                alt="Equipo"
                className={`team-logo ${styles.logo}`}
              />
              <div className={`team-details ms-3 ${styles.details}`}>
                <span className={`team-name ${styles.name}`}>
                Boca Juniors
                </span>
                <span className={`team-country ${styles.country}`}>
                  País: Argentina
                </span>
                <span className={`team-founded ${styles.founded}`}>
                  Fundado: 1905
                </span>
                <span className={`team-owner ${styles.owner}`}>
                  Presidente: Jorge Amor Ameal
                </span>
              </div>
            </div>
          </div>
        </div>

       

        <div className="col-md-4">
          <div className={`team-info-card ${styles.card}`}>
            <div
              className={`team-info-header d-flex align-items-center ${styles.header}`}
            >
              <img
                src="/img/realmadrid.png"
                alt="Equipo"
                className={`team-logo ${styles.logo}`}
              />
              <div className={`team-details ms-3 ${styles.details}`}>
                <span className={`team-name ${styles.name}`}>
                Real Madrid
                </span>
                <span className={`team-country ${styles.country}`}>
                  País: España
                </span>
                <span className={`team-founded ${styles.founded}`}>
                  Fundado: 1902
                </span>
                <span className={`team-owner ${styles.owner}`}>
                  Presidente: Florentino Pérez
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className={`team-info-card ${styles.card}`}>
            <div
              className={`team-info-header d-flex align-items-center ${styles.header}`}
            >
              <img
                src="/img/river.png"
                alt="Equipo"
                className={`team-logo ${styles.logo}`}
              />
              <div className={`team-details ms-3 ${styles.details}`}>
                <span className={`team-name ${styles.name}`}>
                River Plate
                </span>
                <span className={`team-country ${styles.country}`}>
                  País: Argetina
                </span>
                <span className={`team-founded ${styles.founded}`}>
                  Fundado: 1901
                </span>
                <span className={`team-owner ${styles.owner}`}>
                  Presidente: Jorge Brito
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className={`team-info-card ${styles.card}`}>
            <div
              className={`team-info-header d-flex align-items-center ${styles.header}`}
            >
              <img
                src="/img/u.png"
                alt="Equipo"
                className={`team-logo ${styles.logo}`}
              />
              <div className={`team-details ms-3 ${styles.details}`}>
                <span className={`team-name ${styles.name}`}>
                Universitario de Deportes
                </span>
                <span className={`team-country ${styles.country}`}>
                  País: Perú
                </span>
                <span className={`team-founded ${styles.founded}`}>
                  Fundado: 1924
                </span>
                <span className={`team-owner ${styles.owner}`}>
                  Presidente: Jean Ferrari
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
