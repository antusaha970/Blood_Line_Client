import { Box, Stack } from "@mui/material";
import { CustomImg, HeaderSubTitle, HeaderTitle } from "../Header/Header";
import missionImg from "../../../../assets/mission.jpg";
import { useSelector } from "react-redux";
const OurMission = () => {
  const language = useSelector((state) => state.user.languagePreference);
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
            {language === "english"
              ? `At Behind the
              Bloodline
            , our unwavering mission is to establish a robust network that
            seamlessly connects blood donors with those in need, ensuring a
            convenient and comfortable experience. By leveraging our website, we
            aim to curate and maintain an extensive database of active blood
            donors, facilitating swift access to life-saving blood when it
            matters most. Our commitment lies in simplifying the process of
            seeking blood, fostering a community where lives are saved through
            efficient and reliable connections. Together, we strive to make a
            tangible difference in the lives of individuals facing critical
            medical situations.`
              : `
            আমাদের লক্ষ্য হল রক্তদাতাদের এবং প্রয়োজনীয় ব্যক্তিদেরকে সহজেই সংযুক্ত করে একটি শক্তিশালী নেটওয়ার্ক তৈরি করা। আমরা আমাদের ওয়েবসাইট ব্যবহার করে সক্রিয় রক্তদাতাদের একটি বিস্তৃত ডাটাবেস তৈরি এবং পরিচালনা করব, যাতে যেকোনো সময় প্রয়োজনীয় রক্ত পাওয়া যায়। আমরা রক্ত সন্ধানের প্রক্রিয়াটিকে সহজতর করতে এবং একটি সম্প্রদায় গড়ে তুলতে চাই যেখানে জীবনগুলি দক্ষ এবং নির্ভরযোগ্য সংযোগের মাধ্যমে রক্ষা করা হয়। আমরা একসাথে, গুরুতর চিকিৎসা পরিস্থিতিতে থাকা ব্যক্তিদের জীবনে পার্থক্য করার জন্য কাজ করি।
            `}
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
