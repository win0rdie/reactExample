import { Component } from "react";
import s from "./ColorPicker.module.css";

export class ColorPicker extends Component {
  state = {
    activeOptionInd: 0,
  };

  setActiveInd = (index) => {
    this.setState({ activeOptionInd: index });
  };

  makeOptionClassName = (index) => {
    const optionClasses = [`${s.ColorPicker__option}`];

    if (index === this.state.activeOptionInd) {
      optionClasses.push(`${s.ColorPicker__option__active}`);
    }

    return optionClasses.join(" ");
  };

  render() {
    const { activeOptionInd } = this.state;
    const { options } = this.props;

    const { label } = options[activeOptionInd];

    return (
      <div className={s.ColorPicker}>
        <h2 className={s.ColorPicker__title}>Color Picker</h2>
        <p>Checked color: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveInd(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
