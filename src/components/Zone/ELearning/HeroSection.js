import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Divider from "@mui/material/Divider";
const HeroSection = () => {
  return (
    <Container disableGutters maxWidth="lg">
      <Grid
        container
        spacing={3}
        maxWidth="lg"
        py={20}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid item lg={5}>
          <Box>
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="h1"
                sx={{ fontWeight: "bold", fontSize: 60 }}
              >
                Free Online{" "}
                <span style={{ color: "#fa541c", textDecoration: "underline" }}>
                  Courses{" "}
                </span>
                From The Experts
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secodary"
                my={2}
                textAlign="justify"
              >
                Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum
                laoreet sapien, quis venenatis ante odio sit amet eros.
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    py: 1.5,
                    backgroundColor: "#fa541c",
                    fontWeight: "bold"
                  }}
                >
                  Ready Strart
                  <ChevronRightIcon fontSize="small" />
                </Button>
                <PlayCircleFilledIcon
                  sx={{ mx: 2, color: "#22b8cf", fontSize: "60px" }}
                />
              </Box>
              <Divider sx={{ my: 5 }} />
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    14k+
                  </Typography>
                  <Typography
                    variant="subtitle2 "
                    color={"text.secondary"}
                    sx={{ textAlign: "center" }}
                  >
                    {" "}
                    learners
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    105k+
                  </Typography>
                  <Typography
                    variant="subtitle2 "
                    color={"text.secondary"}
                    sx={{ textAlign: "center" }}
                  >
                    Courses
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    59k+
                  </Typography>
                  <Typography
                    variant="subtitle2 "
                    color={"text.secondary"}
                    sx={{ textAlign: "center" }}
                  >
                    Graduates
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={7}>
          <img
            src="../hero1.svg"
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%"
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;
