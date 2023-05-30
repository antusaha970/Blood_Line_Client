import styled from "@emotion/styled";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Stack,
} from "@mui/material";
import "./FindBloodLanding.css";
import { useForm, Controller } from "react-hook-form";
import client from "../../../../API/API";
import { useState } from "react";
import { BloodCard, Footer, Loader3 } from "../../../index/index";
import { CustomBtn1, CustomBtn2 } from "../../../shared/NavBar/NavBar";
import "react-toastify/dist/ReactToastify.css";
import "./FindBloodLanding.css";
import { toast } from "react-toastify";

const FindBloodContainer = styled(Box)`
  background-color: hsla(0, 100%, 50%, 1);
  background-image: radial-gradient(
      at 44% 39%,
      hsla(28, 100%, 74%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 79% 4%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
    radial-gradient(at 13% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),
    radial-gradient(at 61% 79%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%);
  background-size: cover;
`;

const FindBloodTitle = styled(Typography)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  padding: 20px 0;
`;
const FindBloodSubTitle = styled(Typography)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  text-align: start;
  color: #ffffff;
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
  const [page, setPage] = useState(1);
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const onSubmit = async (userData) => {
    setInitialLoading(false);
    try {
      if (!loading) {
        setLoading(true);
        console.log(page);
        const { data } = await client.get(
          `/bloodSearch?group=${userData.bloodGroup}&page=${page}&limit=10`
        );
        setDonors([...data.data]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast(`${error.message}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const handleNextPageLoad = () => {
    if (!loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  const handlePreviousPageLoad = () => {
    if (!loading) {
      if (page >= 2) {
        setPage((prevPage) => prevPage - 1);
      } else {
        toast(`You are at First page`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };
  return (
    <FindBloodContainer
      sx={{
        minHeight: "90vh",
        mb: 2,
      }}
    >
      <Container maxWidth="lg">
        <Box>
          <FindBloodTitle variant="h1">Find Blood in minutes</FindBloodTitle>
        </Box>
        <Box>
          <FindBloodSubTitle variant="h5">
            Seeking Life-Saving Blood: Discover Blood Matches Based on{" "}
            <font color="black">Blood Group</font> and{" "}
            <font color="black">Location Filter</font>. Kindly approach
            potential donors with respect, understanding their decision if they
            are unable to donate. Together, let&apos;s foster a culture of
            gratitude and appreciation for all donors in our mission to save
            lives.
          </FindBloodSubTitle>
        </Box>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="bloodGroup"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Stack
                direction={{ md: "row", sm: "column" }}
                alignItems="center"
                gap={1}
                justifyContent="space-between"
                sx={{
                  mb: { xs: "15px" },
                }}
              >
                <Box
                  flex={3}
                  sx={{
                    width: { xs: "100%" },
                  }}
                >
                  <FormControl fullWidth margin="normal">
                    <InputLabel id="bloodGroupLabel">Blood Group</InputLabel>
                    <Select
                      {...field}
                      labelId="bloodGroupLabel"
                      id="bloodGroupInp"
                      label="Blood Group"
                      onClick={() => setPage(1)}
                    >
                      <MenuItem value="O%2b">O+</MenuItem>
                      <MenuItem value="O-">O-</MenuItem>
                      <MenuItem value="A%2b">A+</MenuItem>
                      <MenuItem value="A-">A-</MenuItem>
                      <MenuItem value="B%2b">B+</MenuItem>
                      <MenuItem value="B-">B-</MenuItem>
                      <MenuItem value="AB%2b">AB+</MenuItem>
                      <MenuItem value="AB-">AB-</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
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
                <Box flex={1} alignItems="end">
                  <button id="btnSearch" type="submit">
                    Search
                  </button>
                </Box>
              </Stack>
            )}
          />
          <Stack direction="row" justifyContent="center" gap={2}>
            <CustomBtn1
              variant="contained"
              color="secondary"
              onClick={handlePreviousPageLoad}
              type="submit"
            >
              Previous Page
            </CustomBtn1>
            <CustomBtn2
              variant="contained"
              color="success"
              onClick={handleNextPageLoad}
              type="submit"
            >
              Next Page
            </CustomBtn2>
          </Stack>
        </Box>
        <Stack
          direction={{ md: "row", sm: "column" }}
          sx={{
            flexWrap: "wrap",
            justifyContent: "space-between",
            pt: 4,
            gap: 3,
            pb: 3,
          }}
        >
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                mt: 2,
              }}
            >
              <Loader3 />
            </Box>
          ) : (
            donors?.map((donor) => <BloodCard donor={donor} key={donor._id} />)
          )}
          {donors.length === 0 && !initialLoading && (
            <Typography
              variant="p"
              component="p"
              sx={{
                color: "red",
                textAlign: "center",
                mt: 2,
                mb: 2,
                fontSize: "18px",
              }}
            >
              {loading
                ? "Please with donors are being loaded"
                : "No moro donors"}
            </Typography>
          )}
        </Stack>
        <Footer />
      </Container>
    </FindBloodContainer>
  );
};

export default FindBloodLanding;
