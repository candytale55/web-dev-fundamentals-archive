/*
Render a React component on the server using ReactDOMServer.renderToString().
Render the App component (which is a simple React component returning a <div/>) to an HTML string.
*/

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

const staticMarkup = ReactDOMServer.renderToString(<App />);


/*
Most React apps are run on the client — in your browser.
But sometimes we want to render them on the server first — this is called Server-Side Rendering (SSR).

You're learning how to turn a React component into HTML before sending it to the browser 
— that's called server-side rendering, and it improves performance and SEO.
*/
