import React, { Component } from 'react';

export class Letter extends Component {
  selectedLetter = () => {
    this.props.selectLetter(this.props.letter);
  };

  render() {
    return (
      <span className={this.props.className} onClick={this.selectedLetter}>
        {this.props.letter}
      </span>
    );
  }
}

export default Letter;
