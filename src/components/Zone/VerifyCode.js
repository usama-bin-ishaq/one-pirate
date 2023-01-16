import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

const VerifyCode = () => {
  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          width: "100%",
          mx: "470px",
          p: "120px 20px"
        }}
      >
        <Box sx={{ mb: 4 }}>
          <img src="../icon1.jpg" style={{ height: "96px", width: "96px" ,borderRadius:"50%"}} />
        </Box>
        <Box>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", fontSize: "30px" }}
          >
            check your email
          </Typography>
          <Typography my={2} variant="subtitle2" color={"text.secondary"}>
            We have emailed a 6-digit confirmation code to acb@domain, please
            enter the code in below box to verify your email.
          </Typography>
        </Box>
        <TextField
          sx={{ borderBottom: "none" }}
          id="empty"
          fullWidth
          label="Email address"
          variant="filled"
          margin="normal"
          size="normal"
        />
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#6c63ff",
            textTransform: "uppercase",
            my: 2,
            p: 1,
            background: "#ff4f19"
          }}
        >
          Verify
        </Button>
        <Typography>
          Don’t have a code? <Link to={`/`}>Resend code</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default VerifyCode;
