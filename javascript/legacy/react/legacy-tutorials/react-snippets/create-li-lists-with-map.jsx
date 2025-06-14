/*
Goal:
Use .map() on frontEndFrameworks to create <li> elements.
Each <li> must:
- Use the framework name as its content.
- Have a key prop with a unique value
*/

const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map((framework) => (
    <li key={framework}>{framework}</li>
  ));

  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};
