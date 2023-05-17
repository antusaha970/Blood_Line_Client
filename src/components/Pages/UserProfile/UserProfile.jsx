import styled from "@emotion/styled";
import { Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

const ProfileBox = styled(Box)`
  width: 500px;
  min-height: 400px;
  -webkit-box-shadow: -0.5px 0 7.5px 0.5px #da5454;
  -moz-box-shadow: -0.5px 0 7.5px 0.5px #da5454;
  box-shadow: -0.5px 0 7.5px 0.5px #da5454;
  border: 1px solid #da5454;
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
`;

const TextItemBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const UserProfile = () => {
  const user = useSelector((state) => state.user.user);
  const [editState, setEditState] = useState(false);
  const handleEdit = () => {
    setEditState(true);
  };
  return (
    <Box
      sx={{
        minHeight: "90vh",
      }}
    >
      <Container maxWidth="lg">
        <ProfileBox>
          <Box>
            <ProfilePicture src={user.photoURL} alt="your profile picture" />
          </Box>
          {editState ? (
            <p>edit</p>
          ) : (
            <>
              <TextItemBox>
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{
                    textAlign: "center",
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
                    textAlign: "center",
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
                    textAlign: "center",
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
                    textAlign: "center",
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
                    textAlign: "center",
                  }}
                >
                  <b>Blood-Group</b>: {user.bloodGroup}
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
  );
};

export default UserProfile;
