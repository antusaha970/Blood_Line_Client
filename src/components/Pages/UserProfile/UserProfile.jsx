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
  -webkit-box-shadow: -0.5px 0 7.5px 0.5px #d2e9e9;
  -moz-box-shadow: -0.5px 0 7.5px 0.5px #d2e9e9;
  box-shadow: -0.5px 0 7.5px 0.5px #d2e9e9;
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
      <Box
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
      </Box>
      <Footer />
    </>
  );
};

export default UserProfile;
