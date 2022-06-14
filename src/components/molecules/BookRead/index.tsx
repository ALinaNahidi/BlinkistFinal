import * as React from "react";

import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";


interface BookReadTimeProps {
  children?: string;
  variant?: "header" | "title" | "subtitle" | "body" | "caption";
}

const BookReadTime = (props: BookReadTimeProps) => (
  <div style={{ display: "flex", alignItems: "center" , flexWrap:"nowrap"}}>
    <AccessTimeIcon fontSize="small" color="action" />
    <Typography variant="body1" color="gray" fontSize="14px">
      13-minute&nbsp;read
    </Typography>
  </div>
);

export const TotalReads = (props: BookReadTimeProps) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <PersonOutlineIcon fontSize="small" color="action" />
    <Typography variant="body1" color="gray" fontSize="14px">
      1.9k reads
    </Typography>
  </div>
);

export default BookReadTime;
