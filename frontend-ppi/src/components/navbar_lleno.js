import React from "react";
import "../styles/styles.css";
import Foto2 from "../images/wallpaper-2.png";

class NavbarLleno extends React.Component {
  render() {
    return (
      <div>
        <nav
          class="navbar navbar-dark"
          style={{ backgroundImage: `url(${Foto2})` }}
        >
          <a className="navbar-brand" href="/">
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              class="bi bi-gear"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"
              />
              <path
                fill-rule="evenodd"
                d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"
              />
            </svg>
          </a>
          <h1 id="titulo_3">Alto Voltaje </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link texto_1" href="/familia-y-vivienda">
                  FAMILIA Y VIVIENDA
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link texto_1" href="/electrodomesticos">
                  ELECTRODOMÉSTICOS Y TIEMPO
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link texto_1" href="/consumo-de-energia">
                  CONSUMO PROMEDIO DE ENERGÍA
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link texto_1" href="/estrategias-ahorro">
                  ESTRATEGIAS DE AHORRO EN EL HOGAR
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link texto_1" href="/inicio">
                  INICIO
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link texto_1" href="/">
                  AJUSTES
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link texto_1" href="/">
                  SOPORTE TÉCNICO
                </a>
              </li>
              <div class="dropdown-divider"></div>
              <li className="nav-item active">
                <a className="nav-link texto_1" href="/">
                  CERRAR SESIÓN
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavbarLleno;
