import { Component } from "react";
import s from "./ColorPicker.module.css";
import classNames from "classnames";

export class ColorPicker extends Component {
  state = {
    activeOptionInd: 0,
  };

  setActiveInd = (index) => {
    this.setState({ activeOptionInd: index });
  };

  // makeOptionClassName = (index) => {
  //   return classNames(`${s.ColorPicker__option}`, {
  //     [`${s.ColorPicker__option__active}`]:
  //       index === this.state.activeOptionInd,
  //   });

  // console.log(clsx);
  // const optionClasses = [`${s.ColorPicker__option}`];

  // if (index === this.state.activeOptionInd) {
  //   optionClasses.push(`${s.ColorPicker__option__active}`);
  // }

  // return optionClasses.join(" ");
  // };

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
              className={classNames(`${s.ColorPicker__option}`, {
                // or use f makeOptionClassName on 14row
                [`${s.ColorPicker__option__active}`]: index === activeOptionInd,
              })}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveInd(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
