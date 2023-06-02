import { Container } from "@mui/material";
import {
  CallToAction,
  Footer,
  Header,
  OurMission,
  Preview,
} from "../../../index/index";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <CallToAction />
      <OurMission />
      <Preview />
      <Footer />
    </Container>
  );
};

export default Home;
