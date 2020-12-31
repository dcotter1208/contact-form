import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import useStyles from "./ContactForm.styles";
import Header from "../landing/header";
import PhoneField from "./PhoneInput";
import { validateName } from "../utils/form";
import { InputState, Status } from "./Input";
import TextInput from "./TextInput";

function ContactForm() {
  const classes = useStyles();
  const inputDefault: InputState = {
    status: Status.Neutral,
    message: "",
  };
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [firstNameInput, setFirstNameInput] = useState<InputState>(
    inputDefault
  );
  const [lastNameInput, setLastNameInput] = useState<InputState>(inputDefault);

  function validateFirstName() {
    const inputState = validateName(firstName);
    setFirstNameInput(inputState);
  }

  function validateLastName() {
    const inputState = validateName(lastName);
    setLastNameInput(inputState);
  }

  function onSubmitClick() {
    validateFirstName();
    validateLastName();
  }

  function clearErrorStates() {
    setFirstNameInput(inputDefault);
    setLastNameInput(inputDefault);
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
        <TextInput
          className={classes.textInput}
          id='first name'
          label='First Name'
          required
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          onFocus={clearErrorStates}
          helperText={firstNameInput.message}
          error={firstNameInput.status === Status.Error}
          valid={firstNameInput.status === Status.Success}
        />
        <TextInput
          className={classes.textInput}
          id='last name'
          label='Last Name'
          required
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          onFocus={clearErrorStates}
          helperText={lastNameInput.message}
          error={lastNameInput.status === Status.Error}
          valid={lastNameInput.status === Status.Success}
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
