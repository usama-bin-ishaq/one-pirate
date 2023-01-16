import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

export default function CardSection(props) {
  return (
    <Container disableGutters>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "transparent",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: 0
        }}
      >
        <Box>
          <Typography
            align="cernter"
            sx={{ fontSize: "50px", textAlign: "center" }}
          >
            {props.icon}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              my: 4,
              fontSize: "18px",
              fontFamily: "'Roboto Condensed',sans-serif"
            }}
          >
            {" "}
            {props.title}
          </Typography>
        </Box>
        <Box sx={{ px: 2 }}>
          <Typography
            sx={{
              fontSize: "small",
              fontFamily: "'Work Sans',sans-serif",
              fontSize: "14px"
            }}
          >
            {props.description}
          </Typography>
        </Box>
      </Card>
    </Container>
  );
}
