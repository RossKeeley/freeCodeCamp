// 'use strict';
//
// const e = React.createElement;
//
// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }
//
//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }
//
//     const buttonProps = {
//       letter:
//     }
//
//     return (
//
//       <div id="drum machine">
//         <h1>Hello</h1>
//       </div>
//     );
//   }
// }
// const soundButton = (props) => {
//   return (
//     <button class="drum-pad" id="clap">
//     R
//       <audio class="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
//     </button>
//   )
// }
//
//
// const domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(LikeButton, domContainer);

import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

class App extends React.Component {
  state = {
    keys: ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'],
    audio: [
      'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    ]
  }

  render() {
    const { keys } = this.state;

    return(
      <div id="drum-machine" className="container">
        <div id="display" className="display">
          {keys.map((key, idx) => (
            <Box text={key} key={idx}/>
          ))}
        </div>
      </div>
    );
  }
}

const Box = (props) => (
  <div className="box">
    <div className="smallBox">
      {props.text}
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
