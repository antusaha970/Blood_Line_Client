import styled from "@emotion/styled";
import { MenuOpen } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  Stack,
  Typography,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";
import { signOut, auth } from "../../../firebase/firebase.config";

const LogoText = styled(Typography)`
  font-size: 30px;
  font-weight: 800;
`;

export const CustomBtn1 = styled(Button)`
  background: red;
  color: white;
  box-shadow: none;
  border-radius: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  & a {
    color: white;
  }
`;

export const CustomBtn2 = styled(Button)`
  background: #000000;
  color: white;
  box-shadow: none;
  border-radius: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  & a {
    color: white;
  }
`;

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container maxWidth="lg">
      <Stack
        direction="row"
        sx={{
          py: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <LogoText component="p" variant="p">
            <font color="black">Blood</font>-<font color="red">Line</font>
          </LogoText>
        </Box>
        <Box display={{ lg: "block", md: "block", sm: "none", xs: "none" }}>
          <Stack direction="row" alignItems="center">
            <div id="menuBar">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact Us
              </NavLink>
            </div>
            <CustomBtn1 variant="contained">
              <Link to="/register">Register</Link>
            </CustomBtn1>
            <CustomBtn2 variant="contained" color="secondary">
              <Link to="/find_blood">Seek Blood</Link>
            </CustomBtn2>
            <Button onClick={() => signOut(auth)}>Sign Out</Button>
          </Stack>
        </Box>
        <Box display={{ lg: "none", md: "none", sm: "block", xs: "block" }}>
          <IconButton
            size="large"
            aria-label="open website menubar"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MenuOpen
              sx={{
                color: "#000000",
                fontSize: "40px",
              }}
            />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <div id="menuBar">
              <Stack
                direction="column"
                justifyContent="center"
                gap={2}
                pl={1}
                color="#000"
              >
                <NavLink
                  to=""
                  onClick={() => {
                    handleClose();
                  }}
                  className="nav-link"
                >
                  Home
                </NavLink>
                <NavLink
                  to=""
                  onClick={() => {
                    handleClose();
                  }}
                  className="nav-link"
                >
                  Contact Us
                </NavLink>
                <Link to="/register">
                  <CustomBtn1 variant="contained">Register</CustomBtn1>
                </Link>
                <CustomBtn2 variant="contained" color="secondary">
                  <Link to="/find_blood">Seek Blood</Link>
                </CustomBtn2>
              </Stack>
            </div>
          </Menu>
        </Box>
      </Stack>
    </Container>
  );
};

export default NavBar;
