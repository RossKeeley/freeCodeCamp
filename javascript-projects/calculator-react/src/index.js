import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: 0,
      current: 0
    }
    // this.inputNumber = this.inputNumber.bind(this);
  }

  render() {

    const inputNumber = () => {
      this.setState({
        console.log
        output: 1234,
        currentSymbol: 5678
      });
    }

    return (

      <div className="calculator">
        <div id="display" className="display">
          <div id="output" className="output">
            {this.state.output}
          </div>
          <div id="currentSymbol" className="currentSymbol">
            currentSymbol
          </div>
        </div>
        <div className="buttons">
          <button className="light-grey">AC</button>
          <button className="orange">/</button>
          <button className="orange">x</button>
          <button onClick={this.inputNumber}>7</button>
          <button onClick={this.inputNumber}>8</button>
          <button onClick={this.inputNumber}>9</button>
          <button className="orange">-</button>
          <button onClick={this.inputNumber}>4</button>
          <button onClick={this.inputNumber}>5</button>
          <button onClick={this.inputNumber}>6</button>
          <button className="orange">+</button>
          <button onClick={this.inputNumber}>1</button>
          <button onClick={this.inputNumber}>2</button>
          <button onClick={this.inputNumber}>3</button>
          <button className="orange">=</button>
          <button onClick={this.inputNumber}>0</button>
          <button>.</button>
          <button>9</button>
          <button>9</button>
          <button>9</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);
