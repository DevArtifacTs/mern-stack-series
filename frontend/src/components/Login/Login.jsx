import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";

import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import { useTheme } from "@mui/material/styles";

const LogoContainer = styled(Box)(({ theme }) => ({
  flexGrow: "8",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  padding: "1.5rem",
  maxWidth: "100%",
  columnGap: "1rem",
  //   border: "1px solid red",
}));

const GreetingBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexGrow: "1",
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
    <Box sx={{ flexGrow: 1, minHeight: "100%" }}>
      <Grid container spacing={2} sx={{ minHeight: "100%" }}>
        <Grid
          padding={0}
          xs={4}
          sx={{
            display: "block",
            position: "relative",
            "&::after": {
              content: '""',
              backgroundImage: `url(https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "right top",
              opacity: "0.6",
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
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <LogoContainer>
              <img
                style={{
                  maxWidth: "50%",
                  height: "auto",
                  //   border: "1px solid red",
                }}
                src="https://cdn.pixabay.com/photo/2018/03/04/22/17/a-3199409_960_720.png"
                alt=""
              />
              <Typography
                variant="h1"
                sx={{
                  flexGrow: "1",
                  marginTop: "2rem",
                  fontSize: "2.25rem",
                  fontWeight: "800",
                  color: "#0A3E27",
                  fontFamily: `${theme.typography.title.fontFamily}`,
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
                    color: "#4B6EA9",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  you can also login with
                  <Typography
                    variant="span"
                    sx={{ color: "#CC88FF", display: "block" }}
                  >
                    (coming soon!)
                  </Typography>
                </Typography>
                <ButtonGroup variant="text" aria-label="text button group">
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
        <Grid padding={0} xs={8}>
          <Box sx={{ border: "1px solid red", height: "100%" }}></Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
