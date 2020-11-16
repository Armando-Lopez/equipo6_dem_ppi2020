import React, { useEffect } from "react";
import axios from "axios";
import "../styles/styles.css";
import Foto1 from "../images/wallpaper-1.png";
import Titulo1 from "../components/titulo_1";
import InicioSesion from "../components/inicio_sesion";

const Bienvenida = () => {
	let data = {
		name: "Diego",
		lastName: "Lopez",
		age: 21,
	};
	useEffect(() => {
		axios.post("https://lcs4k.sse.codesandbox.io/api/test", data).then((res) => {
			console.log(res);
		});
	}, []);

	return (
		<div id="pantalla_1" style={{ backgroundImage: `url(${Foto1})` }}>
			<Titulo1 />
			<br />
			<InicioSesion />
		</div>
	);
};

export default Bienvenida;
