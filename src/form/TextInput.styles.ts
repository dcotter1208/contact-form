import { createStyles, makeStyles, Theme } from "@material-ui/core";

let styles = (theme: Theme) =>
  createStyles({
    successIcon: {
      color: "#18b500",
    },
    errorIcon: {
      color: "#f44336",
    },
    successInput: {
      "& fieldset": {
        borderColor: "#18b500",
        borderWidth: 2,
      },
    },
  });

const useStyles = makeStyles(styles, { index: 1 });

export default useStyles;
