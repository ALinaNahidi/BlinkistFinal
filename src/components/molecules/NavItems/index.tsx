import * as React from "react";

import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Theme } from "@emotion/react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

interface NavItemsProps {
  children?: string | JSX.Element;
  variant?: "header" | "title" | "subtitle" | "body" | "caption";
}

const useStyles = makeStyles((theme: Theme) => ({
  link: {
    color: "#2CE080",
    borderBottomWidth: "2px",
    "&:hover": {
      textDecorationColor: "red",
    },
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
  },
}));

const NavItems = (props: NavItemsProps) => {
  const classes = useStyles();

  return (
    <div className={classes.link}>
      <Box>
        <Typography variant="body1" color={"secondary"}>
          {props.children}
        </Typography>
      </Box>

      <ExpandMoreIcon color={"secondary"} />
    </div>
  );
};
export default NavItems;
