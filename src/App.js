import React, { Component } from 'react';
import './App.css';

import Navbar from './components/navbar';
import Counters from './components/counters';
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
    ]
  };
  
  handleDelete = (id) => {
    const counters = this.state.counters.filter(counter => counter.id !== id);
    this.setState({counters});
  }
  
  handleIncrement = (id) => {
    const counters = this.state.counters.map(counter => {
      if (counter.id === id) {
        return {
          ...counter,
          value: counter.value + 1,
        }
      }
  
      return counter;
    });
  
    this.setState({ counters });
  };
  
  handleReset = () => {
    const counters = this.state.counters.map(counter =>  {
      return {
        ...counter,
        value: 0,
      };
    });
    this.setState({counters});
  }

  render() { 
    return ( 
      <React.Fragment>
        <Navbar totalCounter={this.state.counters.filter(c => c.value > 0).length}/>
        <div>
          <Counters
            counters={this.state.counters}
            onDelete ={this.handleDelete}
            onIncrement = {this.handleIncrement}
            onReset={this.handleReset}
          />
        </div>
      </React.Fragment>
    );
  }
}
 
export default App;

