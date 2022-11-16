import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Counter extends React.Component {
  state = {
    counter: 0
  }
  increment = () => {
    this.setState({counter: this.state.counter+1});
  }

  decrease = () => {
    this.setState({counter: this.state.counter-1});
  }

  reset = () => {
    this.setState({counter: this.state.counter=0});
  }

  render() {
    return <div>
    <p>{this.state.counter}</p>
    <button onClick={this.decrease}>Decrease</button>
    <button onClick={this.increment}>Increase</button>
    <br/>
    <button onClick={this.reset}>Reset</button>

    </div>

  }


}


const el = <Counter />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);