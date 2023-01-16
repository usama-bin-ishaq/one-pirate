import { Height } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

export const FooterContent = (props) => {
  return (
    <Box
      sx={{
        display: "flex",

        flexDirection: "column"
      }}
    >
      <Box>
        <Typography
          variant="subtitle2"
          fontWeight="bold"
          fontSize={"medium"}
          my={2}
        >
          {props.title}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body1">{props.subtitle}</Typography>
        <Typography variant="body1">{props.subtitle1}</Typography>
      </Box>
    </Box>
  );
};
