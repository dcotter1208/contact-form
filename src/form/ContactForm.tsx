import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import useStyles from "./ContactForm.styles";
import Header from "../landing/header";
import PhoneField from "./PhoneInput";
import { validateEmail, validateName, validatePhone } from "../utils/form";
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
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [firstNameInput, setFirstNameInput] = useState<InputState>(
    inputDefault
  );
  const [lastNameInput, setLastNameInput] = useState<InputState>(inputDefault);
  const [phoneInput, setPhoneInput] = useState<InputState>(inputDefault);
  const [emailInput, setEmailInput] = useState<InputState>(inputDefault);

  function validateFirstName() {
    const inputState = validateName(firstName);
    setFirstNameInput(inputState);
  }

  function validateLastName() {
    const inputState = validateName(lastName);
    setLastNameInput(inputState);
  }

  function validatePhoneNumber() {
    const inputState = validatePhone(phoneNumber);
    setPhoneInput(inputState);
  }

  function validateEmailField() {
    const inputState = validateEmail(email);
    setEmailInput(inputState);
  }

  function onSubmitClick() {
    validateFirstName();
    validateLastName();
    validatePhoneNumber();
    validateEmailField();
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
          onFocus={() => {
            setFirstNameInput(inputDefault);
          }}
          onBlur={validateFirstName}
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
          onFocus={() => {
            setLastNameInput(inputDefault);
          }}
          onBlur={validateLastName}
          helperText={lastNameInput.message}
          error={lastNameInput.status === Status.Error}
          valid={lastNameInput.status === Status.Success}
        />
        <PhoneField
          className={classes.textInput}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          onFocus={() => {
            setPhoneInput(inputDefault);
          }}
          onBlur={validatePhoneNumber}
          helperText={phoneInput.message}
          error={phoneInput.status === Status.Error}
          valid={phoneInput.status === Status.Success}
        />
        <TextInput
          className={classes.textInput}
          id='email name'
          label='Email'
          required
          helperText={emailInput.message}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          onFocus={() => {
            setEmailInput(inputDefault);
          }}
          onBlur={validateEmailField}
          error={emailInput.status === Status.Error}
          valid={emailInput.status === Status.Success}
        />
      </form>
      <SubmitButton />
    </>
  );
}

export default ContactForm;
