import { Container } from "@mui/material";
import { CallToAction, Footer, Header, OurMission } from "../../../index/index";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <CallToAction />
      <OurMission />
      <Footer />
    </Container>
  );
};

export default Home;
