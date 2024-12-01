import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Style/Navegacion.module.css";
import { useAuth } from "../AuthContext";


export const Navegacion = () => {
  const { isLoggedIn, logout } = useAuth();


  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-dark bg-dark ${styles.navbar}`}
      >
        <div class="container-fluid">
          <button
            class="btn btn-dark me-3"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebar"
            aria-controls="sidebar"
          >
            <span class="navbar-toggler-icon"></span>
            <img className={`${styles.img}`} src="/img/logo.png"></img>
          </button>

          <a className={`navbar-brand ${styles.hola}`} href="#">
            <Link to="/">
              <span className={`badge text-bg-danger ${styles.logo}`}>
                APUESTA FACIL
              </span>
            </Link>
          </a>

          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {!isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <Link to="/login">
                      <a className={`nav-link active ${styles.button2}`} href="#">
                        Iniciar Sesión
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item nav-pills">
                    <Link to="/registrate">
                      <a
                        className={`nav-link active bg-danger me-1 ${styles.button}`}
                        href="#"
                      >
                        Registrarse
                      </a>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                <li className="nav-item">
                    <Link to="/billetera">
                      <a className={`nav-link active ${styles.button2}`} href="#">
                        Fondo: S/150.00
                      </a>
                    </Link>
                  </li>
                
                <li className="nav-item nav-pills">
                  <Link to="/">
                  <button
                    className={`nav-link active bg-danger me-1 ${styles.button}`}
                    onClick={logout}
                  >
                    Cerrar Sesión
                  </button>
                  </Link>
                </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div
        class="offcanvas offcanvas-start bg-dark text-white"
        tabindex="-1"
        id="sidebar"
        aria-labelledby="sidebarLabel"
      >
        <div class="offcanvas-header">
          <Link to="/">
          <h5 className={`offcanvas-title ${styles.mibilletera}`} id="sidebarLabel">
            Menú
          </h5>
          </Link>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav">
            
            <li className="nav-item">
              <Link to="/billetera">
              <a className={`nav-link link-danger ${styles.mibilletera}`} href="#">
                Mi Billetera
              </a>
              </Link>
            </li>
            <li class="nav-item">
            <Link to="/historial">
              <a className={`nav-link link-danger ${styles.mibilletera}`} href="#">
                Historial de Apuestas
              </a>
              </Link>
            </li>
            <li class="nav-item">
            <Link to="/equipos">
              <a class={`nav-link link-danger ${styles.mibilletera}`} href="#">
                Equipos
              </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
