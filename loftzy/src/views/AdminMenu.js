import React, { Component } from 'react';

import ButtonAdmin from '../componentes/ButtonMenu';

class AdminMenu extends Component {

    render() {
        return (
            <div >
                <table>
                    <td>
                    <ButtonAdmin label="Residentes" />
                    <ButtonAdmin label="Pago administracion" />
                    </td>
                    <td>
                    <ButtonAdmin label="Registro visitantes" />
                    <ButtonAdmin label="celadores" />
                    </td>
                </table>
            </div>
        )
    }
}

export default AdminMenu