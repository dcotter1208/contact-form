import { TextField } from "@material-ui/core";
import React from "react";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import useStyles from "./TextInput.styles";

export interface InputProps {
  id: string;
  label: string;
  onChange: (e: any) => void;
  onFocus: () => void;
  helperText: string;
  error: boolean;
  valid: boolean;
  onBlur?: () => void;
  required?: boolean;
  className?: string;
}

function TextInput(props: InputProps): JSX.Element {
  const classes = useStyles();

  const {
    id,
    label,
    required,
    onChange,
    onFocus,
    onBlur,
    helperText,
    error,
    valid,
    className,
  } = props;

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
    <>
      <TextField
        className={className}
        id={id}
        label={label}
        variant='outlined'
        required={required}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        helperText={helperText}
        error={error}
        InputProps={{
          className: valid ? classes.successInput : "",
          endAdornment: statusIcon(),
        }}
      />
    </>
  );
}

export default TextInput;
