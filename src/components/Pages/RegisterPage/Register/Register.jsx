import styled from "@emotion/styled";
import googleIcon from "../../../../assets/googleIcon.png";
import { Box, Container, Typography } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  provider,
  signInWithRedirect,
} from "../../../../firebase/firebase.config";
import { Loader2 } from "../../../index";

const RegisterBox = styled(Box)`
  width: 570px;
  height: 457px;
  background: #ffffff;
  border: 1px solid #ababab;
  border-radius: 4px;
  margin: auto;
  @media (max-width: 765px) {
    width: 100%;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

const RegisterTitle = styled(Typography)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  text-align: center;
`;

const RegisterButton = styled(Box)`
  width: 457px;
  height: 51px;
  background: #ffffff;
  border: 1px solid #c7c7c7;
  border-radius: 57px;
  position: relative;
  @media (max-width: 765px) {
    width: 300px;
  }
  cursor: pointer;
`;

const RegisterButtonText = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;

const Register = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleRegister = () => {
    signInWithRedirect(auth, provider);
  };
  if (!user) {
    console.log(user);
  }
  if (error) {
    alert(error.message);
  }

  return (
    <Box
      component="section"
      sx={{
        minWidth: "100%",
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#F8FAFC",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          component="h5"
          sx={{
            fontSize: "50px",
            textTransform: "uppercase",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          <font color="black">Blood</font>-<font color="red">Line</font>
        </Typography>
        <RegisterBox>
          <RegisterTitle>
            {loading ? "Please wait ..." : "Register With Google"}
          </RegisterTitle>
          <Box>
            {loading ? (
              <Loader2 />
            ) : (
              <RegisterButton component="button" onClick={handleRegister}>
                <Box
                  sx={{
                    position: "absolute",
                    left: "0",
                  }}
                >
                  <img
                    src={googleIcon}
                    alt="google icon"
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                  />
                </Box>
                <RegisterButtonText component="p">
                  Continue With Google
                </RegisterButtonText>
              </RegisterButton>
            )}
          </Box>
        </RegisterBox>
      </Container>
    </Box>
  );
};

export default Register;
