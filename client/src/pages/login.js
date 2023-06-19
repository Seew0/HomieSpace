import React from "react";
import Link from "@mui/material/Link";
import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
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
      test: "#000fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login(e) {
    try {
      e.preventDefault();
      let response = await fetch("http://localhost:4000/api/v1/signin", {
        method: "POST",
        body: JSON.stringify({
          email: username,
          password: password,
        }),
        headers: { "Content-Type": "application/JSON" },
        credentials: "include",
      });
      response = await response.json();
      console.log(response);
      if (response.data.token) {
        localStorage.setItem("ResponseToken", response.data.token);
        window.location.href = "http://localhost:3000/app/dashboard";
      } else {
        alert("wrong credentials");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
    <Helmet><title>Login</title></Helmet>
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
                  "url(https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?cs=srgb&dl=pexels-david-mcbee-1546168.jpg&fm=jpg)",
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
                >
                  Login to Your Account
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
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="remember"
                        color="primary"
                        sx={{
                          color: "primary.contrastText",
                        }}
                      />
                    }
                    label="Remember me"
                    sx={{
                      color: "primary.labelColor",
                    }}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 2,
                      mb: 2,
                      color: "primary.contrastText",
                      borderRadius: 1,
                    }}
                    onSubmit={login}
                  >
                    Log in
                  </Button>
                  <Grid container>
                    <Grid item color={"white"} sx={{ ml: 1 }}>
                      {"Don't have an account? "}
                      <Link variant="body1" href="/create-account">
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

export default Login;
