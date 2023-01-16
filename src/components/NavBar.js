import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#28282a",
          color: "#fff",
          textTransform: "uppercase"
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            align="center"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700, fontSize: "20px" }}
          >
            onepirate
          </Typography>
          <Button color="inherit" sx={{ fontWeight: "550", fontSize: "14px" }}>
            sign in
          </Button>
          <Button
            sx={{
              color: "#ff3366",
              ml: "24px",
              fontWeight: 550,
              fontSize: "14px"
            }}
          >
            sign up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
