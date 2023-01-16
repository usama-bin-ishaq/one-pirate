import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { SiAirbnb, SiNetflix } from "react-icons/si";
const Achivments = () => {
  return (
    <Container maxWidth="lg">
      <Grid container my={8}>
        <Grid item lg={12} >
          <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
            <Typography variant="h5" fontWeight="bold" fontSize={40}>We Work With</Typography>
            <Typography variant="body2"  my={4} fontSize="medium">
              Quisque aliquet, libero consequat elementum convallis.
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              my:4
            }}
          >
            <img
              src="../logo2.png"
              style={{ width: "106px", height: "50px" }}
            />

            <img
              src="../logo3.png"
              style={{ width: "106px", height: "50px" }}
            />

            <img
              src="../logo4.png"
              style={{ width: "106px", height: "50px" }}
            />

            <img
              src="../logo5.png"
              style={{ width: "106px", height: "50px" }}
            />

            <img
              src="../logo6.png"
              style={{ width: "106px", height: "50px" }}
            />

            <img
              src="../logo7.png"
              style={{ width: "106px", height: "50px" }}
            />
             <img
              src="../dropbox.svg"
              style={{ width: "106px", height: "50px", background:"transparent"}}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Achivments;
