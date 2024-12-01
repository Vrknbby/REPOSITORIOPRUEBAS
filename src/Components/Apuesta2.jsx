import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../Style/Apuesta.module.css";
import { useNavigate } from "react-router-dom";


export const Apuesta2 = () => {
  const [fecha, setFecha] = useState("");
  const [usuario, setUsuario] = useState("");
  const [monto, setMonto] = useState("");
  const [equipo, setEquipo] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    const hoy = new Date().toISOString().split("T")[0];
    setFecha(hoy);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccessMessage("¡Apuesta completado con éxito!");
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    const timeoutId = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  };
  const manejarCambioFecha = (e) => setFecha(e.target.value);
  const manejarCambioUsuario = (e) => setUsuario(e.target.value);
  const manejarCambioMonto = (e) => setMonto(e.target.value);
  const manejarCambioEquipo = (e) => setEquipo(e.target.value);

  return (
    <div className="container mt-5">
      {successMessage && (
        <div className={`success-message ${styles.message}`}>
          <p>
            {successMessage}. Seras redirigido en {counter} segundos ...
          </p>
        </div>
      )}
      <div className={`row align-items-center ${styles.container}`} onSubmit={handleSubmit}>
      <div className={styles.overlay}>
                  <div className={styles.teamInfo}>
                    <img
                      className={styles.escudos}
                      src="/img/u.png"
                      alt="Logo Equipo A"
                    />

                    

                    <img
                      className={styles.escudos}
                      src="/img/alianza.png"
                      alt="Logo Equipo B"
                    />
                  </div>
                </div>
        <div className="col-lg-6 text-center">
          <img
            src="/img/copa.png"
            alt="Logo"
            className={`img-fluid ${styles.imagen}`}
          />
        </div>
        <div className="col-lg-6">
          <div className={`card shadow-lg border-0 ${styles.card}`}>
            <div className="card-body">
              <h2 className={`card-title text-center ${styles.titulo}`}>
                Realiza tu Apuesta
              </h2>
              <form>
                <div className="form-group">
                  <label
                    htmlFor="usuario"
                    className={`custom-label ${styles.label}`}
                  >
                    Usuario
                  </label>
                  <input
                    type="text"
                    className={`form-control ${styles.input}`}
                    id="usuario"
                    placeholder="Ingrese un nombre de usuario"
                    value={usuario}
                    onChange={manejarCambioUsuario}
                    required
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="monto"
                    className={`custom-label ${styles.label}`}
                  >
                    Monto de Apuesta
                  </label>
                  <input
                    type="number"
                    className={`form-control ${styles.input}`}
                    id="monto"
                    placeholder="Ingrese el monto de la apuesta"
                    min="0.01"
                    step="0.01"
                    value={monto}
                    onChange={manejarCambioMonto}
                    required
                  />
                  {monto <= 0 && (
                    <div className="invalid-feedback">
                      El monto debe ser mayor que 0.
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label
                    htmlFor="fecha"
                    className={`custom-label ${styles.label}`}
                  >
                    Fecha de la Apuesta
                  </label>
                  <input
                    type="date"
                    className={`form-control ${styles.input}`}
                    id="fecha"
                    value={fecha}
                    onChange={manejarCambioFecha}
                    readOnly
                    required
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="equipo"
                    className={`custom-label ${styles.label}`}
                  >
                    Equipo al que se Apuesta
                  </label>
                  
                  <select
                    className="form-select"
                    id="metodo"
                    
                    required
                  >
                    <option value="" disabled selected>
                      Seleccione un Equipo
                    </option>
                    <option value="tarjeta">Universitario</option>
                    <option value="paypal">Alianza Lima</option>
                    
                  </select>
                </div>

                <button
                  type="submit"
                  className={`btn btn-dark btn-block ${styles.boton}`}
                >
                  Realizar Apuesta
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
