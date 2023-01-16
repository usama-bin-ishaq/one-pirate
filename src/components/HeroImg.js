import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import MaximizeIcon from "@mui/icons-material/Maximize";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const HeroImg = () => {
  return (
    <Container
      disableGutters
      maxWidth="xxl"
      sx={{
        backgroundImage: 'url("../hero.jpg")',
        minHeight: "70vh",
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            py: "100px",
            zIndex: 4
          }}
        >
          <Box>
            <Typography
              variant="h1"
              textAlign={"center"}
              fontFamily={"'Roboto Condensed',sans-serif"}
              sx={{
                textTransform: "uppercase",
                color: "#fff",
                fontWeight: 700,
                // fontFamily: "'Roboto Condensed',sans-serif",
                fontSize: "48px",
                lineHeight: 1.2,
                textShadow: "1px 1px #fff"
              }}
            >
              upgrade our sunday
            </Typography>
            <Typography align="center">
              <MaximizeIcon
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
          <Box>
            <Typography
              fontFamily={"'Work Sans',sans-serif"}
              fontSize={18}
              m="80px 0px 32px"
              color={"#fff"}
              sx={{
                textShadow: "1/2px 1/2px #fff"
              }}
            >
              Enjoy secret offers up to -70% off the best luxury hotels every
              Sunday.
            </Typography>
          </Box>
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
          <Box>
            <Typography
              fontFamily={"'Work Sans',sans-serif"}
              mt="16px"
              color={"#fff"}
              fontSize="14px"
              sx={{
                textShadow: "1/2px 1/2px #fff"
              }}
            >
              Discover the experience
            </Typography>
            <Box>
              <Typography align="center" fontSize={"small"} color="yellow">
                <ArrowDownwardIcon sx={{ paddingTop: "62px" }} />
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default HeroImg;
