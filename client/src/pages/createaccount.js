import React from "react";
import Link from "@mui/material/Link";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Helmet } from "react-helmet";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#121212",
      contrastText: "#fff",
      labelColor: "#808080",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: [
      "Source Sans Pro",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function Signup() {

    const response = await fetch("http://localhost:4000/api/createuser", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 201 || response.status === "unknown") {
      alert("registration successful");
      history.push("/login");
    } else {
      alert("registration failed");
    }
  }
  return (
    <>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      <h1>
        <ThemeProvider theme={theme}>
          <Grid container component="main" sx={{ height: "100vh" }}>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={9}
              sx={{
                backgroundImage:
                  "url(https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Grid
              item
              xs={12}
              sm={8}
              md={3}
              component={Paper}
              elevation={6}
              sx={{
                backgroundColor: (t) =>
                  (t.palette.mode = t.palette.primary.dark),
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              square
            >
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  component="h1"
                  variant="h4"
                  color={"primary.contrastText"}
                  fontFamily={"Helvetica Neue"}
                >
                  Create Your Account
                </Typography>
                <Box
                  component="form"
                  noValidate
                  sx={{
                    mt: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyItems: "center",
                  }}
                >
                  <TextField
                    margin="normal"
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    sx={{
                      input: {
                        color: "primary.contrastText",
                      },
                      label: {
                        color: "primary.labelColor",
                      },
                    }}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    sx={{
                      input: {
                        color: "primary.contrastText",
                      },
                      label: {
                        color: "primary.labelColor",
                      },
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    sx={{
                      input: {
                        color: "primary.contrastText",
                      },
                      label: {
                        color: "primary.labelColor",
                      },
                    }}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      mt: 2,
                      mb: 2,
                      color: "primary.contrastText",
                      borderRadius: 1,
                    }}
                    onClick={Signup}
                  >
                    Create Account
                  </Button>
                  <Grid container>
                    <Grid item color={"white"} sx={{ ml: 1 }}>
                      {"Already Have an Account? "}
                      <Link variant="body1" href="/login">
                        {" Click here"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      </h1>
    </>
  );
};

export default CreateAccount;
