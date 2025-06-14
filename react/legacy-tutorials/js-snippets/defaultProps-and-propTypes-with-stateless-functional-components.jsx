{/*
The code editor has a CampSite component that renders a Camper component as a child. 

(1) Define the Camper component and assign it default props of { name: 'CamperBot' }.

(2) Inside the Camper component, render any code that you want, but make sure to have one p element that includes only the name value that is passed in as a prop. 

(3) Finally, define propTypes on the Camper component to require name to be provided as a prop and verify that it is of type string.
*/}


class Camper extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <p>{this.props.name}</p> {/*2*/}
      </div>
    );
  }
}


class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};

{/*1 y 3*/}
Camper.defaultProps = { name : 'CamperBot'}; 
Camper.propTypes = { name: PropTypes.string.isRequired }; 







{/*
Stateless functional components act like pure functions. They accept props as input and return the same view every time they are passed the same props. 

A stateless functional component is any function you write which accepts props and returns JSX. 

A stateless component, on the other hand, is a class that extends React.Component, but does not use internal state. 

Finally, a stateful component is a class component that does maintain its own internal state. You may see stateful components referred to simply as components or React components.

A common pattern is to try to minimize statefulness and to create stateless functional components wherever possible. 

This helps contain your state management to a specific area of your application. In turn, this improves development and maintenance of your app by making it easier to follow how changes to state affect its behavior.
*/}
