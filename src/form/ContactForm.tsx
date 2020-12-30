import React from "react";
import { Button, TextField } from "@material-ui/core";
import useStyles from "./ContactForm.styles";
import Header from "../landing/header";
import PhoneField from "./PhoneInput";

function ContactForm() {
  const classes = useStyles();

  function onSubmitClick() {
    console.log("validate form");
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
