import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

const FooterLogo = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        width: "100%",
        height: "100%"
      }}
    >
      <Box>
        <Typography variant="h6" fontSize={"medium"} fontWeight="bold" fontFamily={"Barlow, sans-serif"}>
          ZONE .
        </Typography>
        <Typography variant="body1" fontSize={"small"} my={3} >
          The starting point for your next project based on easy-to-customize
          Material-UI © helps you build apps faster and better.
        </Typography>
        <Box>
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            fontSize={"medium"}
            my={2}
            fontFamily={"Barlow, sans-serif"}
          >
            Social
          </Typography>
        </Box>
      </Box>
      <Box>
        <FacebookIcon sx={{mx:"10px"}} />
        <TwitterIcon sx={{mx:"10px"}} />
        <GitHubIcon sx={{mx:"10px"}}/>
        <YouTubeIcon  sx={{mx:"10px"}}/>
      </Box>
      <Box>
        <Typography
          variant="subtitle2"
          fontWeight="bold"
          fontSize={"medium"}
          fontFamily={"Barlow, sans-serif"}
          my={2}
        >
         Documentation
        </Typography>
        <Typography variant="body2" fontSize={"small"} fontFamily={"Barlow, sans-serif"}>
          <Link to={`/`}>Documentation</Link> 
        </Typography>
        <Typography variant="body2" fontSize={"small"} my={2} >
          <Link to={`/`}>Changelog</Link>
        </Typography>
        <Typography variant="body2" fontSize={"small"}>
          <Link to={`/`}>Contributing</Link>
        </Typography>
      </Box>      
      <Box>
        <Typography
          variant="subtitle2"
          fontWeight="bold"
          fontSize={"medium"}
          my={2}
          fontFamily={"Barlow, sans-serif"}
        >
          Let’s stay in touch
        </Typography>
        <Typography variant="body2" fontSize={"small"} >
          Ubscribe to our newsletter to receive latest articles to your inbox                          
          weekly.
        </Typography>
      </Box>
      <Box>
        <TextField id="outlined-basic" margin="normal" placeholder="Email address" variant="outlined" />
      </Box>
    </Container>
  );
};

export default FooterLogo;
