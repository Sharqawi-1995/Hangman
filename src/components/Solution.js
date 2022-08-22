import React, { Component } from 'react';
import Letter from './Letter';

export class Solution extends Component {
  render() {
    let letters = this.props.solution.word.split('');

    return (
      <div>
        {letters.map((l) => {
          return this.props.letterStatus[l] ? (
            <Letter key={l} letter={l} />
          ) : (
            '_'
          );
        })}
        <div>
          <em>{this.props.solution.hint}</em>
        </div>
      </div>
    );
  }
}

export default Solution;
