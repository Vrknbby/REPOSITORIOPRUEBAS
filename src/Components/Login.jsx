
import { Link } from "react-router-dom";
import styles from "../Style/Login.module.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

export const Login = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    login();
    // Redirigir y pasar el mensaje de éxito
    navigate("/", { state: { successMessage: "¡Inicio de Sesion con éxito!" } });
  };

  return (
    <div className={`container mt-5`}>
      <div className={`row align-items-center ${styles.container}`} onSubmit={handleSubmit}>
        <div className="col-lg-6 text-center">
          <img
            src="/img/logo.png"
            alt="Model"
            className={`img-fluid ${styles.image}`}
          />
        </div>
        <div className="col-lg-6">
          <div className={`card shadow-lg border-0 ${styles.card}`}>
            <div className="card-body">
              <h2 className={`card-title text-center ${styles.title}`}>
                Inicio de Sesion
              </h2>
              <form>
                <div className="form-group">
                  <label
                    htmlFor="email"
                    className={`custom-label ${styles.label}`}
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className={`form-control ${styles.input}`}
                    id="email"
                    placeholder="Ingrese su Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="password"
                    className={`custom-label ${styles.label}`}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${styles.input}`}
                    id="password"
                    placeholder="Ingrese su Contraseña"
                    required
                  />
                  <br />
                  <span>
                    Si no esta registrado, <Link to="/registrate"><a className={`${styles.registrate}`} href="#">Registrate aqui</a></Link>
                  </span>
                </div>
                
                <button
                  type="submit"
                  className={`btn btn-dark btn-block ${styles.button}`}
                >
                  Ingresar
                </button>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
