import React , {Component}from 'react';

import InputWithLabel from '../componentes/InputWithLabel';
import ButtonAdmin from '../componentes/ButtonMenu';


class inicio extends Component {

    render(){
        return(
            <div>
                <InputWithLabel label="nombre"></InputWithLabel>
                <InputWithLabel label="Contraseña"></InputWithLabel>
                
            </div>
            <div>
                <ButtonAdmin label="Acceder" />
            </div>
         
                      
        )
    }
}


export default inicio;