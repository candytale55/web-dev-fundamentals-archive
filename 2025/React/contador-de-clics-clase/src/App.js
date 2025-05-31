import React from 'react';
import './App.css';
import Logo from './componentes/Logo';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';




class App extends React.Component{
  constructor() {
    super();
    this.state = {
      numClics: 0
    };
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClic() {
    this.setState(({ numClics })=>({numClics: numClics + 1}));  
  }

  reiniciarContador() {
    this.setState({ numClics : 0 });   
  }


  render() {
    return (
      <div className="App">
        <Logo />
      
        <div className='contenedor-principal'>

          <Contador numClics={this.state.numClics} />

          <Boton
            texto='Clic'
            esBotonDeClic={true}
            manejarClic={this.manejarClic} />

          <Boton
            texto='Reiniciar'
            esBotonDeClic={false}
            manejarClic={this.reiniciarContador} />
        </div>
      </div>
    );


  }
}

export default App;

/*
function App() {

  const [numClics, setNumClics] = useState(0); 

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };


  return (
    <div className="App">
      <Logo />
      <div className='contenedor-principal'>

        <Contador numClics={numClics} />

        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />

        <Boton
          texto = 'Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div> 
    </div>
  );
}
*/

