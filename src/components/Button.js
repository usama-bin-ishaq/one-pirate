import { Box } from "@mui/system";
import React from "react";

const Button = () => {
  return (
    <Box>
      <Box>
        <Button
          variant="contained"
          size="large"
          sx={{
            textTransform: "upercase",
            border: "none",
            borderRadius: 0,
            p: "16px 40px",
            background: "transparent",
            color: "#fff",
            backgroundColor: "#ff3366",
            minWidth: "200px",
            fontSize: "1rem",
            fontWeight: "bold"
          }}
        >
          rigester
        </Button>
      </Box>
    </Box>
  );
};

export default Button;
