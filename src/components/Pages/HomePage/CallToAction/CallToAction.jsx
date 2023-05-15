import { Box, Stack, Typography } from "@mui/material";
import { HeaderTitle } from "../Header/Header";
import styled from "@emotion/styled";
import { CustomBtn1, CustomBtn2 } from "../../../shared/NavBar/NavBar";

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            consequuntur nemo minus earum eos ad dolores ipsa modi, molestiae
            officia reiciendis possimus, hic quasi facilis voluptatibus enim.
            Officiis a unde, atque dolor quidem cumque. Accusamus consequuntur
            unde pariatur maiores impedit earum aliquam neque, ea delectus cum,
            itaque dolore harum dicta?
            <CustomBtn1
              sx={{
                display: "block",
              }}
              variant="contained"
            >
              Register
            </CustomBtn1>
          </Description>
        </Box1>
        <Box2 flex={1}>
          <CustomTitle variant="h5" component="p">
            Find Blood from registered donors
          </CustomTitle>
          <Description component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            consequuntur nemo minus earum eos ad dolores ipsa modi, molestiae
            officia reiciendis possimus, hic quasi facilis voluptatibus enim.
            Officiis a unde, atque dolor quidem cumque. Accusamus consequuntur
            unde pariatur maiores impedit earum aliquam neque, ea delectus cum,
            itaque dolore harum dicta?
            <CustomBtn2
              sx={{
                display: "block",
              }}
              variant="contained"
              color="secondary"
            >
              Find blood
            </CustomBtn2>
          </Description>
        </Box2>
      </Stack>
    </Box>
  );
};

export default CallToAction;
