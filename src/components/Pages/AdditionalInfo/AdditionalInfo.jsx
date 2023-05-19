import {
  Box,
  Container,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormControl,
  Button,
} from "@mui/material";
import { RegisterBox, RegisterTitle } from "../RegisterPage/Register/Register";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addAdditionalInfo } from "../../../redux/slices/userSlice/userSlice";
import { useNavigate } from "react-router";
import client from "../../../API/API";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AdditionalInfo = () => {
  const user = useSelector((state) => state.user.user);
  const isReady = useSelector((state) => state.user.isReady);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checkUser, setCheckUser] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      number: "",
      location: "",
      bloodGroup: "",
    },
  });
  const onSubmit = async (userData) => {
    dispatch(addAdditionalInfo({ ...userData, alreadyRegistered: false }));
  };
  useEffect(() => {
    async function postToServer() {
      try {
        const { data } = await client.post("/donner/create", user);
        if (data.status === "success") {
          navigate("/");
        }
      } catch (error) {
        alert(error.message);
        console.log(error);
      }
    }
    if (isReady) {
      postToServer();
    }
    async function checkIfUserExist() {
      try {
        setCheckUser(true);
        const { data } = await client.get(`donner/singleDonor/${user.email}`);
        if (data.status === "successful") {
          const { location, bloodGroup, number, name } = data.data;
          dispatch(
            addAdditionalInfo({
              location,
              bloodGroup,
              number,
              name,
              alreadyRegistered: true,
            })
          );
          navigate("/");
        } else {
          setCheckUser(false);
        }
      } catch (error) {
        setCheckUser(false);
        console.log(error);
      }
    }
    checkIfUserExist();
  }, [isReady]);

  useEffect(() => {
    toast(`Welcome ${user.name}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    toast(
      `If you already registered than please wait your data is being loaded else please submit the form with correct information`,
      {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  }, []);
  console.log(checkUser);
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
        <RegisterBox
          sx={{
            height: "auto",
            py: "15px",
          }}
        >
          <RegisterTitle>Fill up additional info</RegisterTitle>
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
            <TextField
              value={user.email}
              id="Your Email"
              label="Your Email"
              variant="outlined"
              margin="normal"
              sx={{
                width: "320px",
              }}
            />
            <Controller
              name="number"
              rules={{ required: true, minLength: 11, maxLength: 11 }}
              control={control}
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
            <Button
              type={checkUser ? "button" : "submit"}
              color="secondary"
              variant="contained"
            >
              Submit
            </Button>
          </Box>
        </RegisterBox>
      </Container>
    </Box>
  );
};

export default AdditionalInfo;
