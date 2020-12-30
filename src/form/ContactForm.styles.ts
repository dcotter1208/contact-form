import { createStyles, makeStyles, Theme } from "@material-ui/core";

let styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      width: "60%",
      maxWidth: "500px",
      margin: "10px auto auto auto",
    },
    textInput: {
      margin: "10px 0",
    },
    title: {
      alignSelf: "flex-start",
      fontWeight: "bold",
    },
  });

const useStyles = makeStyles(styles, { index: 1 });

export default useStyles;
