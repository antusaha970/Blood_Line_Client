import { Box, Stack, Typography } from "@mui/material";
import { HeaderTitle } from "../Header/Header";
import styled from "@emotion/styled";
import { CustomBtn1, CustomBtn2 } from "../../../shared/NavBar/NavBar";
import { Link } from "react-router-dom";

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
            Register Your Self as a donor
          </CustomTitle>
          <Description variant="p" component="p">
            Welcome! Take a moment to register yourself as a blood donor. Your
            simple act of compassion can save lives. Join our community and make
            a difference with just a click of a button.
            <Link to="/register">
              <CustomBtn1
                variant="contained"
                sx={{
                  display: "block",
                }}
              >
                Register yourself
              </CustomBtn1>
            </Link>
          </Description>
        </Box1>
        <Box2 flex={1}>
          <CustomTitle variant="h5" component="p">
            Find Blood from registered donors
          </CustomTitle>
          <Description component="p">
            Discover a network of registered blood donors ready to help in times
            of need. Connect with potential donors effortlessly and ensure
            timely access to life-saving blood. Find your match now.
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
