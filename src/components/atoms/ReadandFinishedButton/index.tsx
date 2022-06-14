import * as React from "react";

import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@emotion/react";

interface ReadAndFinishedProps {
  children?: string | JSX.Element;
  onFinishedClicked?: (arg: any) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  flexGrow: {
    flex: "1",
  },
  button: {
    display: "flex",
    padding: "2px",
    justifyContent: "center",
    alignItems: "center",
    whiteSpace: "nowrap",
    backgroundColor: "#fff",
    color: "#0365F2 !important",
    
  },
}));

const ReadAndFinished = (props: ReadAndFinishedProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.button}>
      <Button
        className={classes.button}
        onClick={props.onFinishedClicked}
        disableRipple={true}
      >
        <Typography variant="body1" color="blue">
          {props.children}
        </Typography>
      </Button>
    </Box>
  );
};

export default ReadAndFinished;
