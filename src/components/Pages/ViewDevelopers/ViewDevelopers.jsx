import { Facebook, LinkedIn } from "@mui/icons-material";
import { Box, Container, Stack, Typography } from "@mui/material";

const ViewDevelopers = () => {
  const antu =
    "https://scontent.fdac13-1.fna.fbcdn.net/v/t39.30808-6/322676068_1285057859000675_4923754781393910777_n.jpg?_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_aid=0&_nc_eui2=AeFyPSn3n6TnCjjYQf40wsRP2hmUB573bVnaGZQHnvdtWfqWePaVJmeqFpUKIDh8FvFAIxy7WI-MOmx20ppqXPLw&_nc_ohc=hf42w16hTCcAX9C5mpi&_nc_ht=scontent.fdac13-1.fna&oh=00_AfDNmSjsETCJjwF1WURWWyHA40jP1hWWu4l9r3BpmgC-PQ&oe=64714B8D";
  const mehmud =
    "https://scontent.fdac13-1.fna.fbcdn.net/v/t39.30808-6/342048568_910281050231015_8004915808030112356_n.jpg?_nc_cat=107&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGmv8Lps1QiRi2dRwCZ92IMIdiYxDvP7K8h2JjEO8_srwsiFRBhZ8jiCuHJpYPHAveHmipTRqe9T7N6Mtj5-nIx&_nc_ohc=OMaP9QEuK3EAX8GoGFo&_nc_ht=scontent.fdac13-1.fna&oh=00_AfB63jQZz31gYkkGAxwP_0Oy5JzHjo-HGG7g-kTrE3TnRA&oe=6470D895";
  const rihan =
    "https://scontent.fdac13-1.fna.fbcdn.net/v/t39.30808-6/333302917_929123838455415_5108346008552221234_n.jpg?_nc_cat=101&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHzfyXkHyjXeZGnXzei01kCDaLaKvuhxTANotoq-6HFMOr3oe9Xw65SrtcMHExfcJN7_QyAD6P0yJjEQc_r43vf&_nc_ohc=QjQb47dER2AAX8xBGQw&_nc_ht=scontent.fdac13-1.fna&oh=00_AfBCXDLT7mPDgqu5frDuDWl_z4wG4HXQ2cklDolSBHgMcQ&oe=64706AC5";
  const nazmul = "https://ibb.co/pvcJV8B";
  return (
    <Box
      sx={{
        minWidth: "100%",
        minHeight: "90vh",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            border: "1px solid	black",
            p: 2,
            mb: 2,
          }}
        >
          <Stack direction="row">
            <Box>
              <img
                src={rihan}
                alt="Profile"
                style={{ height: "96px", width: "96px", paddingRight: "10px" }}
              />
            </Box>
            <Box>
              <Typography variant="h5" component="p">
                Abdur Raihan
              </Typography>
              <Typography variant="p" component="p">
                Raihan has worked on Backend for this project
              </Typography>
              <a
                href="https://www.linkedin.com/in/abdur-raihan-a3449b205/"
                target=" "
              >
                <LinkedIn />
              </a>
              <a href="https://web.facebook.com/abdur.raihan.52090/" target=" ">
                <Facebook />
              </a>
            </Box>
          </Stack>
        </Box>
        <Box
          sx={{
            border: "1px solid	black",
            p: 2,
            mb: 2,
          }}
        >
          <Stack direction="row">
            <Box>
              <img
                src={antu}
                alt="Antu Saha Profile"
                style={{ height: "96px", width: "96px", paddingRight: "10px" }}
              />
            </Box>
            <Box>
              <Typography variant="h5" component="p">
                Antu Saha
              </Typography>
              <Typography variant="p" component="p">
                Antu has worked on frontend for this project
              </Typography>
              <a href="https://www.linkedin.com/in/antusaha970/" target=" ">
                <LinkedIn />
              </a>
              <a href="https://www.facebook.com/antusaha970" target=" ">
                <Facebook />
              </a>
            </Box>
          </Stack>
        </Box>
        <Box
          sx={{
            border: "1px solid	black",
            p: 2,
            mb: 2,
          }}
        >
          <Stack direction="row">
            <Box>
              <img
                src={mehmud}
                alt="Antu Saha Profile"
                style={{ height: "96px", width: "96px", paddingRight: "10px" }}
              />
            </Box>
            <Box>
              <Typography variant="h5" component="p">
                Mehmud
              </Typography>
              <Typography variant="p" component="p">
                Mehmud is advisor for this project
              </Typography>
              <a
                href="https://www.linkedin.com/in/abdullah-al-mehmud-393837255/"
                target=" "
              >
                <LinkedIn />
              </a>
              <a
                href="https://www.facebook.com/abdullahalmehmud.mehmud/"
                target=" "
              >
                <Facebook />
              </a>
            </Box>
          </Stack>
        </Box>
        <Box
          sx={{
            border: "1px solid	black",
            p: 2,
            mb: 2,
          }}
        >
          <Stack direction="row">
            <Box>
              <img
                src={nazmul}
                alt="Profile"
                style={{ height: "96px", width: "96px", paddingRight: "10px" }}
              />
            </Box>
            <Box>
              <Typography variant="h5" component="p">
                MD. NAZMUL ISLAM
              </Typography>
              <Typography variant="p" component="p">
                Nazmul is the reviewer for this project
              </Typography>
              <a
                href="https://www.linkedin.com/in/md-nazmul-islam-b123a522a/"
                target=" "
              >
                <LinkedIn />
              </a>
              <a href="#" target=" ">
                <Facebook />
              </a>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default ViewDevelopers;
