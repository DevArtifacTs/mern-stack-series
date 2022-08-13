import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

export default function CustomizedInputBase({
  showStartIcon,
  showInnerIcon,
  showEndIcon,
  placeholder,
  elevation,
  type,
  id,
  sx,
  ...props
}) {
  return (
    <Paper
      elevation={elevation ? elevation : 0}
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        ...sx,
      }}
    >
      {showStartIcon && (
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          {/* {showStartIcon.length > 0 ? <showStartIcon /> : <MenuIcon />} */}
          {showStartIcon}
        </IconButton>
      )}
      <InputBase
        id={id}
        type={type}
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder ? placeholder : "input information"}
        // inputProps={{
        //   "aria-label": placeholder ? placeholder : "input information",
        // }}
      />
      {showInnerIcon && (
        <>
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            {showStartIcon.length > 0 ? <showInnerIcon /> : <SearchIcon />}
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </>
      )}
      {showEndIcon && (
        <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
          {showStartIcon.length > 0 ? <showEndIcon /> : <DirectionsIcon />}
        </IconButton>
      )}
    </Paper>
  );
}
