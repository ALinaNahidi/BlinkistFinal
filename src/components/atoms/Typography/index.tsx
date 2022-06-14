import * as React from "react";

import Typography from "@mui/material/Typography";

interface TypographyComponentProps {
  children: string;
  variant: "header" | "title" | "subtitle" | "body1" | "caption"|"h3"|"h5"|"h2";
}

const getMappedVariant = (variant: string) => {
  switch (variant) {
    case "header":
      return "h4";
    case "h5":
      return "h5";
    case "h3":
      return "h3";
    case "h2":
      return "h2";
    case "title":
      return "subtitle1";
    case "subtitle":
      return "subtitle2";
    default:
      return "body1";
  }
};

const TypographyComponent = (props: TypographyComponentProps) => (
  <Typography
    variant={getMappedVariant(props.variant)}
    sx={{ whiteSpace: "nowrap", padding: 0 }}
   
  >
    {props.children}
  </Typography>
);

export default TypographyComponent;
