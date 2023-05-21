import { Box, Stack, Typography } from "@mui/material";
import { HeaderTitle } from "../Header/Header";
import styled from "@emotion/styled";
import { CustomBtn1, CustomBtn2 } from "../../../shared/NavBar/NavBar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CustomTitle = styled(Typography)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: left;
  padding-left: 15px;
  color: #000000;
`;

const Description = styled(Typography)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: left;
  color: #000000;
  padding: 15px;
`;

const Box1 = styled(Box)`
  border-left: 5px solid red;
  border-radius: 3px;
`;

const Box2 = styled(Box)`
  border-left: 5px solid black;
  border-radius: 3px;
`;

const CallToAction = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const language = useSelector((state) => state.user.languagePreference);
  return (
    <Box
      component="section"
      sx={{
        mb: "30px",
      }}
    >
      <HeaderTitle variant="h1" component="h2">
        What are you Looking for?
      </HeaderTitle>

      <Stack
        direction={{ sm: "column", md: "row" }}
        sx={{
          mt: 2,
        }}
        gap={2}
      >
        <Box1 flex={1}>
          <CustomTitle variant="h5" component="p">
            {isLoggedIn
              ? `View profile to change your info`
              : `Register Your Self as a donor`}
          </CustomTitle>
          <Description variant="p" component="p">
            {isLoggedIn
              ? language === "english"
                ? `Thank you for registering as a blood donor! Your selfless act of compassion and generosity has the power to save lives and bring hope to those in need. By joining our community, you have taken a crucial step towards making a positive impact and making a difference in the lives of others.`
                : `
              রক্তদাতা হিসাবে নিবন্ধন করার জন্য আপনাকে ধন্যবাদ! আপনার নিঃস্বার্থ সহানুভূতি এবং উদারতার শক্তি আছে জীবন বাঁচানোর এবং আরেকজন জন্য আশা আনতে। আমাদের সম্প্রদায়ে যোগদানের মাধ্যমে, আপনি একটি ইতিবাচক প্রভাব ফেলতে এবং অন্যদের জীবনে একটি পরিবর্তন করার জন্য একটি গুরুত্বপূর্ণ পদক্ষেপ নিয়েছেন।
              `
              : language === "english"
              ? `Welcome! Take a moment to register yourself as a blood donor. Your
            simple act of compassion can save lives. Join our community and make
            a difference with just a click of a button.`
              : `
            স্বাগতম! একজন রক্তদাতা হিসাবে নিজেকে নিবন্ধন করতে এক মিনিট সময় নিন। আপনার এই সহজ সমবেদনামূলক কাজটি জীবন বাঁচাতে পারে। আমাদের সম্প্রদায়ের সাথে যোগ দিন এবং কেবল একটি বোতামে ক্লিক করেই পার্থক্য করুন।
            `}
            <br />
            <br />
            <Link to={isLoggedIn ? "/user_profile" : "/register"}>
              <CustomBtn1
                variant="contained"
                sx={{
                  display: "block",
                }}
              >
                {isLoggedIn ? "View Your Profile" : "Register yourself"}
              </CustomBtn1>
            </Link>
          </Description>
        </Box1>
        <Box2 flex={1}>
          <CustomTitle variant="h5" component="p">
            Find Blood from registered donors
          </CustomTitle>
          <Description component="p">
            {language === "english"
              ? `Discover a network of registered blood donors ready to help in times
            of need. Connect with potential donors effortlessly and ensure
            timely access to life-saving blood. Find your match now.`
              : `
            রক্তদানের প্রয়োজনে প্রস্তুত নিবন্ধিত রক্তদাতাদের একটি নেটওয়ার্ক খুঁজুন। সহজেই সম্ভাব্য দাতাদের সাথে যোগাযোগ করুন এবং সময়মতো জীবন রক্ষাকারী রক্ত পান।
            `}
            <br />
            <br />
            <CustomBtn2
              sx={{
                display: "block",
              }}
              variant="contained"
              color="secondary"
            >
              <Link to="/find_blood">Find blood</Link>
            </CustomBtn2>
          </Description>
        </Box2>
      </Stack>
    </Box>
  );
};

export default CallToAction;
