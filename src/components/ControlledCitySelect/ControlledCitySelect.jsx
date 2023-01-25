import { CITY_OPTIONS } from "constans/loginForm";
import { Component } from "react";

const LvivPosts = ["№1 вул ААА", "№2 вул БББ"];
const DniproPosts = ["№3 вул ААА", "№4 вул БББ"];
const PoltavaPosts = ["№5 вул ААА", "№6 вул БББ"];

export default class ControlledCitySelect extends Component {
  state = {
    selectedPost: "",
    cities: [],
  };

  componentDidMount() {
    document.body.addEventListener("keydown", this.handleKeyDown);
    setInterval(
      () => this.setState((prev) => ({ selectedPost: prev.selectedPost + 1 })),
      2000
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Controlled city", prevProps, this.props);
    if (prevProps.city !== this.props.city) {
      this.changeCities();
    }
  }
  componentWillUnmount() {
    document.body.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    console.log(e.code);
  };

  changeCities = () => {
    const { city } = this.props;

    switch (city) {
      case CITY_OPTIONS.Lviv:
        this.setState({ cities: LvivPosts });
        break;
      case CITY_OPTIONS.Dnipro:
        this.setState({ cities: DniproPosts });
        break;
      case CITY_OPTIONS.Poltava:
        this.setState({ cities: PoltavaPosts });
        break;
      default:
        this.setState({ cities: [] });
        break;
    }
  };

  handleChangeValue = (event) => {
    // console.log(event.target.name, event.target.value);
    // this.setState({ [event.target.name]: event.target.value });
    this.setState({ selectedPost: event.target.value });

    this.props.onSelect(event.target.value);
  };

  render() {
    const { city } = this.props;
    const { cities } = this.state;
    return (
      <select value={city} name="city" onChange={this.handleChangeValue}>
        {Object.entries(cities).map((entry) => (
          <option key={entry[0]} value={entry[1]}>
            {entry[1]}
          </option>
        ))}
      </select>
    );
  }
}
