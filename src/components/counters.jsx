import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
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
        <div>
          { this.state.counters.map(counter => 
            <Counter 
              key={counter.id}
              counter={counter}
              selected={true}
              onDelete ={this.handleDelete}
              onIncrement = {this.handleIncrement}
            >
              <h4> Counter #{counter.value}</h4>
            </Counter>
          )}
        </div>
        <div>
          <button className="btn btn-primary btn-sm m-2"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Counters;