import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TextField from "@mui/material/TextField";
const Form = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ffc071",
          justifyContent: "center",
          alignItems: "flex-start",
          boxSizing: "border-box",
          py: 6,
          px: 4,
          width: "100%",
          zIndex: 1
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: "30px",
              color: "rgba(0, 0, 0, 0.87)",
              textTransform: "uppercase"
            }}
          >
            RECEIVE OFFERS
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: "'Work Sans',sans-serif",
              fontSize: "20px",
              fontSize: "small",
              my: 3
            }}
          >
            Taste the holidays of the everyday close to home.
          </Typography>
        </Box>
        <Box width="100%">
          <TextField
            variant="outlined"
            margin="normal"
            focused
            fullWidth
            placeholder="Your email"
            sx={{ background: "#fff" }}
          />
        </Box>
        <Box width="100%">
          <Button
            fullWidth
            variant="contained"
            sx={{
              my: 2,
              background: "rgba(0, 0, 0, 0.87)",
              color: "#fff",
              padding: "16px 32px",
              borderRadius: 0,
              fontSize: "0.875rem",
              fontWeight: "700",
              fontFamily: "'Roboto Condensed',sans-serif"
            }}
          >
            KEEP ME UPDATE
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
