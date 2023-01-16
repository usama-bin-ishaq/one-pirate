import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import MaximizeIcon from "@mui/icons-material/Maximize";

import CardMedia from "@mui/material/CardMedia";
const AboutUs = () => {
  return (
    <Container>
      <Grid container spacing={8}>
        <Grid item lg={5}>
          <Card
            sx={{
              borderRadius: "16px",
              boxShadow:
                "rgba(0, 0, 0, 0.15) 0rem 0.25rem 1.25rem 0rem, rgba(0, 187, 212, 0.4) 0rem 0.4375rem 0.625rem -0.3125rem"
            }}
          >
            <CardActionArea>
              <CardMedia
                sx={{
                  height: "100vh",
                  
                  backgroundSize: "cover",
                  backgroundPosition: "relative"
                }}
                component="img"
                image="../card1.jpg"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item lg={6}>
          <Box sx={{ display: "flex", flexDirection: "column", py: 10 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "30px" }}
            >
              Phasellus gravida semper nisi. Vestibulum rutrum
            </Typography>
            <Typography
            textAlign="justify"
              variant="body2"
              color="text.secondary"
              fontSize="medium"
              mt={3}
            >
              Curabitur a felis in nunc fringilla tristique. Fusce egestas elit
              eget lorem. Etiam vitae tortor. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos hymenaeos.
            </Typography>
          </Box>
          <Grid item container>
            <Box sx={{ display: "flex" }}>
              <Box>
                <Typography>
                  <MaximizeIcon
                    sx={{
                      height: "3px",
                      width: "25px",
                      display: "block",
                      my:3,
                      backgroundColor: "#fa541c"
                    }}
                  />
                </Typography>
                <Typography 
              variant="body2"
              color="text.secondary"
              fontSize="medium">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis
                </Typography>
              </Box>
              <Box ml={4}>
              <Typography>
                <MaximizeIcon
                  sx={{
                    height: "3px",
                    width: "25px",
                    display: "block",
                    my:3,
                    backgroundColor: "#fa541c"
                  }}
                />
              </Typography>
              <Typography 
              variant="body2"
              color="text.secondary"
              fontSize="medium" >
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis
              </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
