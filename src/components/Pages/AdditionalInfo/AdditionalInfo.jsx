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
import client from "../../../API/API";

const AdditionalInfo = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
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
  const onSubmit = async (data) => {
    dispatch(addAdditionalInfo(data));
    try {
      const { data } = await client.post("/donor/create", user);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
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
            <Button type="submit" color="secondary" variant="contained">
              Submit
            </Button>
          </Box>
        </RegisterBox>
      </Container>
    </Box>
  );
};

export default AdditionalInfo;
