import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Avatar from "@mui/material/Avatar";
import CountrySelect from "./CountrySelect";
const HeroSection = () => {
  return (
    <Container maxWidth="xxl" disableGutters>
      <Box
        sx={{
          backgroundImage: 'url("../image1.jpg")',
          minHeight: "100vh",
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: 8
        }}
      >
        <Box
          sx={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 80%)",
            minHeight: "100vh",
            width: "100%"
          }}
        >
          <Grid
            container
            maxWidth="lg"
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 30
            }}
          >
            <Grid item lg={9}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",

                  zIndex: 9
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    color: "#fff",
                    fontWeight: 900,
                    fontSize: 55,

                    maxWidth: "380px",
                    textAlign: "center"
                  }}
                >
                  Italian Delights - 12 Days
                </Typography>

                <Box
                  sx={{
                    display: "flex",

                    justifyContent: "space-between",
                    color: "#fff",
                    alignItems: "center",
                    my: 4
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <AccessTimeIcon
                      sx={{ color: "#e74d1a", mr: 1 / 3, fontSize: 25 }}
                    />
                    <Typography align="center" sx={{}}>
                      3days 2nights
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mx: 4 }}>
                    <StarOutlineIcon
                      sx={{ color: "#e74d1a", mr: 1 / 3, fontSize: 25 }}
                    />
                    <Typography>3.2 reviews</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LocalAtmIcon
                      sx={{ color: "#e74d1a", mr: 1 / 3, fontSize: 25 }}
                    />
                    <Typography>starting at $269.99</Typography>
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#fa541c",
                    fontWeight: "bold",
                    fontSize: 10,
                    py: 2 / 2
                  }}
                >
                  Book Now
                </Button>
              </Box>
            </Grid>
            <Grid item lg={3}>
              <Box>
                <Box
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(8px)",
                    color: "#fff",
                    display: "flex",
                    // alignItems: "center",
                    p: "12px",
                    borderRadius: "16px",
                    maxWidth: "200px",
                    "&:hover": {
                        cursor: "pointer",
  
                        
                      }
                  }}
                >
                  <Box>
                    <Avatar
                      sx={{ height: 45, width: 45 }}
                      alt="Remy Sharp"
                      src="https://source.unsplash.com/random"
                    />
                  </Box>
                  <Box sx={{ justifyContent: "flex-start", mx: 2 }}>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 500, fontSize: "15px" }}
                    >
                      Kenya
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        my: 1 / 2,
                        alignItems: "center"
                      }}
                    >
                      <LocationOnOutlinedIcon
                        sx={{ fontSize: "25px", color: "#fa541c" }}
                      />
                      <Typography sx={{ mx: 1 / 2, fontSize: 10 }}>
                        Europe
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(8px)",

                    color: "#fff",
                    display: "flex",
                    // alignItems: "center",
                    p: "12px",
                    borderRadius: "16px",
                    maxWidth: "200px",
                    my: 2,
                    "&:hover": {
                      cursor: "pointer",

                      border: "1px solid #fa541c"
                    }
                  }}
                >
                  <Box>
                    <Avatar
                      sx={{ height: 45, width: 45 }}
                      alt="Remy Sharp"
                      src="https://source.unsplash.com/random"
                    />
                  </Box>
                  <Box sx={{ justifyContent: "flex-start", mx: 2 }}>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 500, fontSize: "15px" }}
                    >
                      Chitral
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        my: 1 / 2,
                        alignItems: "center"
                      }}
                    >
                      <LocationOnOutlinedIcon
                        sx={{ fontSize: "25px", color: "#fa541c" }}
                      />
                      <Typography sx={{ mx: 1 / 2, fontSize: 10 }}>
                        Asia
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(8px)",
                    color: "#fff",
                    display: "flex",
                    // alignItems: "center",
                    p: "12px",
                    borderRadius: "16px",
                    maxWidth: "200px",
                    "&:hover": {
                        cursor: "pointer",
  
                        border: "1px solid #fa541c"
                      }
                  }}
                >
                  <Box>
                    <Avatar
                      sx={{ height: 45, width: 45 }}
                      alt="Remy Sharp"
                      src="https://source.unsplash.com/random"
                    />
                  </Box>
                  <Box sx={{ justifyContent: "flex-start", mx: 2 }}>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 500, fontSize: "15px" }}
                    >
                      Netherland
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        my: 1 / 2,
                        alignItems: "center"
                      }}
                    >
                      <LocationOnOutlinedIcon
                        sx={{ fontSize: "25px", color: "#fa541c" }}
                      />
                      <Typography sx={{ mx: 1 / 2, fontSize: 10 }}>
                        Africa
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Container maxWidth="lg" sx={{backgroundColor: "rgba(255, 255, 255, 0.5)", py:4,borderRadius:"16px"}}>
            <Box sx={{display:"flex",alignItems:"center",p:"32px", }}>
            <LocationOnOutlinedIcon/>
            <CountrySelect/>
            </Box>
          </Container>
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
