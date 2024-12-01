import React from "react";
import { Link } from "react-router-dom";
import styles from "../Style/Footer.module.css";

export const Footer = () => {
  return (
    <div>
      <footer className={`bg-dark text-white text-center py-3 ${styles.footer}`}>
      
        <p className={`${styles.mensaje}`}>&copy; 2024 Sitio de Apuestas. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};
