import * as React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
const TextFieldSearch = () => {
  return (
    <Box>
      <TextField
        sx={{ margin: "2% 0%", width: "598px"}}
        
        id="input-with-icon-textfield"
        placeholder="Search by title or author"
        InputProps={{
          style:{borderBottom:"2px solid gray", paddingBottom:"4px"},
          disableUnderline:true,
          color:"secondary",
          startAdornment: (
            <InputAdornment position="start">
              <SearchSharpIcon fontSize="medium"  />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </Box>
  );
}


export default TextFieldSearch;