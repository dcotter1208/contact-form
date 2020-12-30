import { createStyles, makeStyles, Theme } from "@material-ui/core";

let styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: "auto",
      width: "100%",
    },
  });

const useStyles = makeStyles(styles, { index: 1 });

export default useStyles;
