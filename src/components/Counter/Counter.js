import { Component } from 'react';

export class Counter extends Component {
  render() {
    return (
      <div>
        <button>-</button>
        <span>0</span>
        <button>+</button>
      </div>
    );
  }
}
