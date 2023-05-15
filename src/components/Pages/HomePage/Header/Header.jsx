import { Box, Stack, Typography } from "@mui/material";
import headerImg from "../../../../assets/header.jpg";
import styled from "@emotion/styled";
import { CustomBtn1 } from "../../../shared/NavBar/NavBar";

export const CustomImg = styled("img")`
  width: 100%;
  height: 400px;
`;

export const HeaderTitle = styled(Typography)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
`;

export const HeaderSubTitle = styled(Typography)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  text-align: justify;
  padding: 10px;
  color: #000000;
`;

const Header = () => {
  return (
    <Stack
      direction={{ sm: "column", md: "row" }}
      component="header"
      sx={{
        marginTop: { sm: "0", md: "35px" },
        marginBottom: "30px",
      }}
    >
      <Box flex={1}>
        <CustomImg src={headerImg} alt="Header image" />
      </Box>
      <Box flex={1}>
        <HeaderTitle component="h1" variant="h1">
          Donate <font color="red">Blood</font> Save Life
        </HeaderTitle>
        <HeaderSubTitle component="p" variant="p">
          Welcome to our life-saving platform, where you have the power to make
          a profound impact. Join us in the noble cause of donating blood and
          become a hero in someone&apos;s story. By registering as a blood donor
          today, you can offer the gift of life to those in desperate need. Your
          selfless act has the potential to change the course of someone&apos;s
          life, providing them with a second chance, renewed hope, and precious
          time with their loved ones. Take action now and be a part of our
          compassionate community dedicated to saving lives. Together,
          let&apos;s make a difference and embrace the extraordinary power we
          hold within us. Donate blood, because your generosity can truly save a
          life.
          <CustomBtn1
            variant="contained"
            sx={{
              display: "block",
            }}
          >
            Register yourself
          </CustomBtn1>
        </HeaderSubTitle>
      </Box>
    </Stack>
  );
};

export default Header;
