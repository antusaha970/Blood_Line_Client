import styled from "@emotion/styled";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Button,
} from "@mui/material";
import "./FindBloodLanding.css";
import { useForm, Controller } from "react-hook-form";
import { Search } from "@mui/icons-material";

const FindBloodTitle = styled(Typography)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
  padding: 20px 0;
`;
const FindBloodSubTitle = styled(Typography)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  color: #000000;
  padding-bottom: 10px;
`;

const FindBloodLanding = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      bloodGroup: "",
    },
  });
  const onSubmit = (userData) => {
    console.log(userData);
  };
  return (
    <Box
      sx={{
        minHeight: "90vh",
      }}
    >
      <Container maxWidth="lg">
        <Box>
          <FindBloodTitle variant="h1">Find Blood in minutes</FindBloodTitle>
        </Box>
        <Box>
          <FindBloodSubTitle variant="h5">
            Seeking Life-Saving Blood: Discover Blood Matches Based on{" "}
            <font color="red">Blood Group</font> and{" "}
            <font color="red">Location Filter</font>. Kindly approach potential
            donors with respect, understanding their decision if they are unable
            to donate. Together, let&apos;s foster a culture of gratitude and
            appreciation for all donors in our mission to save lives.
          </FindBloodSubTitle>
        </Box>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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
              Please select a blood group
            </Typography>
          )}
          <Button type="submit" startIcon={<Search />}>
            Search
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FindBloodLanding;
