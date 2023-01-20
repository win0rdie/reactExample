import { Form, Formik } from "formik";
import React from "react";
import { CITY_OPTIONS } from "constans/loginForm";
import { GENDER_OPTIONS } from "../../constans/loginForm";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  RadioGroup,
  Select,
  InputLabel,
  MenuItem,
  Radio,
  Button,
  Paper,
} from "@mui/material";

const MUIFormWithFormik = () => {
  return (
    <Container maxWidth="xs" style={{ padding: "1rem" }}>
      <Formik
        initialValues={{
          email: "",
          password: "",
          agree: false,
          gender: GENDER_OPTIONS.skip,
          city: CITY_OPTIONS.Kyiv,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Email is required field";
          }
          return errors;
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <Form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/*         SIGN IN        */}

            <TextField
              variant="filled"
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={props.values.email}
              onChange={props.handleChange}
              InputLabelProps={{ shrink: true }}
              helperText={props.errors.email || "e.g. example@mail.com"}
              error={Boolean(props.errors.email)}
            />
            <TextField
              variant="outlined"
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={props.values.password}
              onChange={props.handleChange}
              InputLabelProps={{ shrink: true }}
              helperText="min 6 characters"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="I agree with Terms & Conditions"
              name="agree"
              checked={props.values.agree}
              onChange={props.handleChange}
            />

            {/*           GENDER          */}
            <FormControl>
              <FormLabel id="gender_id">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={props.values.gender}
                id="gender_id"
                name="gender"
                onChange={props.handleChange}
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
                value={props.values.city}
                label="City"
                onChange={props.handleChange}
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

            <Button type="submit" variant="contained" size="medium">
              Sign in
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default MUIFormWithFormik;
