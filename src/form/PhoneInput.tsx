import React from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { TextField } from "@material-ui/core";

type PhoneFieldProps = {
  id?: string;
  label?: string;
  className?: string;
};

function Phone(): JSX.Element {
  return (
    <PhoneInput
      placeholder=''
      value={""}
      onChange={() => {
        console.log("phone input onChange");
      }}
    />
  );
}

function PhoneField(props: PhoneFieldProps) {
  const { id, label, className } = props;

  return (
    <TextField
      className={className}
      id={id ? id : "phone-field"}
      label={label ? label : "Phone Number"}
      variant='outlined'
      required
      InputProps={{
        inputProps: {
          component: <Phone />,
        },
      }}
    ></TextField>
  );
}

export default PhoneField;
