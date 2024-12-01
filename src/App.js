import React from "react";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { Navegacion } from "./Components/Navegacion";
import { Registro } from "./Components/Registro";
import { Inicio } from "./Components/Inicio";
import { Login } from "./Components/Login";
import { Apuesta } from "./Components/Apuesta";
import { Apuesta2 } from "./Components/Apuesta2";
import { Billetera } from "./Components/Billetera";
import { HistorialApuestas } from "./Components/HistorialApuestas";
import { Equipos } from "./Components/Equipos";
import { AuthProvider } from './AuthContext';
export const App = () => {
  return (
    <AuthProvider>
    <Router>
      <div className="d-flex flex-column min-vh-100">
      
        <Navegacion></Navegacion>
        <div className="flex-grow-1">
        <Routes>
        <Route path="/registrate" element={<Registro></Registro>} />
        <Route path="/" element={<Inicio></Inicio>} /> 
        <Route path="/login" element={<Login></Login>} /> 
        <Route path="/apuesta" element={<Apuesta></Apuesta>} /> 
        <Route path="/apuesta2" element={<Apuesta2></Apuesta2>} /> 
        <Route path="/billetera" element={<Billetera></Billetera>} /> 
        <Route path="/historial" element={<HistorialApuestas></HistorialApuestas>} /> 
        <Route path="/equipos" element={<Equipos></Equipos>} /> 
        </Routes>
        </div>
        <Footer></Footer>
      </div>
    </Router>
    </AuthProvider>
  );
};

export default App;
