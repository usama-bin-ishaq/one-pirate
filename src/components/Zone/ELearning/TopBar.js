import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import { Container, width } from "@mui/system";
export default function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          color: "rgb(33, 43, 54)",
          boxShadow: "none"
        }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <img
                src="../logo2.jpg"
                style={{ width: "90px", height: "90px" }}
              />
              <Typography mx={3}>Home</Typography>
              <Typography>Documentation</Typography>
              <Typography mx={3}>Pages</Typography>
              <Typography>Components</Typography>
            </Box>
            <HiOutlineGlobeAlt size={25} />
            <Divider
              orientation="vertical"
              flexItem
              variant="middle"
              sx={{ mx: 2 }}
            />
            <Typography>
              <Link to={`/`} style={{ textDecoration: "none" }}>
                Support
              </Link>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
