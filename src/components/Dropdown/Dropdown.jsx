import s from "./Dropdown.module.css";
import React from "react";

export class Dropdown extends React.Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible,
      };
    });
  };

  // show = () => {
  //   this.setState({
  //     visible: true,
  //   });
  // };

  // hide = () => {
  //   this.setState({
  //     visible: false,
  //   });
  // };

  render() {
    const { visible } = this.state;
    return (
      <div className={s.Dropdown}>
        <button
          type="button"
          className={s.Dropdown__toggle}
          onClick={this.toggle}
        >
          {visible ? "Hidden" : "Show"}
        </button>
        {/* <button
          type="button"
          className={s.Dropdown__toggle}
          onClick={this.hide}
        >
          Hidden
        </button> */}

        {visible && <div className={s.Dropdown__menu}>Show menu</div>}
      </div>
    );
  }
}
