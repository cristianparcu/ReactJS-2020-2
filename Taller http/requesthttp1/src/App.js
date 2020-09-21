import React, {Component} from 'react';
import './App.css';
import axios from "axios";
import Cart from "./Components/cart";

class App extends Component {

    state = {
        people: [],

    }


    componentDidMount() {
        axios.get('./MOCK_DATA.json').then(response => {
            const people = response.data;
            console.log(people);

            const updatedPersons = people.map(person => {
                return {
                    id: person.id,
                    first_name: person.first_name,
                    last_name: person.last_name,
                    email: person.email
                }
            });
            this.setState({people: updatedPersons});
        })
    }

    render() {
        return (
            <>
            <div className="orden">
                <h1>Mes amis internationaux</h1>
                {this.state.people.map(item => {
                    return(
                        <Cart key={item.id} first_name={item.first_name} last_name={item.last_name} email={item.email} />
                    )
                })}
            </div>



    </>
        );
    }
}

export default App;
