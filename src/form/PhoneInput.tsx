import React from "react";
import NumberFormat from "react-number-format";
import { TextField } from "@material-ui/core";

type PhoneFieldProps = {
  id?: string;
  label?: string;
  className?: string;
};

function Phone(props: any) {
  return (
    <NumberFormat
      {...props}
      onValueChange={(values) => {
        console.log("values: ", values);
      }}
      isNumericString
      format='(###) ###-####'
      allowEmptyFormatting
      mask='_'
      type='tel'
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
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        className: className,
        inputComponent: Phone,
      }}
    ></TextField>
  );
}

export default PhoneField;
