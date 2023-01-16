import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
const Forgetpswrd = () => {
  return (
    <Container maxWidth="xl" disableGutters sx={{display:"flex",justifyContent:"center",}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          width:"100%",
          mx:"470px",
          p:"120px 20px"
        }}
      >
        <Box sx={{mb: 4 }}>
          <img
            src="../pswrd1.png"
            style={{ height: "96px", width: "96px", }}
          />
        </Box>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: "bold" , fontSize:"30px" }}>
            Forgot Your Password?
          </Typography>
          <Typography my={2} variant="subtitle2" color={"text.secondary"}>
            Please enter the email address associated with your account and We
            will email you a link to reset your password.
          </Typography>
        </Box>
        <TextField
        sx={{borderBottom:"none"}}
          id="empty"
          fullWidth
          label="Email address"
          variant="filled"
          margin="normal"
          size="normal"
          
        />
        <Button
          variant="contained" fullWidth
          sx={{ backgroundColor: "#6c63ff", textTransform: "uppercase" ,my:2, p:1, background:"#ff4f19"}}
        >
          reset password
        </Button>
      </Box>
    </Container>
  );
};

export default Forgetpswrd;
