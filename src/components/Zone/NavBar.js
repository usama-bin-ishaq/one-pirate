import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { HiOutlineGlobeAlt } from 'react-icons/hi';
import { Link } from "react-router-dom";
import { Divider } from '@mui/material';
export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{backgroundColor:"rgba(255, 255, 255, 0.8)", color:"rgb(33, 43, 54)",boxShadow:"none"}}>
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>
            ZONE.
          </Typography>
          
          <HiOutlineGlobeAlt size={25}  />
          <Divider orientation="vertical" flexItem  variant="middle"  sx={{mx:2}}/>
          <Typography>
          <Link to={`/`} style={{textDecoration:"none"}}>Support</Link>
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
