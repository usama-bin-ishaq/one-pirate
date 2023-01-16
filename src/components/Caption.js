import { Box, Typography } from "@mui/material";
import { Maximize } from "@mui/icons-material";
import React from "react";

const Caption = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        py: 6
      }}
    >
      <Box>
        <Typography
          variant="h4"
          textAlign={"center"}
          fontFamily={"'Roboto Condensed',sans-serif"}
          sx={{
            textTransform: "uppercase",
            color: "#000",
            fontWeight: 700,
            // fontFamily: "'Roboto Condensed',sans-serif",
            fontSize: "30px",
            lineHeight: 1.2,
            textShadow: "1px 1px #fff"
          }}
        >
          FOR ALL TASTES AND ALL DESIRES
        </Typography>
        <Typography align="center">
          <Maximize
            sx={{
              height: "4px",
              width: "73px",
              display: "block",
              margin: "6px auto 0",
              backgroundColor: "#ff3366"
            }}
          />
        </Typography>
      </Box>
    </Box>
  );
};

export default Caption;
