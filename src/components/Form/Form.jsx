import { Component } from "react";
import shortid from "shortid";

class Form extends Component {
  state = {
    name: "",
    tag: "",
    experience: "junior",
    licence: false,
  };

  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  handleChange = (e) => {
    // обчислювальні властивості
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmitForm(this.state); //підняття стану
    this.reset();
  };

  handleLicenceChange = (e) => {
    console.log(e.currentTarget.checked);
    this.setState({ licence: e.currentTarget.checked });
  };
  reset = () => {
    this.setState({
      name: "",
      tag: "",
    });
  };

  render() {
    const { name } = this.state;
    const { tag } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <br />
        <label htmlFor={this.tagInputId}>
          Alias
          <input
            type="text"
            name="tag"
            value={tag}
            onChange={this.handleChange}
            id={this.tagInputId}
          />
        </label>

        <p>Your level</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === "junior"}
          />
          Junior
        </label>

        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === "middle"}
          />
          Middle
        </label>

        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === "senior"}
          />
          Senior
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
          Agrement for licence
        </label>

        <button type="submit" disabled={!this.state.licence}>
          Send
        </button>
      </form>
    );
  }
}

export default Form;
