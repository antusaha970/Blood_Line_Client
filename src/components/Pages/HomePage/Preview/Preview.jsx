import { Box } from "@mui/material";
import { HeaderTitle } from "../Header/Header";

const Preview = () => {
  return (
    <Box component="section">
      <HeaderTitle>Website Preview</HeaderTitle>
      <Box
        sx={{
          m: { sm: 2 },
          mt: 1,
        }}
      >
        <iframe
          width="100%"
          height="515"
          src="https://www.youtube.com/embed/nxpcs_yxIzg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Box>
    </Box>
  );
};

export default Preview;
