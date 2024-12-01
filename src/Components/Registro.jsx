import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Style/Registro.module.css";
import { useNavigate } from "react-router-dom";

export const Registro = () => {
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [error, setError] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const [counter, setCounter] = useState(5);

  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [errorContraseña, setErrorContraseña] = useState("");

  const [mostrarContraseña, setMostrarContraseña] = useState(false);
  const [mostrarConfirmarContraseña, setMostrarConfirmarContraseña] =
    useState(false);

  const manejarCambioContraseña = (e) => {
    setContraseña(e.target.value);
  };

  const manejarCambioConfirmarContraseña = (e) => {
    setConfirmarContraseña(e.target.value);
  };

  const validarContraseñas = () => {
    if (contraseña !== confirmarContraseña) {
      setErrorContraseña("Las contraseñas no coinciden");
      return false;
    }
    setErrorContraseña("");
    return true;
  };

  const manejarCambioFecha = (e) => {
    setFechaNacimiento(e.target.value);
    validarFechaNacimiento(e.target.value);
  };

  const validarFechaNacimiento = (fecha) => {
    const hoy = new Date();
    const fechaNacimiento = new Date(fecha);
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();

    if (
      diferenciaMeses < 0 ||
      (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      edad--;
    }

    if (edad < 18) {
      setError("Debes tener al menos 18 años.");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const esValida = validarContraseñas();

    if (!esValida || error) {
      return;
    }
    setSuccessMessage("¡Registro completado con éxito!");
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    const timeoutId = setTimeout(() => {
      navigate("/login");
    }, 5000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  };

  return (
    <div className={`container mt-5`}>
      {successMessage && (
        <div className={`success-message ${styles.message}`}>
          <p>
            {successMessage}. Seras redirigido en {counter} segundos ...
          </p>
        </div>
      )}
      <div
        className={`row align-items-center ${styles.container}`}
        onSubmit={handleSubmit}
      >
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
                Registrate Ya
              </h2>
              <form>
                <div className="form-group">
                  <label
                    htmlFor="nombre"
                    className={`custom-label ${styles.label}`}
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    className={`form-control ${styles.input}`}
                    id="nombre"
                    placeholder="Ingrese un nombre de usuario"
                    required
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="fechanac"
                    className={`custom-label ${styles.label}`}
                  >
                    Fecha de Nacimiento
                  </label>
                  <input
                    type="date"
                    className={`form-control ${styles.fetch} ${
                      error ? "is-invalid" : ""
                    }`}
                    id="fechanac"
                    name="fechanac"
                    value={fechaNacimiento}
                    onChange={manejarCambioFecha}
                    required
                  />
                  {error && <div className="invalid-feedback">{error}</div>}
                </div>

                <div className="form-group">
                  <label
                    htmlFor="email"
                    className={`custom-label ${styles.label}`}
                  >
                    Correo Electroncio
                  </label>
                  <input
                    type="email"
                    className={`form-control ${styles.input}`}
                    id="email"
                    placeholder="Ingrese su correo electronico"
                    required
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="contraseña"
                    className={`custom-label ${styles.label}`}
                  >
                    Contraseña
                  </label>
                  <div className="input-group">
                    <input
                      type={mostrarContraseña ? "text" : "password"}
                      className={`form-control ${styles.input}`}
                      id="contraseña"
                      placeholder="Ingrese una contraseña"
                      value={contraseña}
                      onChange={manejarCambioContraseña}
                      required
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => setMostrarContraseña(!mostrarContraseña)}
                    >
                      <i
                        className={`bi ${
                          mostrarContraseña
                            ? "bi-eye-slash-fill"
                            : "bi-eye-fill"
                        }`}
                      ></i>
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label
                    htmlFor="confirmarContraseña"
                    className={`custom-label ${styles.label}`}
                  >
                    Confirmación de Contraseña
                  </label>
                  <div className="input-group">
                    <input
                      type={mostrarConfirmarContraseña ? "text" : "password"}
                      className={`form-control ${styles.input}`}
                      id="confirmarContraseña"
                      placeholder="Confirmar contraseña"
                      value={confirmarContraseña}
                      onChange={manejarCambioConfirmarContraseña}
                      required
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() =>
                        setMostrarConfirmarContraseña(
                          !mostrarConfirmarContraseña
                        )
                      }
                    >
                      <i
                        className={`bi ${
                          mostrarConfirmarContraseña
                            ? "bi-eye-slash-fill"
                            : "bi-eye-fill"
                        }`}
                      ></i>
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className={`btn btn-dark btn-block ${styles.button}`}
                >
                  Registrarte
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
