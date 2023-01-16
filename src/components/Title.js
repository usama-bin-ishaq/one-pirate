import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SupportIcon from "@mui/icons-material/Support";
const Title = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <Box>
        <Typography></Typography>
        <Button
          variant="h4"
          sx={{
            fontWeight: 600,
            fontFamily:"'Roboto Condensed',sans-serif",
            fontSize: "25px",
            fontFamily: "'Roboto Condensed',sans-serif",
            color: "rgba(0, 0, 0, 0.87)",
            textTransform: "uppercase",
            border: "4px solid currentColor",
            py:1,
            minHeight:"64px",
          }}
        >
          Got any questions? Need help?
        </Button>
      </Box>
      <Box>
        <Typography my={3}
          sx={{
            fontSize: "medium",
            fontFamily: "'Work Sans',sans-serif",
            color: "rgba(0, 0, 0, 0.87)"
          }}
        >
          We are here to help. Get in touch!
        </Typography>
      </Box>
      <Box>
        <SupportIcon sx={{fontSize:70}} />
      </Box>
    </Box>
  );
};

export default Title;
