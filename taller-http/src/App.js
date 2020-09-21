import React from "react";
import axios from "axios";
import Bicicleta from "./Components/bicicleta/bicicleta";
import "./App.css";

export default class App extends React.Component {
	constructor() {
		super();
		this.state = { bicicletas: [] };
	}

	componentDidMount() {
		axios
			.get("https://api.npoint.io/19b4fe4ea67910edf35d", {})
			.then((res) => {
				const data = res.data;
				this.setState({ bicicletas: data.Bicicletas });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div className="main">
        <h1 className='title'>Bicicletería Posada</h1>
				{this.state.bicicletas.map((item) => (
					<Bicicleta nombre={item.nombre} precio={item.precio} imagen={item.imagen} />
				))}
			</div>
		);
	}
}
