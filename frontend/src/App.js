import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#4B6EA9",
        alternative: "#FFFFFF",
      },
      secondary: {
        main: "#cbcbcb",
      },
      decorate: {
        main: "#ED6A5A",
        alternative: "F08700",
      },
    },
    typography: {
      title: {
        fontFamily: ["Montserrat Subrayada", "sans-serif"].join(","),
      },
      fontFamily: ["Montserrat Alternates", "sans-serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100vh",
        }}
      >
        {/* <Header />
        <Box component="main" sx={{ flexGrow: "10" }}>
          This is main tag
        </Box>
        <Footer /> */}
        <Login />
      </Box>
    </ThemeProvider>
  );
}

export default App;
