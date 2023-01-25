import {
  TextField,
  FormControlLabel,
  Checkbox,
  Container,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  styled as muiStyled,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { CITY_OPTIONS, GENDER_OPTIONS } from "constans/loginForm";
import { Component } from "react";
import requestImitator from "utils/requestImitator";
import css from "./MUIForm.module.css";
import styled from "styled-components";

const INITIAL_STATE = {
  email: "",
  password: "",
  agree: false,
  gender: GENDER_OPTIONS.skip,
  city: CITY_OPTIONS.Kyiv,
};
const Div = styled.div`
  padding: 1rem;
  background-color: green;
`;
const CustomizedtextField = muiStyled(TextField)({
  //   "& .MuiOutlinedInput-root": {
  //     borderRadius: 18,
  //     borderStyle: "none",

  //     backgroundColor: "red",
  //   },
  backgroundColor: "red",
  //   borderRadius: 18,
  borderStyle: "none",
});
export default class MUIForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  // componentDidMount() {
  //   console.log("Component did mount");
  // }
  // componentDidUpdate = (prevProps, prevState) => {
  //   console.log("component did update", prevProps, this.props);
  //   if (prevProps.email !== this.props.email) {
  //     this.setState({ email: this.props.email });
  //   }
  // };

  handleChangeValue = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleChangeChecked = (e) => {
    const { name, checked } = e.target;
    this.setState({ [name]: checked });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const request = await requestImitator(this.state);
    console.log(request);
    this.setState({ ...INITIAL_STATE });
  };
  render() {
    const { email, password, agree, city, gender } = this.state;
    const canSubmit =
      email && password.length > 5 && agree && gender !== GENDER_OPTIONS.skip;

    return (
      <Container maxWidth="xs">
        <form className={css.form}>
          {/*         SIGN IN        */}

          <TextField
            variant="filled"
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={this.handleChange}
            InputLabelProps={{ shrink: true }}
            helperText="e.g. email@mail.com"
          />
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={this.handleChange}
            InputLabelProps={{ shrink: true }}
            helperText="min 6 characters"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="I agree with Terms & Conditions"
            name="agree"
            checked={agree}
            onChange={this.handleChangeChecked}
          />

          {/*           GENDER          */}
          <FormControl>
            <FormLabel id="gender_id">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={gender}
              id="gender_id"
              name="gender"
              onChange={this.handleChangeValue}
            >
              {Object.keys(GENDER_OPTIONS).map((key) => {
                const value = GENDER_OPTIONS[key];
                return (
                  <FormControlLabel
                    key={key}
                    style={{ textTransform: "capitalize" }}
                    value={value}
                    control={<Radio />}
                    label={value}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>

          {/*         CITY         */}
          <FormControl>
            <InputLabel id="city_field">City</InputLabel>
            <Select
              style={{ textTransform: "capitalize" }}
              id="city_field"
              name="city"
              value={city}
              label="City"
              onChange={this.handleChangeValue}
            >
              {Object.keys(CITY_OPTIONS).map((key) => {
                const value = CITY_OPTIONS[key];
                return (
                  <MenuItem
                    style={{ textTransform: "capitalize" }}
                    key={key}
                    value={value}
                  >
                    {value}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <CustomizedtextField
            style={{ backgroundColor: agree ? "#0f05" : "#f005" }}
          />
          <Div>TEXT</Div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              style={{ width: 200 }}
              variant="contained"
              size="medium"
              disabled={!canSubmit}
            >
              Sign in
            </Button>
          </div>
        </form>
      </Container>
    );
  }
}
