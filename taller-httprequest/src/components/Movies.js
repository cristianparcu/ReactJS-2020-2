import React from 'react';
import axios from 'axios';
import './Movies.css'

export default class Movies extends React.Component {
    state = {
        movies: [],
    }

    componentDidMount(){
        axios.get('./datos.json')
            .then(response => {
                this.setState({ movies: response.data});
            });
    }

    render(){
        return(
            <body>
            <div className="container">
            <ol>
                {this.state.movies.map(movie => <li key={movie.id}>ID: {movie.id}<ul><li>Name: {movie.name}</li><li>Descripcion: {movie.description}</li><img src={movie.ima} alt ="tor"></img></ul></li>)}
            </ol>
            </div>
            </body>
            
        )
    }
}