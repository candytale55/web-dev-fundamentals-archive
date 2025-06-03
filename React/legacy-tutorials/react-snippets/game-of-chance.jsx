// REF: https://www.freecodecamp.org/learn/front-end-development-libraries/react/render-conditionally-from-props

/*
Use a ternary operator to render:
<h1>You Win!</h1> if props.fiftyFifty is true
<h1>You Lose!</h1> if props.fiftyFifty is false
*/

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
   
    return <h1>{this.props.fiftyFifty ? 'You Win!' : 'You Lose!'}</h1>;
    
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      // Complete the return statement:
      return {
        counter: prevState.counter + 1
      }
    });
  }
  render() {
      const expression = Math.random() >= 0.5; // Random win/loss logic
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* Change code below this line */}
        <Results fiftyFifty={expression} />
        {/* Change code above this line */}
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}
