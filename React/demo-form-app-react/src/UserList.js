import React, { Component } from 'react';
import User from './User';

class UserList extends Component {
    render(){
        return(
            <ul>
                {this.props.users.map(u => {
                    return(
                        <User 
                            key={u.id}
                            name={u.name}
                            email={u.email}
                        />
                    );
                })}
            </ul>

        );
    }
}


export default UserList;

/*
El código del componente anterior renderizará una lista de usuarios usando el método map, con el cual itera sobre cada uno de los elementos del array de usuarios que contiene la propiedad this.props.users, esta prop será recibida desde el componente App.

Map devuelve por cada elemento un componente User, el cual recibe vía props el nombre, el email y una key. La propiedad key es un identificador que usa React en las listas, para renderizar los componentes de forma más eficiente.
*/