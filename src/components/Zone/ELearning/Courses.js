import { Divider, Grid, IconButton, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";

import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { Link } from "react-router-dom";
const Courses = () => {
  return (
    <Box my={8}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="h4" fontWeight="bold" fontSize={40}>
            Featured Courses
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            my={2}
            fontSize="medium"
          >
            Nullam accumsan lorem in dui. Praesent ac massa at ligula laoreet
            iaculis.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <IconButton>
            <WestIcon fontSize="mall" />
          </IconButton>
          <IconButton>
            <EastIcon fontSize="mall" />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ display: "flex" ,my:6 }}>
        <Card
          sx={{
            borderRadius: "16px",
            width: "100%",
            boxShadow: "rgb(145 158 171 / 16%) -16px 16px 56px -8px"
          }}
        >
          <CardMedia
            sx={{
              height: 300,
              backgroundSize: "cover",
              backgroundPosition: "absolute"
            }}
            image="../management.jpg"
            title="green iguana"
          />
          <Box sx={{ p: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  sx={{
                    fontSize: "small",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    color: "#fb6d3e"
                  }}
                >
                  management
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold", fontSize: 25 }}>
                  <span
                    style={{ color: "#919eab", textDecoration: "line-through" }}
                  ></span>{" "}
                  $255.99
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body2"
              my={3}
              sx={{ fontFamily: "'Noto Sans', sans-serif" ,fontWeight:"bolder" }}
            >
              The Secrets To Teaching Online
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center"
              }}
            >
              <Box sx={{ alignItems: "center", display: "flex", my: 2 }}>
                <Rating name="read-only" value={1} readOnly max={1} />
                <Typography>
                  <span style={{ fontWeight: "bolder" }}>3.6</span>
                  <span style={{ color: "text.seconday", fontSize: 14 }}>
                    {" "}
                    (3.46k reviews)
                  </span>
                </Typography>
              </Box>
              <Box>
                <Divider
                  orientation="vertical"
                  flexItem
                  variant="middle"
                  sx={{ height: "20px", mx: 2 }}
                />
              </Box>
              <Box>
                <Typography>
                  <sapn style={{ fontWeight: "bolder" }}>180k </sapn>students
                </Typography>
              </Box>
            </Box>

            <Box sx={{ alignItems: "center", display: "flex" }}>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 34, height: 34 ,bgcolor:"#ff5722"}}
              />
              <Typography variant="body1" fontSize={15} mx={1}>
                Weliam Jhon{" "}
                <Link style={{ color: "#83909b" }}>+5 teachers</Link>
              </Typography>
            </Box>

            <Box></Box>

            <Divider sx={{ my: 3, borderStyle: "dashed" }} />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly"
              }}
            >
              <Box>
                <Typography sx={{ alignItems: "center", display: "flex" }}>
                  <ScheduleIcon />
                  100 hours
                </Typography>
              </Box>

              <Box>
                <Typography sx={{ alignItems: "center", display: "flex" }}>
                  <SignalCellularAltOutlinedIcon />
                  expert
                </Typography>
              </Box>
            </Box>
          </Box>
        </Card>
        <Card
          sx={{
            borderRadius: "16px",
            width: "100%",
            boxShadow: "rgb(145 158 171 / 16%) -16px 16px 56px -8px",
            mx: 4
          }}
        >
          <CardMedia
            sx={{
              height: 300,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
            image="../marketing.jpg"
            title="green iguana"
          >
            <Chip
              label="best seller"
              variant="contained"
              sx={{
                fontWeight: "bolder",
                textTransform: "uppercase",
                backgroundColor: "#ffc81a",
                m: 2,
                borderRadius: "16px"
              }}
            />
          </CardMedia>
          <Box sx={{ p: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  sx={{
                    fontSize: "small",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    color: "#fb6d3e"
                  }}
                >
                  marketing
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold", fontSize: 25 }}>
                  <span
                    style={{ color: "#919eab", textDecoration: "line-through" }}
                  >
                    $89.99
                  </span>{" "}
                  $289.99
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body2"
              my={3}
              sx={{ fontWeight: "bold", fontSize: 18 }}
            >
              The Secrets To Teaching Online
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center"
              }}
            >
              <Box sx={{ alignItems: "center", display: "flex", my: 2 }}>
                <Rating name="read-only" value={1} readOnly max={1} />
                <Typography>
                  <span style={{ fontWeight: "bolder" }}>3.6</span>
                  <span style={{ color: "text.seconday", fontSize: 14 }}>
                    {" "}
                    (3.46k reviews)
                  </span>
                </Typography>
              </Box>
              <Box>
                <Divider
                  orientation="vertical"
                  flexItem
                  variant="middle"
                  sx={{ height: "20px", mx: 2 }}
                />
              </Box>
              <Box>
                <Typography>
                  <sapn style={{ fontWeight: "bolder" }}>180k </sapn>students
                </Typography>
              </Box>
            </Box>

            <Box sx={{ alignItems: "center", display: "flex" }}>
              <Avatar
                
                src="/static/images/avatar/1.jpg"
                sx={{ width: 34, height: 34,bgcolor:"#ff5722" }}
              />
              <Typography variant="body1" fontSize={15} mx={1}>
                Weliam Jhon{" "}
                <Link style={{ color: "#83909b" }}>+5 teachers</Link>
              </Typography>
            </Box>

            <Box></Box>

            <Divider sx={{ my: 3, borderStyle: "dashed" }} />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly"
              }}
            >
              <Box>
                <Typography sx={{ alignItems: "center", display: "flex" }}>
                  <ScheduleIcon />
                  100 hours
                </Typography>
              </Box>

              <Box>
                <Typography sx={{ alignItems: "center", display: "flex" }}>
                  <SignalCellularAltOutlinedIcon />
                  expert
                </Typography>
              </Box>
            </Box>
          </Box>
        </Card>
        <Card
          sx={{
            borderRadius: "16px",
            width: "100%",
            boxShadow: "rgb(145 158 171 / 16%) -16px 16px 56px -8px"
          }}
        >
          <CardMedia
            sx={{
              height: 300,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
            image="../design.jpg"
            title="green iguana"
          />
          <Box sx={{ p: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  sx={{
                    fontSize: "small",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    color: "#fb6d3e"
                  }}
                >
                  Design
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold", fontSize: 25 }}>
                  <span
                    style={{ color: "#919eab", textDecoration: "line-through" }}
                  ></span>{" "}
                  $265.99
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body2"
              my={3}
              sx={{ fontWeight: "bold", fontSize: 18 }}
            >
              The Secrets To Teaching Online
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center"
              }}
            >
              <Box sx={{ alignItems: "center", display: "flex", my: 2 }}>
                <Rating name="read-only" value={1} readOnly max={1} />
                <Typography>
                  <span style={{ fontWeight: "bolder" }}>3.6</span>
                  <span style={{ color: "text.seconday", fontSize: 14 }}>
                    {" "}
                    (3.46k reviews)
                  </span>
                </Typography>
              </Box>
              <Box>
                <Divider
                  orientation="vertical"
                  flexItem
                  variant="middle"
                  sx={{ height: "20px", mx: 2 }}
                />
              </Box>
              <Box>
                <Typography>
                  <sapn style={{ fontWeight: "bolder" }}>180k </sapn>students
                </Typography>
              </Box>
            </Box>

            <Box sx={{ alignItems: "center", display: "flex" }}>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 34, height: 34 ,bgcolor:"#ff5722"}}
              />
              <Typography variant="body1" fontSize={15} mx={1}>
                Weliam Jhon{" "}
                <Link style={{ color: "#83909b" }}>+5 teachers</Link>
              </Typography>
            </Box>

            <Box></Box>

            <Divider sx={{ my: 3, borderStyle: "dashed" }} />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly"
              }}
            >
              <Box>
                <Typography sx={{ alignItems: "center", display: "flex" }}>
                  <ScheduleIcon />
                  100 hours
                </Typography>
              </Box>

              <Box>
                <Typography sx={{ alignItems: "center", display: "flex" }}>
                  <SignalCellularAltOutlinedIcon />
                  expert
                </Typography>
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default Courses;
