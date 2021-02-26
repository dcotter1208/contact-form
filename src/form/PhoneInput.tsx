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
  helperText: string;
  id?: string;
  label?: string;
  className?: string;
  onFocus?: () => void;
  onBlur?: () => void;
};

function Phone(props: any) {
  const { className, inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      className={className}
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
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
  const {
    id,
    label,
    className,
    helperText,
    valid,
    onChange,
    onFocus,
    onBlur,
  } = props;
  const classes = useStyles();
  const inputClassName = valid
    ? `${className} ${classes.successInput}`
    : className;

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
      className={inputClassName}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      helperText={helperText}
      id={id ? id : "phone-field"}
      label={label ? label : "Phone Number"}
      variant='outlined'
      required
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        className: inputClassName,
        inputComponent: Phone,
        endAdornment: statusIcon(),
      }}
      error={props.error}
    ></TextField>
  );
}

export default PhoneField;
