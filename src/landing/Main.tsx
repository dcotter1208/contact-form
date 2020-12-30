import React from "react";
import ContactForm from "../form/ContactForm";
import useStyles from "./Main.styles";

function Main() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ContactForm />
    </div>
  );
}

export default Main;
