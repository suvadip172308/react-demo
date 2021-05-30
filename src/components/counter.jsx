import React, { Component } from 'react';

class Counter extends Component {
  styles = {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  }

  formatCount() {
    const { value } = this.props.counter;

    return value === 0 ? 'Zero' : value;
  }

  render() {
    let classes = 'm-2 badge bg-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';

    return (
      <React.Fragment>
        {this.props.children}
        <div>
          <span style={this.styles} className={classes}>{this.formatCount()}</span>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => this.props.onIncrement(this.props.counter.id)}
          >
            Increment
          </button>
          <button 
            className="btn btn-danger btn-sm m-2"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;