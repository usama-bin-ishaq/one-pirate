import { Height } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

export const FooterContent = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        // justifyContent: "flex-end",
        flexDirection: "column"
        // width:"100%",
        // height:"100%"
      }}
    >
      <Box>
        <Typography
          variant="subtitle2"
          fontWeight="bold"
          fontSize={"medium"}
          fontFamily={"Barlow, sans-serif"}
          my={2}
        >
          {props.title}
        </Typography>
      </Box>
      <Box color="black">
        <Typography variant="body1" fontSize={"small"}>
          <Link to={`/`}>{props.subtitle}</Link>
        </Typography>
        <Typography variant="body1" fontSize={"small"} my={1 / 1}>
          <Link to={`/`}>{props.subtitle1}</Link>
        </Typography>
        <Typography variant="body1" fontSize={"small"}>
          <Link to={`/`}>{props.subtitle2}</Link>
        </Typography>
        <Typography variant="body1" fontSize={"small"} my={1 / 1}>
          <Link to={`/`}>{props.subtitle3}</Link>
        </Typography>
        <Typography variant="body1" fontSize={"small"}>
          <Link to={`/`}>{props.subtitle4}</Link>
        </Typography>
        <Typography variant="body1" fontSize={"small"} my={1 / 1}>
          <Link to={`/`}>{props.subtitle5}</Link>
        </Typography>
        <Typography variant="body1" fontSize={"small"}>
          <Link to={`/`}>{props.subtitle6}</Link>
        </Typography>
        <Typography variant="body1" fontSize={"small"} my={1 / 1}>
          <Link to={`/`}>{props.subtitle7}</Link>
        </Typography>
        <Typography variant="body1" fontSize={"small"}>
          <Link to={`/`}>{props.subtitle8}</Link>
        </Typography>
        <Typography variant="body1" fontSize={"small"} my={1 / 1}>
          <Link to={`/`}>{props.subtitle9}</Link>
        </Typography>
        <Typography variant="body1" fontSize={"small"}>
          <Link to={`/`}>{props.subtitle10}</Link>
        </Typography>
        <Typography variant="body1" fontSize={"small"} my={1 / 1}>
          <Link to={`/`}>{props.subtitle11}</Link>
        </Typography>
        <Typography variant="body1" fontSize={"small"}>
          <Link to={`/`}>{props.subtitle12}</Link>
        </Typography>
        <Typography variant="body1" fontSize={"small"} my={1 / 1}>
          <Link to={`/`}>{props.subtitle13}</Link>
        </Typography>
        <Typography variant="body1" fontSize={"small"}>
          <Link to={`/`}>{props.subtitle14}</Link>
        </Typography>
      </Box>
    </Box>
  );
};
