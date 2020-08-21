import React, { Component } from 'react';
import './App.css';
import UserList from './UserList';
import UserForm from './UserForm';

class App extends Component {
  constructor(){
    super();
    this.state = {
        users: [
          {id: 1, name: "Ana", email:"analinda@fakemail.com"},
          {id: 2, name: "Jean Paul", email:"yanpol@fakemail.com"},
          {id: 1, name: "Virginia", email:"vikyviking@fakemail.com"}
        ]
    };
  } // constructor


  handleOnAddUser(event){
    event.preventDefault();
    let user = {
      name: event.target.name.value,
      email: event.target.email.value
    };
    this.setState({
      users: this.state.users.concat([user])
    });
  } //handleOnAddUser

  render(){
    return (
      <div>
        <h1>Lista de usuarios:</h1>
      <UserList users={this.state.users} />
      <UserForm onAddUser={this.handleOnAddUser.bind(this)} />
      </div>
    );
  }
}
export default App;


/*
A App se le asigna un estado inicial que almacena un array con varios objetos "user". Para ello sobreescribiremos el método constructor del componente asignando  al estado inicial (this.state) el array de usuarios.

Finalmente, en el método render renderizará un componente del tipo UserList, al cual se le pasa el estado a través de la prop users.

Gracias al estado se pueden añadir nuevos usuarios al array los cuales se renderizarán automáticamente. Esto es posible ya que, como hemos visto en los ciclos de vida, el estado tiene la particularidad de que cuando cambia el método render vuelve a ejecutarse.

El método handleOnAddUser recibe como parámetro un objecto event, el cual contiene toda la información del evento, tanto su comportamiento como los valores de los inputs del formulario. Para evitar que el evento dispare su comportamiento por defecto (en este caso recargar la página), ejecutaremos el método preventDefault() antes de capturar los valores de los campos "name" y "user".

Por último, actualizaremos el array, para ello en lugar de modificarlo añadiendo el nuevo elemento con el método push, usamos el método concat. De esta manera se creará un nuevo array en lugar de modificar el existente, manteniendo así cierta inmutabilidad en el estado del componente.
*/