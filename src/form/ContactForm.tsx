import React from "react";
import { TextField } from "@material-ui/core";
import useStyles from "./ContactForm.styles";
import Header from "../landing/header";

function ContactForm() {
  const classes = useStyles();

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
        />
        <TextField
          className={classes.textInput}
          id='first name'
          label='Last Name'
          variant='outlined'
        />
      </form>
    </>
  );
}

export default ContactForm;
