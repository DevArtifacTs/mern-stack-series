import React from "react";
// MUI component
import Button from "@mui/material/Button";
// import LoadingButton from "@mui/lab/LoadingButton";
import Stack from "@mui/material/Stack";
import LockOpenIcon from "@mui/icons-material/LockOpen";

function CustomizedLoginButton({ isLoading, sx }) {
  //   console.log("sx= ", sx);
  return (
    <Stack direction="row" sx={{ ...sx }}>
      {isLoading ? (
        <>
          {/* <LoadingButton loading variant="outlined">
            Submit
          </LoadingButton> */}
        </>
      ) : (
        <Button
          fullWidth={true}
          variant="contained"
          startIcon={<LockOpenIcon />}
          sx={{ ...sx }}
        >
          Sign In
        </Button>
      )}
    </Stack>
  );
}

export default CustomizedLoginButton;
