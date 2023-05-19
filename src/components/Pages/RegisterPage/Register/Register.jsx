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
import { useDispatch } from "react-redux";
import { addUserInfo } from "../../../../redux/slices/userSlice/userSlice";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export const RegisterBox = styled(Box)`
  width: 570px;
  min-height: 457px;
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

export const RegisterTitle = styled(Typography)`
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const handleRegister = () => {
    signInWithRedirect(auth, provider);
  };
  useEffect(() => {
    if (user !== null && loading !== true) {
      const { displayName: name, email, photoURL: imageURL } = user;
      dispatch(addUserInfo({ name, email, imageURL }));
      navigate("/addition_info");
    }
  }, [user, loading]);
  useEffect(() => {
    if (!navigator.cookieEnabled) {
      alert(`For the authentication you need to enable the cookie of your browser
      Please enable the cookie from browser setting and try again
      `);
    }
  }, []);

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
