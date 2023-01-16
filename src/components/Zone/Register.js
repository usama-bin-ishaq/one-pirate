import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { FilledInput, InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import { VisibilityOff } from "@mui/icons-material";
import { Visibility } from "@mui/icons-material";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";
import { BsGithub } from "react-icons/bs";

const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = <></>;
  return (
    <Container maxWidth="lg" disableGutters>
      <Grid container spacing={4} sx={{ padding: "175px 0px" }}>
        <Grid item md={8}>
          <img
            src="../register1.png"
            style={{
              width: "100%",
              height: "90%",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          />
        </Grid>
        <Grid item md={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              boxShadow: "-24px 24px 72px -8px rgb(145 158 171 / 24%)",
              p: "32px",
              borderRadius: "16px"
            }}
          >
            <Box>
              <Typography
                variant="h5"
                my={2}
                sx={{
                  fontFamily: "Barlow,sans-serif",
                  color: "#212B36",
                  fontWeight: "bold"
                }}
              >
                Get Started
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Poppins,sans-serif",
                  colo: "#637381",
                  fontSize: "14px"
                }}
              >
                Already have an account? 
                <Link
                  to={`/`}
                  style={{
                    fontWeight: "bold",
                    color: "#ff2d60",
                    font: "Poppins, sans-serif"
                  }}
                >
                  Login
                </Link>
              </Typography>
            </Box>
            <form>
              <TextField
                id="empty"
                fullWidth
                label="Full Name"
                variant="filled"
                margin="dense"
                size="normal"
              />
              <TextField
                id="empty"
                fullWidth
                label="Email address"
                variant="filled"
                margin="dense"
                size="normal"
              />

              <Box>
                <FormControl variant="filled" fullWidth margin="dense">
                  <InputLabel htmlFor="filled-adornment-password">
                    Password
                  </InputLabel>
                  <FilledInput
                    margin="dense"
                    id="filled-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl variant="filled" fullWidth margin="dense">
                  <InputLabel htmlFor="filled-adornment-password">
                    Confirm Password
                  </InputLabel>
                  <FilledInput
                    margin="dense"
                    id="filled-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Box>
            </form>

            <Button variant="contained" sx={{ backgroundColor: "#fecc3a", my:2,color:"black" ,fontWeight:"bold" }}>
              Register
            </Button>
            <Typography fontSize={"small"} color="black" sx={{ my: 2 }}>
              
                I agree to <Link to={`/`}>Terms of Service</Link> and <Link to={`/`}>Privacy Policy.</Link>
              
            </Typography>
            <Typography variant="body1" my={4} color="text.secondary">
              <Divider>or continue with</Divider>
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                fontSize: "25px"
              }}
            >
              <FcGoogle />
              <IoLogoFacebook />
              <BsGithub />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
