// Ref.to exercise: https://www.freecodecamp.org/learn/front-end-development-libraries/react/use-a-ternary-expression-for-conditional-rendering

/*
Use a ternary expression to decide which button (buttonOne, buttonTwo, buttonThree) should appear:
  If userAge === '': show buttonOne (Submit button).
  If userAge >= 18: show buttonTwo (You May Enter).
  If userAge < 18: show buttonThree (You Shall Not Pass).
*/


const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
        this.state = {
      input: '',
      userAge: ''
    };

    // Change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* Change code below this line */}
        {
          this.state.userAge === ''
            ? buttonOne
            : Number(this.state.userAge) >= 18
              ? buttonTwo
              : buttonThree
        }
        {/* Change code above this line */}
      </div>
    );
  }
}
