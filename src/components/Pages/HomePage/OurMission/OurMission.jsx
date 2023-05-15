import { Box, Stack } from "@mui/material";
import { CustomImg, HeaderSubTitle, HeaderTitle } from "../Header/Header";
import missionImg from "../../../../assets/header.jpg";
const OurMission = () => {
  return (
    <Box
      component="section"
      sx={{
        mb: "30px",
      }}
    >
      <HeaderTitle>Our Mission</HeaderTitle>
      <Stack
        direction={{ sm: "column", md: "row" }}
        component="header"
        sx={{
          mt: 2,
        }}
        alignItems="center"
      >
        <Box flex={1}>
          <HeaderSubTitle component="p" variant="p">
            Welcome to our life-saving platform, where you have the power to
            make a profound impact. Join us in the noble cause of donating blood
            and become a hero in someone&apos;s story. By registering as a blood
            donor today, you can offer the gift of life to those in desperate
            need. Your selfless act has the potential to change the course of
            someone&apos;s life, providing them with a second chance, renewed
            hope, and precious time with their loved ones. Take action now and
            be a part of our compassionate community dedicated to saving lives.
            Together, let&apos;s make a difference and embrace the extraordinary
            power we hold within us. Donate blood, because your generosity can
            truly save a life.
          </HeaderSubTitle>
        </Box>
        <Box flex={1}>
          <CustomImg src={missionImg} alt="Mission image" />
        </Box>
      </Stack>
    </Box>
  );
};

export default OurMission;
