import React , {Component}from 'react';

import SearchBar from '../componentes/InputWithLabel';

class ResidentesAdmin extends Component{


    render(){
        return(
            <>
            <SearchBar placeholder="buscar" label="ingrese residente:"></SearchBar>

            <table>
                <tr><th><button>Agregar</button></th> <th><textarea rows="5" cols="100" ></textarea>
                </th></tr>
                <tr><th><button>Actualizar</button></th> <th><button>Eliminar</button></th></tr>
            </table>
            
            </>
        )
    }
}

export default ResidentesAdmin;