import React from "react";
import "../styles/styles.css";
import Titulo2 from "../components/titulo_2";
import NuevaContrasena from "../components/nueva_contrasena";
import Foto2 from "../images/wallpaper-2.png";

class ConfiguraContraseña extends React.Component {
  render() {
    return (
      <div id="pantalla_2" style={{ backgroundImage: `url(${Foto2})` }}>
        <Titulo2 titulo="Configura tu Nueva Contraseña" />
        <br />
        <br />
        <NuevaContrasena />
      </div>
    );
  }
}

export default ConfiguraContraseña;
