import * as React from "react";

import {Link} from "@mui/material";

interface LinkComponentProps {
  link: string| JSX.Element;
  
}

const LinkComponent = (props: LinkComponentProps) => (
  <Link underline="hover">
     {props.link}
  </Link>
);

export default LinkComponent;
