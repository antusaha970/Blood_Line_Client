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

export const RegisterContainer = styled(Box)`
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1539%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3crect width='372' height='372' clip-path='url(%26quot%3b%23SvgjsClipPath1540%26quot%3b)' x='824.15' y='9.82' fill='url(%23SvgjsPattern1541)' transform='rotate(23.94%2c 1010.15%2c 195.82)'%3e%3c/rect%3e%3cpath d='M727.91 144.23a5.6 5.6 0 1 0 0.9 11.17 5.6 5.6 0 1 0-0.9-11.17zM729.2 160.18a5.6 5.6 0 1 0 0.91 11.16 5.6 5.6 0 1 0-0.91-11.16zM730.49 176.13a5.6 5.6 0 1 0 0.91 11.16 5.6 5.6 0 1 0-0.91-11.16zM731.79 192.08a5.6 5.6 0 1 0 0.9 11.16 5.6 5.6 0 1 0-0.9-11.16zM709.38 113.63a5.6 5.6 0 1 0 0.9 11.16 5.6 5.6 0 1 0-0.9-11.16zM710.67 129.58a5.6 5.6 0 1 0 0.91 11.16 5.6 5.6 0 1 0-0.91-11.16zM711.96 145.52a5.6 5.6 0 1 0 0.91 11.17 5.6 5.6 0 1 0-0.91-11.17zM713.25 161.47a5.6 5.6 0 1 0 0.91 11.17 5.6 5.6 0 1 0-0.91-11.17z' stroke='%23037b0b' stroke-width='2.85' stroke-dasharray='4%2c 4'%3e%3c/path%3e%3crect width='360' height='360' clip-path='url(%26quot%3b%23SvgjsClipPath1542%26quot%3b)' x='635' y='91.7' fill='url(%23SvgjsPattern1543)' transform='rotate(314.92%2c 815%2c 271.7)'%3e%3c/rect%3e%3crect width='118.08' height='118.08' clip-path='url(%26quot%3b%23SvgjsClipPath1544%26quot%3b)' x='273.07' y='217.6' fill='url(%23SvgjsPattern1545)' transform='rotate(208.13%2c 332.11%2c 276.64)'%3e%3c/rect%3e%3cpath d='M606.72 376.17 L521.72 419.74L515.6618137530699 349.39681375306986z' stroke='%23d3b714' stroke-width='2.02' stroke-dasharray='3%2c 3'%3e%3c/path%3e%3crect width='336.72' height='336.72' clip-path='url(%26quot%3b%23SvgjsClipPath1546%26quot%3b)' x='643.27' y='-33.14' fill='url(%23SvgjsPattern1547)' transform='rotate(309.09%2c 811.63%2c 135.22)'%3e%3c/rect%3e%3ccircle r='57.37934826052932' cx='330.71' cy='559.83' fill='%23037b0b'%3e%3c/circle%3e%3cpath d='M986.14 566.07L995.46 557.28 1006.07 564.44 1015.39 555.66 1026.01 562.82 1035.32 554.03 1045.94 561.19' stroke='%23037b0b' stroke-width='2.44' stroke-dasharray='3%2c 2'%3e%3c/path%3e%3ccircle r='46.666666666666664' cx='960.1' cy='77.69' stroke='%23d3b714' stroke-width='2.59' stroke-dasharray='4%2c 4'%3e%3c/circle%3e%3crect width='84' height='84' clip-path='url(%26quot%3b%23SvgjsClipPath1548%26quot%3b)' x='303.15' y='42.74' fill='url(%23SvgjsPattern1549)' transform='rotate(157.55%2c 345.15%2c 84.74)'%3e%3c/rect%3e%3crect width='192' height='192' clip-path='url(%26quot%3b%23SvgjsClipPath1550%26quot%3b)' x='739.94' y='303.23' fill='url(%23SvgjsPattern1551)' transform='rotate(292.5%2c 835.94%2c 399.23)'%3e%3c/rect%3e%3cpath d='M972.36 462.65 L905.4 333.03999999999996L857.6773702250445 479.04762977495557z' stroke='%23e73635' stroke-width='1.67' stroke-dasharray='3%2c 3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1539'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1541'%3e%3cpath d='M3 1L3 5M1 3L5 3' stroke='%23e73635' fill='none' stroke-width='1.96'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1540'%3e%3ccircle r='93' cx='1010.15' cy='195.82'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='360' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1543'%3e%3crect width='360' height='3' x='0' y='0' fill='%23037b0b'%3e%3c/rect%3e%3crect width='360' height='3' x='0' y='3' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1542'%3e%3ccircle r='90' cx='815' cy='271.7'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='118.08' height='7.38' patternUnits='userSpaceOnUse' id='SvgjsPattern1545'%3e%3crect width='118.08' height='3.69' x='0' y='0' fill='%23e73635'%3e%3c/rect%3e%3crect width='118.08' height='3.69' x='0' y='3.69' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1544'%3e%3ccircle r='29.52' cx='332.11' cy='276.64'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='336.72' height='7.32' patternUnits='userSpaceOnUse' id='SvgjsPattern1547'%3e%3crect width='336.72' height='3.66' x='0' y='0' fill='%23e73635'%3e%3c/rect%3e%3crect width='336.72' height='3.66' x='0' y='3.66' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1546'%3e%3ccircle r='84.18' cx='811.63' cy='135.22'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1549'%3e%3cpath d='M0 6L3 0L6 6' stroke='%23e73635' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1548'%3e%3ccircle r='21' cx='345.15' cy='84.74'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='192' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1551'%3e%3crect width='192' height='3' x='0' y='0' fill='%23e73635'%3e%3c/rect%3e%3crect width='192' height='3' x='0' y='3' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1550'%3e%3ccircle r='48' cx='835.94' cy='399.23'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
`;

export const RegisterBoxGlass = styled(Box)`
  width: 570px;
  min-height: 457px;
  background: rgba(255, 255, 255, 0.5);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.25);
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
    <RegisterContainer
      component="section"
      sx={{
        minWidth: "100%",
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
          <font color="white">Blood</font>-<font color="red">Line</font>
        </Typography>
        <RegisterBoxGlass>
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
        </RegisterBoxGlass>
      </Container>
    </RegisterContainer>
  );
};

export default Register;
