import { Typography } from "@mui/material";
import { Box, display } from "@mui/system";
import React from "react";

import { CgFacebook, CgTwitter } from "react-icons/cg";
const FooterLogo = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}
      >
        <Box
          sx={{
            display:"flex",
            backgroundColor: "#ffc071",
            width: "48px",
            height: "48px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <CgFacebook />
        </Box>
        <Box
         sx={{
          display:"flex",
          backgroundColor: "#ffc071",
          width: "48px",
          height: "48px",
          justifyContent: "center",
          alignItems: "center",ml:2
        }}
        >
          <CgTwitter />
        </Box>
      </Box>
      <Box><Typography my={2}>
      © Your Website 2023
        </Typography></Box>
    </Box>
  );
};

export default FooterLogo;
