import React from "react";
import NumberFormat from "react-number-format";
import { TextField } from "@material-ui/core";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import useStyles from "./TextInput.styles";

type PhoneFieldProps = {
  onChange: (e: any) => void;
  error: boolean;
  valid: boolean;
  id?: string;
  label?: string;
  className?: string;
  onFocus?: () => void;
  onBlur?: () => void;
};

function Phone(props: any) {
  return (
    <NumberFormat
      {...props}
      onValueChange={(e) => {
        console.log(e);
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
  const { id, label, className, onChange, onFocus, onBlur } = props;
  const classes = useStyles();

  function statusIcon() {
    const { valid, error } = props;
    if (valid) {
      return <CheckCircleOutlineOutlinedIcon className={classes.successIcon} />;
    } else if (error) {
      return <ErrorOutlineIcon className={classes.errorIcon} />;
    }
    return undefined;
  }

  return (
    <TextField
      className={className}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
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
        endAdornment: statusIcon(),
      }}
      error={props.error}
    ></TextField>
  );
}

export default PhoneField;
