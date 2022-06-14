import * as React from "react";

import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@emotion/react";

interface AddToLibraryProps {
  children?: string | JSX.Element;
  variant?: "header" | "title" | "subtitle" | "body" | "caption";
}

const useStyles = makeStyles((theme: Theme) => ({
  flexGrow: {
    flex: "1",
  },
  button: {
    display: "flex",
    flexGrow: 1,
    borderTop: "1px #E1ECFC solid",
    padding: "2px",
    justifyContent: "center",
    alignItems: "center",
    whiteSpace: "nowrap",
    marginTop: "11px",
    backgroundColor: "#fff",
    color: "blue !important",

    "&:hover": {
      color: "#fff !important",
 
    },
  },

  buttonBox: {
    display: "flex",
    zIndex: "0",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "blue",
      color: "#fff !important",
      fontWeight: "500 !important",
    },
  },
}));

const AddToLibrary = (props: AddToLibraryProps) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.buttonBox}>
        <Button className={classes.button}>
          <AddIcon fontSize="medium" />
          <Typography variant="body1">{props.children}</Typography>
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default AddToLibrary;
