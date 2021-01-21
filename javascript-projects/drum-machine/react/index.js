// const JSX = (
//   <div>
//     <h1>Hello World, Thank fucking christ!!</h1>
//     <p>Houston, we did it</p>
//   </div>
// );
//
import React, {Component} from 'react';

ReactDOM.render(JSX, document.getElementById('app'));
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello my pretties!</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
