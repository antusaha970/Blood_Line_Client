import { Box, Stack, Typography } from "@mui/material";
import headerImg from "../../../../assets/header.jpg";
import styled from "@emotion/styled";
import { CustomBtn1 } from "../../../shared/NavBar/NavBar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const language = useSelector((state) => state.user.languagePreference);
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
      <Box flex={1} component="main">
        <HeaderTitle component="h1" variant="h1">
          Donate <font color="red">Blood</font> Save Life
        </HeaderTitle>
        <HeaderSubTitle component="p" variant="p">
          {language === "english" &&
            `Welcome to our life-saving platform, where you have the power to make
          a profound impact. Join us in the noble cause of donating blood and
          become a hero in someone&apos;s story. By registering as a blood donor
          today, you can offer the gift of life to those in desperate need. Your
          selfless act has the potential to change the course of someone&apos;s
          life, providing them with a second chance, renewed hope, and precious
          time with their loved ones. Take action now and be a part of our
          compassionate community dedicated to saving lives. Together,
          let&apos;s make a difference and embrace the extraordinary power we
          hold within us. Donate blood, because your generosity can truly save a
          life.`}
          {language === "bangla" &&
            `আমাদের জীবন রক্ষাকারী প্ল্যাটফর্মে স্বাগতম, যেখানে আপনার গভীর প্রভাব তৈরি করার ক্ষমতা রয়েছে। রক্তদান এবং কারো গল্পে নায়ক হওয়ার মহৎ কাজে আমাদের সাথে যোগ দিন। আজই একজন রক্তদাতা হিসেবে নিবন্ধন করার মাধ্যমে, আপনি তাদের জীবন উপহার দিতে পারেন যার নিদারুণ প্রয়োজন। আপনার নিঃস্বার্থ কাজটি কারও জীবনের গতিপথ পরিবর্তন করার ক্ষমতা রাখে, তাদের দ্বিতীয় সুযোগ, নতুন করে আশা এবং তাদের প্রিয়জনের সাথে মূল্যবান সময় প্রদান করে। এখনই পদক্ষেপ নিন এবং জীবন বাঁচাতে নিবেদিত আমাদের সহানুভূতিশীল সম্প্রদায়ের অংশ হন। একসাথে, আসুন একটি পার্থক্য তৈরি করি এবং আমাদের মধ্যে থাকা অসাধারণ শক্তিকে আলিঙ্গন করি। রক্ত দান করুন, কারণ আপনার উদারতা সত্যিই একটি জীবন বাঁচাতে পারে।`}
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
        </HeaderSubTitle>
      </Box>
    </Stack>
  );
};

export default Header;
