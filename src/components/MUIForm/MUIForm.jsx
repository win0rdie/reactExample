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
} from "@mui/material";
import { CITY_OPTIONS, SEX_OPTIONS } from "constans/loginForm";
import { Component } from "react";
import requestImitator from "utils/requestImitator";
import css from "./MUIForm.module.css";
import styled from "styled-components";

const INITIAL_STATE = {
  email: "",
  password: "",
  agree: false,
  sex: SEX_OPTIONS.skip,
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
    const { email, password, agree, sex } = this.state;
    const canSubmit =
      email && password.length > 5 && agree && sex !== SEX_OPTIONS.skip;

    return (
      <Container maxWidth="xs">
        <form className={css.form}>
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
          <FormControl>
            <InputLabel id="sex_field">Sex</InputLabel>
            <Select
              style={{ textTransform: "capitalize" }}
              id="sex_field"
              name="sex"
              value={sex}
              label="Sex"
              onChange={this.handleChangeValue}
            >
              {Object.keys(SEX_OPTIONS).map((key) => {
                const value = SEX_OPTIONS[key];
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
