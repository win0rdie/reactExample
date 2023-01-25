import { CITY_OPTIONS } from "constans/loginForm";
import { Component } from "react";

export default class CitySelect extends Component {
  state = {
    city: this.props.defaultCity || "",
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps, this.props);
  }

  handleChangeValue = (event) => {
    // console.log(event.target.name, event.target.value);
    this.setState({ [event.target.name]: event.target.value });
    this.props.onSelect(event.target.value);
  };

  render() {
    const { city } = this.state;
    return (
      <div>
        <select value={city} name="city" onChange={this.handleChangeValue}>
          {Object.keys(CITY_OPTIONS).map((key) => {
            const value = CITY_OPTIONS[key];
            return (
              <option key={value} value={value}>
                {value}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
