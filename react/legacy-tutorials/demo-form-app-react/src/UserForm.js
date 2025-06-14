import React, { Component } from 'react';

export default class UserForm extends Component{
    render(){
        return(
            <form onSubmit={this.props.onAddUser}>
                <input type="text" name="name" placeholder="Nombre"/>
                <input type="email" name="email" placeholder="Email" />
                <input type="submit" value="Guardar"/>
            </form>
        );
    }
}

/*
Cada vez que se pulse el botón guardar el formulario disparará el evento onSubmit(), el cual llama a una función que recibirá del componente padre a través de la propiedad props.OnAddUser (a esto se le conoce como Callback).

La función callback se define en el componente App, handleOnAddUser(event) y será la encargado de manejar el evento
*/