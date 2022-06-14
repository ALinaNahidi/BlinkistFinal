import * as React from 'react';
import Button from '@mui/material/Button';

import Typography from "@mui/material/Typography";


interface ButtonProps {
  title?: string;
  disabled?: boolean;
  backgroundColor?: string;
  label?: string;
  varient: "text" | "outlined" | "contained";
}

const ButtonComponent = (props: ButtonProps) => {
  return (
    <Button
    disableRipple={true}
    sx={{textDecoration:"none"}}
      variant={props.varient}
      disabled={props.disabled}
      size="medium"
    >
      {props.title}
    </Button>
  );
};

export default ButtonComponent;
