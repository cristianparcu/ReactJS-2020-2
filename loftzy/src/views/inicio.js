import React , {Component}from 'react';

import InputWithLabel from '../componentes/InputWithLabel';


class AgregarResidente extends Component {

    render(){
        return(
            <table>
                <tr>
                    <th>
                        <button>Atras</button>
                     
                    </th>
                    <th>
                       <InputWithLabel label="nombre"></InputWithLabel>
                       <InputWithLabel label="telefono"></InputWithLabel>
                       <InputWithLabel label="correo"></InputWithLabel>
                       <InputWithLabel label="usuario"></InputWithLabel>
                       <InputWithLabel label="contraseña"></InputWithLabel>
                       <button>Agregar</button>
                    </th>
                </tr>
            </table>
        )
    }
}


export default AgregarResidente;