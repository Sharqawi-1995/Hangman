import React, { Component } from 'react';
import Letter from './Letter';

export class Letters extends Component {
  render() {
    return (
      <div>
        <div>Available Letters:</div>
        {Object.keys(this.props.letterStatus).map((l) => {
          return this.props.letterStatus[l] ? (
            <Letter key={l} letter={l} className='crossed-out' />
          ) : (
            <Letter key={l} letter={l} selectLetter={this.props.selectLetter} />
          );
        })}
      </div>
    );
  }
}

export default Letters;
