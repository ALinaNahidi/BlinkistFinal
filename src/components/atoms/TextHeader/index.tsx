import { Box, Typography } from '@mui/material';
import React from 'react'

interface TextHeaderComponentProps {
  children: string;
  varient:"h3"|"h5";
}

const TextHeader = (props: TextHeaderComponentProps) => {
  return (
    <React.Fragment>
      <Typography color="#03314B" sx={{ margin: "8% 0% 4%", padding:"0 12px" }} variant={props.varient}>
        {props.children}
      </Typography>
    </React.Fragment>
  );
};

export const SubHeader = (props: TextHeaderComponentProps) => {
  return (
    <React.Fragment>
      <Typography
        color="#03314B"
        sx={{ margin: "4% 0% 4%", padding: "0 12px" }}
        variant={props.varient}
      >
        {props.children}
      </Typography>
    </React.Fragment>
  );
};


export default TextHeader;