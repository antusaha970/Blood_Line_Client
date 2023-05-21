import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Footer } from "../../index";
import styled from "@emotion/styled";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { sendUserContactMsg } from "../../../redux/slices/userSlice/userSlice";
const ContactTitle = styled(Typography)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
`;
const ContactSubTitle = styled(Typography)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 30px;
`;

const Contact = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      message: "",
    },
  });
  const user = useSelector((state) => state.user.user);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const onSubmit = async (userData) => {
    const messageData = {
      ...userData,
      from: user.email,
      to: "antu.digi.88@gmail.com",
    };

    try {
      const result = await dispatch(sendUserContactMsg(messageData)).unwrap();
      if (result.status === "success") {
        toast(
          `Thank you ${user.name.toUpperCase()} we will get back to you soon`,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
        reset();
      }
    } catch (error) {
      console.error(error);
      toast(`${error.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <>
      <Box
        sx={{
          minHeight: "90vh",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              mt: 2,
              mb: 1,
            }}
          >
            <ContactTitle variant="p" component="p">
              Contact us
            </ContactTitle>
          </Box>
          <Box>
            <ContactSubTitle variant="p" component="p">
              We would love to hear from you! If you have any questions,
              suggestions, or would like to get involved, please reach out to us
              by leaving a message. Our team is dedicated to providing you with
              the assistance you need.
            </ContactSubTitle>
          </Box>

          {isLoggedIn ? (
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            >
              <TextField
                value={user.email}
                aria-readonly
                id="Your Email"
                label="Your Email"
                variant="outlined"
                margin="normal"
                sx={{
                  width: "320px",
                }}
              />
              <Controller
                name="message"
                rules={{ required: true }}
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="numberInp"
                    label="Type your message here"
                    variant="outlined"
                    multiline={true}
                    rows={5}
                    margin="normal"
                    sx={{
                      width: "320px",
                    }}
                  />
                )}
              />
              {errors.message && (
                <Typography
                  component="p"
                  variant="small"
                  sx={{
                    color: "red",
                    mb: 2,
                  }}
                >
                  Please enter your message
                </Typography>
              )}
              <Button type="submit" variant="contained" color="success">
                Submit
              </Button>
            </Box>
          ) : (
            <Box>
              <Typography
                variant="h3"
                component="p"
                sx={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Montserrat",
                  mt: 5,
                  pt: 5,
                }}
              >
                Please <Link to="/register">Login</Link> to send us message
              </Typography>
            </Box>
          )}
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Contact;
