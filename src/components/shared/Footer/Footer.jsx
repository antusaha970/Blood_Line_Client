import styled from "@emotion/styled";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { changeLanguages } from "../../../redux/slices/userSlice/userSlice";
import { Link } from "react-router-dom";

const FooterContainer = styled(Box)`
  border-top: 1px solid black;
`;

const Footer = () => {
  const dispatch = useDispatch();
  const handleChangeLanguage = () => {
    dispatch(changeLanguages());
  };
  return (
    <FooterContainer component="footer">
      <Typography
        sx={{
          textAlign: "center",
          py: 2,
        }}
        variant="small"
        component="p"
      >
        All rights reserved by Blood-Line
      </Typography>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Box>
          <Button onClick={handleChangeLanguage}>Change Language</Button>
        </Box>
        <Box>
          <Link to="/view_developers">
            <Button>View Developers</Button>
          </Link>
        </Box>
      </Stack>
    </FooterContainer>
  );
};

export default Footer;
