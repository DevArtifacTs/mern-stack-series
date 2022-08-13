import React from "react";
// MUI component
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
// MUI Icon
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PersonIcon from "@mui/icons-material/Person";
import HttpsIcon from "@mui/icons-material/Https";
// MUI hook
import { useTheme } from "@mui/material/styles";
// Component
import CustomizedInputBase from "./CustomizedInputBase";
import CustomizedLoginButton from "./CustomizedLoginButton";

const LogoContainer = styled(Box)(({ theme }) => ({
  // border: "1px solid red",
  // flexGrow: "1",

  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "1.5rem",
  maxHeight: "150px",
  maxWidth: "100%",
  columnGap: "1rem",
}));

const GreetingBox = styled(Box)(({ theme }) => ({
  // border: "1px solid red",
  display: "flex",
  // flexGrow: "5",
  flexDirection: "column",
  // alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
  rowGap: "1rem",
}));

const AlterLoginIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "1.5rem",
  rowGap: "1rem",
}));

function Login() {
  const theme = useTheme();

  return (
    // <Box sx={{ flexGrow: 1, minHeight: "100%", overflow: "hidden" }}>
    <Box sx={{ flexGrow: 1, minHeight: "100%" }}>
      <Grid container spacing={2} sx={{ minHeight: "100%", margin: "0" }}>
        <Grid
          padding={0}
          xs={4}
          sx={{
            display: "block",
            position: "relative",
            "&::after": {
              content: '""',
              backgroundImage: `url(https://images.unsplash.com/photo-1586380951230-e6703d9f6833?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: "0.4",
              top: "0",
              left: "0",
              bottom: "0",
              right: "0",
              position: "absolute",
              zIndex: "-1",
            },
          }}
        >
          <Box
            sx={{
              //   border: "1px solid red",
              minHeight: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <LogoContainer>
              {/* <img
                style={{
                  maxWidth: "50%",
                  height: "auto",
                  opacity: "0.8",
                  //   border: "1px solid red",
                }}
                src="./web-logo3.png"
                alt="web-logo"
                loading="lazy"
              /> */}
              <Typography
                variant="h1"
                sx={{
                  flexGrow: "1",
                  marginTop: "2rem",
                  fontSize: "2.25rem",
                  fontWeight: "800",
                  color: "#0A3E27",
                  fontFamily: `${theme.typography.fontFamily}`,
                  //   border: "1px solid red",
                }}
              >
                Note GatheR
              </Typography>
            </LogoContainer>

            <GreetingBox sx={{ bofer: "1px solid blue" }}>
              <Typography
                variant="h2"
                sx={{
                  textAlign: "center",
                  borderLeft: "10px solid #0A3E27",
                  borderRight: "10px solid #0A3E27",
                  fontSize: "1.25rem",
                  fontWeight: "800",
                  color: "#0A3E27",
                  fontFamily: `${theme.typography.title.fontFamily}`,
                }}
              >
                Your second brain's storage
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  textAlign: "start",
                  margin: "1rem",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#0A3E27",
                  fontFamily: `${theme.typography.fontFamily}`,
                }}
              >
                If you cannot remember it all, let we handle it for you.
              </Typography>
              <Divider sx={{ marginTop: "1rem" }} />
              <AlterLoginIcon>
                <Typography
                  variant="p"
                  sx={{
                    color: "#0A3E27",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  you can also login with
                  <Typography
                    variant="span"
                    sx={{ color: "rgba(0,0,0,0.7)", display: "block" }}
                  >
                    (coming soon!)
                  </Typography>
                </Typography>
                <ButtonGroup variant="button" aria-label="text button group">
                  <Button>
                    <IconButton>
                      <AppleIcon />
                    </IconButton>
                  </Button>
                  <Button>
                    <IconButton>
                      <FacebookIcon />
                    </IconButton>
                  </Button>
                  <Button>
                    <IconButton>
                      <TwitterIcon />
                    </IconButton>
                  </Button>
                </ButtonGroup>
              </AlterLoginIcon>
            </GreetingBox>
          </Box>
        </Grid>
        <Grid padding={0} xs={8} sx={{ bgcolor: "#F8F7F3" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              height: "100%",
              width: "100%",
              background: "rgb(226,209,191)",
              background:
                "linear-gradient(142deg, rgba(226,209,191,1) 0%, rgba(248,247,243,1) 42%, rgba(236,227,215,1) 80%)",
            }}
          >
            <Paper
              elevation={0}
              sx={{
                padding: "1rem",
                borderRadius: "15px",
                height: "50%",
                width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // justifyContent: "space-between",
              }}
            >
              <Stack sx={{ flexGrow: "1" }}>
                <Typography
                  variant="h2"
                  sx={{
                    textAlign: "start",
                    //   margin: "1rem",
                    fontSize: "1.75rem",
                    fontWeight: "800",
                    color: "#4B6EA9",
                    //   fontFamily: `${theme.typography.fontFamily}`,
                  }}
                >
                  Welcome To NoteGatheR
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    color: "rgba(0,0,0,0.5)",
                    textAlign: "center",
                    fontWeight: "500",
                    fontSize: "0.95rem",
                  }}
                >
                  Sign in by entering the information below
                </Typography>
              </Stack>
              <Stack
                spacing={2}
                direction="column"
                p={2}
                sx={{
                  padding: "1rem",
                  flexGrow: "1",
                  justifyContent: "space-around",
                }}
              >
                <FormGroup sx={{ padding: "1rem" }}>
                  <label
                    style={{ color: "rgba(0,0,0,0.5)" }}
                    htmlFor="user-name-input"
                  >
                    User name
                  </label>
                  <CustomizedInputBase
                    id="user-name-input"
                    type="text"
                    showStartIcon={<PersonIcon />}
                    placeholder="user name"
                    sx={{
                      marginBottom: "0.75rem",
                      border: "1px solid #F8F7F3",
                    }}
                  />
                  <label
                    style={{ color: "rgba(0,0,0,0.5)" }}
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <CustomizedInputBase
                    id="password"
                    type="password"
                    showStartIcon={<HttpsIcon />}
                    placeholder="password"
                    sx={{
                      marginBottom: "0.75rem",
                      border: "1px solid #F8F7F3",
                    }}
                  />
                  <Stack
                    direction="row"
                    sx={{
                      justifyContent: "space-between",
                      paddingLeft: "1rem",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="remember me"
                      sx={{ color: "rgba(0,0,0,0.5)" }}
                    />
                    <Button
                      variant="text"
                      sx={{
                        color: "#4B6EA9",
                        fontWeight: "800",
                        fontSize: ".75rem",
                      }}
                    >
                      Forgotten Password?
                    </Button>
                  </Stack>
                </FormGroup>
                <CustomizedLoginButton
                  sx={{ height: "60px", bgcolor: "#4B6EA9" }}
                />
                <Button variant="text">
                  Don't have an account? Sign up here.
                </Button>
              </Stack>
            </Paper>
          </Box>
          {/* </Box> */}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
