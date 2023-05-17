import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import "./FindBloodLanding.css";

const FindBloodTitle = styled(Typography)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
  padding: 20px 0;
`;
const FindBloodSubTitle = styled(Typography)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  color: #000000;
  padding-bottom: 10px;
`;

const FindBloodLanding = () => {
  return (
    <Box
      sx={{
        minHeight: "90vh",
      }}
    >
      <Container maxWidth="lg">
        <Box>
          <FindBloodTitle variant="h1">Find Blood in minutes</FindBloodTitle>
        </Box>
        <Box>
          <FindBloodSubTitle variant="h5">
            Seeking Life-Saving Blood: Discover Blood Matches Based on{" "}
            <font color="red">Blood Group</font> and{" "}
            <font color="red">Location Filter</font>. Kindly approach potential
            donors with respect, understanding their decision if they are unable
            to donate. Together, let&apos;s foster a culture of gratitude and
            appreciation for all donors in our mission to save lives.
          </FindBloodSubTitle>
        </Box>
        <Box></Box>
      </Container>
    </Box>
  );
};

export default FindBloodLanding;
