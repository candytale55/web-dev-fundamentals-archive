const List = (props) => {
  
  {/* Access tasks array in the List component, showing its value within the p element. Use join(", ") to display the props.tasksarray in the p element as a comma separated list. */}
  return <p>{props.tasks.join(', ')}</p>
  
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>

        {/*When rendering each List from the ToDo component, pass in a tasks property assigned to an array of to-do tasks*/}
        <List tasks={["ironing", "clean the bathroom"]}/>

        <h2>Tomorrow</h2>
        <List tasks={["going to the doctor", "paying bills", "training"]} />
      </div>
    );
  }
};
