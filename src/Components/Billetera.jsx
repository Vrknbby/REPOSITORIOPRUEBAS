import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../Style/Billetera.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Billetera = () => {
  const [metodo, setMetodo] = useState("");

  const manejarCambioMetodo = (e) => {
    setMetodo(e.target.value);
  };

  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const [counter, setCounter] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    setSuccessMessage("¡Ingreso de fondos con éxito!");
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    const timeoutId = setTimeout(() => {
      navigate("/");
    }, 4000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  };

  return (
    <div className="container mt-5">
      {successMessage && (
        <div className={`success-message ${styles.message}`}>
          <p>
            {successMessage}. Seras redirigido en {counter} segundos ...
          </p>
        </div>
      )}
      <div className={`form-container ${styles.contenedor}`} onSubmit={handleSubmit}>
        <h2 className={`form-title text-center ${styles.titulo} `}>
          Ingresar Fondos al Monedero Virtual
        </h2>
        <form>
          <div className="mb-3">
            <label htmlFor="usuario" className={`form-label ${styles.label}`}>
              Usuario
            </label>
            <input
              type="text"
              className="form-control"
              id="usuario"
              placeholder="Ingrese su nombre de usuario"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="monto" className={`form-label ${styles.label}`}>
              Monto
            </label>
            <input
              type="number"
              className="form-control"
              id="monto"
              placeholder="Ingrese el monto a ingresar"
              min="0.01"
              step="0.01"
              required
            />
            <div className={`invalid-feedback ${styles.invalido}`}>
              El monto debe ser mayor que 0.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="metodo" className={`form-label ${styles.label}`}>
              Método de Pago
            </label>
            <select
              className="form-select"
              id="metodo"
              value={metodo}
              onChange={manejarCambioMetodo}
              required
            >
              <option value="" disabled>
                Seleccione un método de pago
              </option>
              <option value="tarjeta">Tarjeta de Crédito/Débito</option>
              <option value="paypal">PayPal</option>
              <option value="transferencia">Transferencia Bancaria</option>
            </select>
          </div>

          {/* Detalles para Tarjeta de Crédito/Débito */}
          {metodo === "tarjeta" && (
            <div id="tarjeta">
              <div className="mb-3">
                <label htmlFor="numeroTarjeta" className={`form-label ${styles.label}`}>
                  Número de Tarjeta
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="numeroTarjeta"
                  placeholder="Ingrese el número de tarjeta"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="fechaExpiracion" className={`form-label ${styles.label}`}>
                  Fecha de Expiración
                </label>
                <input
                  type="month"
                  className="form-control"
                  id="fechaExpiracion"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cvv" className={`form-label ${styles.label}`}>
                  CVV
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cvv"
                  placeholder="Ingrese el CVV"
                  required
                />
              </div>
            </div>
          )}

          {/* Detalles para PayPal */}
          {metodo === "paypal" && (
            <div id="paypal">
              <div className="mb-3">
                <label htmlFor="emailPaypal" className={`form-label ${styles.label}`}>
                  Correo Electrónico de PayPal
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailPaypal"
                  placeholder="Ingrese su correo de PayPal"
                  required
                />
              </div>
            </div>
          )}

          {/* Detalles para Transferencia Bancaria */}
          {metodo === "transferencia" && (
            <div id="transferencia">
              <div className="mb-3">
                <label htmlFor="banco" className={`form-label ${styles.label}`}>
                  Banco
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="banco"
                  placeholder="Ingrese el nombre del banco"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="numeroCuenta" className={`form-label ${styles.label}`}>
                  Número de Cuenta
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="numeroCuenta"
                  placeholder="Ingrese el número de cuenta"
                  required
                />
              </div>
            </div>
          )}
          
          <button type="submit" className={`btn btn-primary btn-block ${styles.button}`}>
            Ingresar Fondos
          </button>
          
        </form>
      </div>
    </div>
  );
};
