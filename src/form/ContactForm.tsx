import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import useStyles from "./ContactForm.styles";
import Header from "../landing/header";
import PhoneField from "./PhoneInput";
import { validateName } from "../utils/form";
import { InputState, Status } from "./Input";

function ContactForm() {
  const classes = useStyles();
  const firstNameInputDefault: InputState = {
    status: Status.Neutral,
    message: "",
  };
  const [firstName, setFirstName] = useState<string>("");
  const [firstNameInput, setFirstNameInput] = useState<InputState>(
    firstNameInputDefault
  );

  function validateFirstName() {
    const firstNameInputState = validateName(firstName);
    setFirstNameInput(firstNameInputState);
  }

  function onSubmitClick() {
    validateFirstName();
  }

  function clearErrorStates() {
    setFirstNameInput(firstNameInputDefault);
  }

  function SubmitButton() {
    return (
      <Button variant='contained' color='primary' onClick={onSubmitClick}>
        Submit
      </Button>
    );
  }

  return (
    <>
      <form className={classes.root} noValidate autoComplete='off'>
        <Header
          className={classes.title}
          variant={"h5"}
          title={"Contact Info"}
        />
        <TextField
          className={classes.textInput}
          id='first name'
          label='First Name'
          variant='outlined'
          required
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          onFocus={clearErrorStates}
          helperText={firstNameInput.message}
          error={firstNameInput.status === Status.Error}
        />
        <TextField
          className={classes.textInput}
          id='first name'
          label='Last Name'
          variant='outlined'
          required
        />
        <PhoneField className={classes.textInput} />
        <TextField
          className={classes.textInput}
          id='email name'
          label='Email'
          variant='outlined'
          required
        />
      </form>
      <SubmitButton />
    </>
  );
}

export default ContactForm;
