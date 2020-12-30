import { Typography } from "@material-ui/core";
import React from "react";

type HeaderProps = {
  title: string;
  variant: any;
  className?: string;
};
function Header(props: HeaderProps) {
  const { variant, title, className } = props;
  return (
    <Typography className={className} variant={variant}>
      {title}
    </Typography>
  );
}

export default Header;
