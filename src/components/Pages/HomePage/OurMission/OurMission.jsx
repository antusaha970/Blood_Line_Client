import { Box, Stack } from "@mui/material";
import { CustomImg, HeaderSubTitle, HeaderTitle } from "../Header/Header";
import missionImg from "../../../../assets/mission.jpg";
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
            At Behind the{" "}
            <font
              color="red"
              style={{ fontWeight: "bold", textTransform: "uppercase" }}
            >
              Bloodline
            </font>
            , our unwavering mission is to establish a robust network that
            seamlessly connects blood donors with those in need, ensuring a
            convenient and comfortable experience. By leveraging our website, we
            aim to curate and maintain an extensive database of active blood
            donors, facilitating swift access to life-saving blood when it
            matters most. Our commitment lies in simplifying the process of
            seeking blood, fostering a community where lives are saved through
            efficient and reliable connections. Together, we strive to make a
            tangible difference in the lives of individuals facing critical
            medical situations.
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
