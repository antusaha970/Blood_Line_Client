import styled from "@emotion/styled";
import {
  Box,
  Button,
  Container,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormControl,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { Footer } from "../../index";
import client from "../../../API/API";
import { toast } from "react-toastify";
const ProfileBox = styled(Box)`
  width: 500px;
  min-height: 400px;
  background: rgba(255, 255, 255, 0.5);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border: 1px solid #d2e9e9;
  border-radius: 10px;
  margin: auto;
  margin-top: 25px;
  padding: 15px;
  @media (max-width: 765px) {
    width: 90%;
  }
  & p {
    font-family: "Montserrat";
  }
`;

const ProfilePicture = styled("img")`
  display: block;
  margin: auto;
  border-radius: 50%;
  border: 2px solid #f8f6f4;
`;

const TextItemBox = styled(Box)`
  padding: 10px;
`;

const ProfileContainer = styled(Box)`
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M1332.31 141.43L1357.94 141.43L1357.94 167.06L1332.31 167.06z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M1143.02 108.36a8.07 8.07 0 1 0 7.54 14.27z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M1054.18 95.54L1059.59 95.54L1059.59 144.54L1054.18 144.54z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M9.01 157.63 a21.98 21.98 0 1 0 43.96 0 a21.98 21.98 0 1 0 -43.96 0z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M676.01 374.42 a26.61 26.61 0 1 0 53.22 0 a26.61 26.61 0 1 0 -53.22 0z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M774.66 77.31L779.3 77.31L779.3 131.31L774.66 131.31z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M649.46 45.83a25.23 25.23 0 1 0-27.94-42.01z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M86.07 202.07a29.67 29.67 0 1 0 24.38-54.1z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M303.01 401.23L309.93 401.23L309.93 453.94L303.01 453.94z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M1059.28 116.75L1070.03 116.75L1070.03 133.36L1059.28 133.36z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M8.93 419.18L39.15 419.18L39.15 462.58L8.93 462.58z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M492.93 505.07L500.62 505.07L500.62 512.76L492.93 512.76z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M517.98 405.14 a15.6 15.6 0 1 0 31.2 0 a15.6 15.6 0 1 0 -31.2 0z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M405.69 200.66L456.03 200.66L456.03 251L405.69 251z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M1418.61 459.48 a6.4 6.4 0 1 0 12.8 0 a6.4 6.4 0 1 0 -12.8 0z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M737.54 266.63L749.71 266.63L749.71 301.75L737.54 301.75z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M1100.07 438.51L1153.97 438.51L1153.97 450.34L1100.07 450.34z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M943.76 405.71 a45.25 45.25 0 1 0 90.5 0 a45.25 45.25 0 1 0 -90.5 0z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M175.44 339.73a38.4 38.4 0 1 0-26.7 72.01z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M849.48 551.25L896.52 551.25L896.52 588.36L849.48 588.36z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M238.05 553.65L291.78 553.65L291.78 557.7L238.05 557.7z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M490.41 503.78a9.01 9.01 0 1 0-14.76-10.34z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M1048.6 434.7a33.66 33.66 0 1 0-31.54 59.47z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M1066.58 181.03L1089.09 181.03L1089.09 229.8L1066.58 229.8z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M263.82 63.67a6.57 6.57 0 1 0 13-1.9z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M843.61 185.78 a5.51 5.51 0 1 0 11.02 0 a5.51 5.51 0 1 0 -11.02 0z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M72.39 241.43a7.91 7.91 0 1 0 8.42-13.4z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M789.69 137.93 a16.61 16.61 0 1 0 33.22 0 a16.61 16.61 0 1 0 -33.22 0z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M404.84 241.09a34.54 34.54 0 1 0-67.14 16.25z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M1059.85 524.2L1097.75 524.2L1097.75 567.36L1059.85 567.36z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M546.85 201.51a47.03 47.03 0 1 0 24.07-90.93z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M158.87 466.82 a55.62 55.62 0 1 0 111.24 0 a55.62 55.62 0 1 0 -111.24 0z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M795.22 109.34a6.2 6.2 0 1 0 8.85-8.68z' fill='%23e73635'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  display: flex;
  align-items: center;
`;

const UserProfile = () => {
  const user = useSelector((state) => state.user.user);
  const [editState, setEditState] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleEdit = () => {
    setEditState(true);
  };
  const onSubmit = async (userData) => {
    try {
      const { data } = await client.put(
        `/donner/update/${user.email}`,
        userData
      );
      if (data.status === "successful") {
        setEditState(false);
        toast(
          `Your Information updated \n 
          Please login again to see updated information`,
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
      }
    } catch (error) {
      console.log(error);
      toast(`Failed to update \n ${error.message}`, {
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
      <ProfileContainer
        sx={{
          minHeight: "90vh",
        }}
      >
        <Container maxWidth="lg">
          <ProfileBox>
            <Box>
              <ProfilePicture src={user.imageURL} alt="your profile picture" />
            </Box>
            {editState ? (
              <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Controller
                  name="name"
                  control={control}
                  defaultValue={user.name}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="nameInp"
                      label="Your Name"
                      variant="outlined"
                      margin="normal"
                      sx={{
                        width: "320px",
                      }}
                    />
                  )}
                />
                <Controller
                  name="number"
                  rules={{ required: true, minLength: 11, maxLength: 11 }}
                  control={control}
                  defaultValue={user.number}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="numberInp"
                      label="Your Number"
                      variant="outlined"
                      margin="normal"
                      sx={{
                        width: "320px",
                      }}
                    />
                  )}
                />
                {errors.number && (
                  <Typography
                    component="p"
                    variant="small"
                    sx={{
                      color: "red",
                    }}
                  >
                    Please Enter a valid number
                  </Typography>
                )}
                <Controller
                  name="bloodGroup"
                  control={control}
                  rules={{ required: true }}
                  defaultValue={user.bloodGroup}
                  render={({ field }) => (
                    <FormControl fullWidth margin="normal">
                      <InputLabel id="bloodGroupLabel">Blood Group</InputLabel>
                      <Select
                        {...field}
                        labelId="bloodGroupLabel"
                        id="bloodGroupInp"
                        label="Blood Group"
                      >
                        <MenuItem value="O+">O+</MenuItem>
                        <MenuItem value="O-">O-</MenuItem>
                        <MenuItem value="A+">A+</MenuItem>
                        <MenuItem value="A-">A-</MenuItem>
                        <MenuItem value="B+">B+</MenuItem>
                        <MenuItem value="B-">B-</MenuItem>
                        <MenuItem value="AB+">AB+</MenuItem>
                        <MenuItem value="AB-">AB-</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                />
                {errors.bloodGroup && (
                  <Typography
                    component="p"
                    variant="small"
                    sx={{
                      color: "red",
                    }}
                  >
                    Please select your blood group
                  </Typography>
                )}
                <Controller
                  name="location"
                  control={control}
                  rules={{ required: true }}
                  defaultValue={user.location}
                  render={({ field }) => (
                    <FormControl fullWidth margin="normal">
                      <InputLabel id="locationLabel">Your Location</InputLabel>
                      <Select
                        {...field}
                        labelId="locationLabel"
                        id="locationInp"
                        label="Your Location"
                      >
                        <MenuItem value="Feni">Feni</MenuItem>
                        <MenuItem value="Dhaka">Dhaka</MenuItem>
                        <MenuItem value="Chottogram">Chottogram</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                />
                {errors.location && (
                  <Typography
                    component="p"
                    variant="small"
                    sx={{
                      color: "red",
                    }}
                  >
                    Please select your location
                  </Typography>
                )}
                <Button type="submit" color="secondary" variant="contained">
                  Save
                </Button>
              </Box>
            ) : (
              <>
                <TextItemBox>
                  <Typography
                    variant="h5"
                    component="h5"
                    sx={{
                      textAlign: "left",
                    }}
                  >
                    <b>Name</b>: {user.name}
                  </Typography>
                </TextItemBox>
                <TextItemBox>
                  <Typography
                    variant="h5"
                    component="p"
                    sx={{
                      textAlign: "left",
                    }}
                  >
                    <b>Email</b>: {user.email}
                  </Typography>
                </TextItemBox>
                <TextItemBox>
                  <Typography
                    variant="h5"
                    component="p"
                    sx={{
                      textAlign: "left",
                    }}
                  >
                    <b>Number</b>: {user.number}
                  </Typography>
                </TextItemBox>
                <TextItemBox>
                  <Typography
                    variant="h5"
                    component="p"
                    sx={{
                      textAlign: "left",
                    }}
                  >
                    <b>Location</b>: {user.location}
                  </Typography>
                </TextItemBox>
                <TextItemBox>
                  <Typography
                    variant="h5"
                    component="p"
                    sx={{
                      textAlign: "left",
                    }}
                  >
                    <b>Blood-Group</b>:{" "}
                    <font color="red">{user.bloodGroup}</font>
                  </Typography>
                </TextItemBox>
                <Button
                  variant="contained"
                  sx={{
                    margin: "auto",
                    display: "block",
                  }}
                  onClick={handleEdit}
                >
                  Edit Your Information
                </Button>
              </>
            )}
          </ProfileBox>
        </Container>
      </ProfileContainer>
      <Footer />
    </>
  );
};

export default UserProfile;
