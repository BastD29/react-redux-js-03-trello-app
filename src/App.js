import React, { Component } from 'react';
import Board from './components/Board';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='Header'>React Trello App</div>
        <Board />
      </div>
    )
  }
}
