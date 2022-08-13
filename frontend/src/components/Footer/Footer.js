import React from "react";
import {
  Box,
  AppBar,
  styled,
  Divider,
  BottomNavigation,
  BottomNavigationAction,
  Typography,
  Chip,
  Popper,
} from "@mui/material";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import ContactPageRoundedIcon from "@mui/icons-material/ContactPageRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InboxIcon from "@mui/icons-material/Inbox";

import { useTheme } from "@mui/material/styles";

// const styledFooterIconWrapper = styled(BottomNavigation)(({ theme }) => ({
//   display: "flex",
//   flexGrow: "1",
//   justifyContent: "space-around",
// }));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: "#ffffff",
  fontSize: "1.5rem",
  "&:hover": {
    // position: "absolute",
    // top: "-0.5rem",
    color: `${theme.palette.decorate.main}`,
    cursor: "pointer",
    textDecoration: "underline",
  },
}));

function Footer() {
  const theme = useTheme();

  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //   for popper
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <Box
      sx={{
        flexGrow: "0.1",
        backgroundColor: `${theme.palette.primary.main}`,
        padding: "0.2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // position: "relative",
      }}
    >
      <StyledTypography>NoteGatheR</StyledTypography>
      <BottomNavigation
        sx={{
          width: 800,
          background: "#4B6EA9",
          margin: "0",
          marginBottom: "0.5rem",
        }}
        value={value}
        onChange={handleChange}
        // onMouseLeave={handleChange}
      >
        <BottomNavigationAction
          onClick={(e) => setAnchorEl(null)}
          sx={{ color: "#ffffff", ":hover": { color: "#CBCBCB" } }}
          label="Home"
          value="home"
          icon={
            <HomeRoundedIcon sx={{ color: "#ffffff", marginBottom: ".1rem" }} />
          }
        />
        <BottomNavigationAction
          onClick={(e) => setAnchorEl(null)}
          sx={{ color: "#ffffff", ":hover": { color: "#CBCBCB" } }}
          label="Author"
          value="author"
          icon={
            <CreateRoundedIcon
              sx={{ color: "#ffffff", marginBottom: ".1rem" }}
            />
          }
        />
        <BottomNavigationAction
          onClick={handleClick}
          sx={{ color: "#ffffff", ":hover": { color: "#CBCBCB" } }}
          label="Contacts"
          value="contact"
          icon={
            <>
              <ContactPageRoundedIcon
                sx={{ color: "#ffffff", marginBottom: ".1rem" }}
              />
              <Popper id={id} open={open} anchorEl={anchorEl}>
                <ContactPageRoundedIcon
                  sx={{ color: "#ffffff", marginBottom: ".1rem" }}
                />
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                >
                  <nav aria-label="main mailbox folders">
                    <List>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <InboxIcon sx={{ color: "#1976d2" }} />
                          </ListItemIcon>
                          <ListItemText primary="Email" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <FacebookRoundedIcon sx={{ color: "#1976d2" }} />
                          </ListItemIcon>
                          <ListItemText primary="Drafts" />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </nav>
                  <Divider />
                </Box>
              </Popper>
            </>
          }
        />
      </BottomNavigation>
      <Divider
        variant="middle"
        sx={{
          width: "80%",
          color: "#ffffff",
          background: "#cbcbcb",
        }}
      />
      <Chip
        sx={{
          color: "#000000",
          background: "#ffffff",
          margin: "0.6rem",
          ":hover": { bgcolor: `${theme.palette.decorate.main}` },
        }}
        label={<Typography>&copy; 2022 JesSri All right reserved </Typography>}
      />
    </Box>
  );
}

export default Footer;
