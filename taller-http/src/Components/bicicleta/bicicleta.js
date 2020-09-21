import React from "react";
import styles from "./bicicleta.module.css";

export default function Bicicleta(props) {
	return (
		<div className={`${styles.tarjeta} ${styles.hvrGrow}`}>
			<img className={styles.img} src={props.imagen} />
			<div className={styles.txt}>
				<p>{props.nombre}</p>
				<p>{props.precio}</p>
			</div>
		</div>
	);
}
