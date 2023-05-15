import { Container } from "@mui/material";
import { CallToAction, Header, OurMission } from "../../../index/index";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <CallToAction />
      <OurMission />
    </Container>
  );
};

export default Home;
