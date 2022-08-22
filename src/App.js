import './App.css';
import Score from './components/Score';
import Solution from './components/Solution';
import Letters from './components/Letters';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: 'OMAR',
        hint: 'He sold me for 2$',
      },
      score: 100,
    };
  }

  generateLetterStatuses() {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  }

  reset = () => {
    this.setState({
      letterStatus: this.generateLetterStatuses(),
      score: 100,
    });
  };

  checkWinner = () => {
    let score = this.state.score;

    if (score <= 0) {
      alert('You lost');
      this.reset();
    } else {
      let letters = this.state.solution.word.split('');
      let userWon = letters.every((l) => this.state.letterStatus[l]);

      if (userWon) {
        alert('You won!');
        this.reset();
      }
    }
  };

  selectLetter = (letter) => {
    let letterStatus = { ...this.state.letterStatus };
    let score = this.state.score;

    if (letterStatus[letter]) {
      return;
    }

    if (this.state.solution.word.includes(letter)) {
      score += 5;
    } else score -= 20;

    letterStatus[letter] = true;

    this.setState({ letterStatus, score }, this.checkWinner);
  };

  render() {
    return (
      <div className='App'>
        <Score score={this.state.score} />
        <Solution
          letterStatus={this.state.letterStatus}
          solution={this.state.solution}
        />
        <Letters
          letterStatus={this.state.letterStatus}
          selectLetter={this.selectLetter}
        />
      </div>
    );
  }
}

export default App;
