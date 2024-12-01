import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../Style/Inicio.module.css";
import { useLocation, useNavigate } from "react-router-dom";

export const Inicio = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { successMessage } = location.state || {};
  const [showMessage, setShowMessage] = useState(true);
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [successMessage]);

  return (
    <div>
      {showMessage && successMessage && (
        <div className={`success-message ${styles.message}`}>
          <p>{successMessage}</p>
        </div>
      )}
      
      <div
        id="carouselExampleIndicators"
        className="carousel slide mt-4"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className={`container ${styles.container}`}>
          <div className={`carousel-inner ${styles.img}`}>
            <div className="carousel-item active">
              <img
                src="/img/partido1.png"
                className="d-block w-100"
                alt="Partido 1"
              />
              <div
                className={`carousel-caption d-none d-md-block ${styles.h5}`}
              >
                <h5>Próximo Partido: Universitario vs Alianza Lima</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/img/partido2.png"
                className="d-block w-100"
                alt="Partido 2"
              />
              <div
                className={`carousel-caption d-none d-md-block ${styles.h5}`}
              >
                <h5>¡Apuesta Ya y Gana!</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/img/partido3.png"
                className="d-block w-100"
                alt="Partido 3"
              />
              <div
                className={`carousel-caption d-none d-md-block ${styles.h5}`}
              >
                <h5>Resultados en Vivo</h5>
              </div>
            </div>
          </div>
        </div>
        <button
          className={`carousel-control-prev ${styles.controlprev}`}
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className={`carousel-control-prev-icon ${styles.prev}`}
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className={`carousel-control-next ${styles.controlnext}`}
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className={`carousel-control-next-icon ${styles.next}`}
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className={`live-matches py-5 ${styles.matches}`}>
        <div className="container">
          <h2 className="text-center mb-4">
            <b>Partidos en Vivo</b>
          </h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className={`card ${styles.card}`}>
                <div className={styles.overlay}>
                  <div className={styles.teamInfo}>
                    <img
                      className={styles.escudos}
                      src="/img/barcelona.png"
                      alt="Logo Equipo A"
                    />

                    <span className={styles.vsText}>vs</span>

                    <img
                      className={styles.escudos}
                      src="/img/realmadrid.png"
                      alt="Logo Equipo B"
                    />
                  </div>
                </div>
                <img
                  src="/img/fondo.png"
                  className={`card-img-top ${styles.fondo}`}
                  alt="Equipo A vs Equipo B"
                />
                <div className="card-body text-center">
                  <h5 className={`card-title ${styles.teamName}`}>
                    ¡Barcelona vs Real Madrid!
                  </h5>
                  <p className="card-text">
                    <span className="badge bg-success">EN VIVO</span>
                  </p>
                  <Link to="/apuesta">
                    <a href="#" className={`btn btn-danger ${styles.apostar}`}>
                      APOSTAR
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className={`card ${styles.card}`}>
                <div className={styles.overlay}>
                  <div className={styles.teamInfo}>
                    <img
                      className={styles.escudos}
                      src="/img/u.png"
                      alt="Logo Equipo A"
                    />

                    <span className={styles.vsText}>vs</span>

                    <img
                      className={styles.escudos}
                      src="/img/alianza.png"
                      alt="Logo Equipo B"
                    />
                  </div>
                </div>
                <img
                  src="/img/fondo.png"
                  className={`card-img-top ${styles.fondo}`}
                  alt="Equipo A vs Equipo B"
                />
                <div className="card-body text-center">
                  <h5 className={`card-title ${styles.teamName}`}>
                    ¡Universitario vs Alianza Lima!
                  </h5>
                  <p className="card-text">
                    <span className="badge bg-warning">EN ESPERA</span>
                  </p>
                  <Link to="/apuesta2">
                  <a href="#" className={`btn btn-danger ${styles.apostar}`}>
                    APOSTAR
                  </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className={`card ${styles.card}`}>
                <div className={styles.overlay}>
                  <div className={styles.teamInfo}>
                    <img
                      className={styles.escudos}
                      src="/img/river.png"
                      alt="Logo Equipo A"
                    />

                    <span className={styles.vsText}>vs</span>

                    <img
                      className={styles.escudos}
                      src="/img/boca.png"
                      alt="Logo Equipo B"
                    />
                  </div>
                </div>
                <img
                  src="/img/fondo.png"
                  className={`card-img-top ${styles.fondo}`}
                  alt="Equipo A vs Equipo B"
                />
                <div className="card-body text-center">
                  <h5 className={`card-title ${styles.teamName}`}>
                    ¡River Plate vs Boca Juniors!
                  </h5>
                  <p className="card-text">
                    <span className="badge bg-secondary">TERMINADO</span>
                  </p>
                  <a className={`btn btn-dark ${styles.apostar}`} disabled>
                    APOSTAR
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
