import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() { 
    return (
      <React.Fragment>
        <div>
          { this.props.counters.map(counter => 
            <Counter 
              key = {counter.id}
              counter = {counter}
              onDelete = {this.props.onDelete}
              onIncrement = {this.props.onIncrement}
            >
              <h6>Counter :{counter.id}</h6>
            </Counter>
          )}
        </div>
        <div>
          <button className="btn btn-primary btn-sm m-2"
            onClick = {this.props.onReset}
          >
            Reset
          </button>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Counters;