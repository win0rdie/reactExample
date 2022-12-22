import React from "react";
import s from "./Counter.module.css";
import { Controls } from "./Controls";
import { Value } from "./Value";

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 10,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;

    return (
      <div className={s.counter}>
        <Value onValue={value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
