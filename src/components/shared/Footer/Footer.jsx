import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const FooterContainer = styled(Box)`
  border-top: 1px solid black;
`;

const Footer = () => {
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
    </FooterContainer>
  );
};

export default Footer;
