import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import avatar from "../../../../assets/avatar.jpg";
import { toast } from "react-toastify";
const Name = styled(Typography)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  padding-bottom: 10px;
`;

const SubTitle = styled(Typography)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  color: #000000;
  padding-bottom: 8px;
`;

const CardContainer = styled(Box)`
  -webkit-box-shadow: 3px 0.5px 11px 0 #dddddd;
  -moz-box-shadow: 3px 0.5px 11px 0 #dddddd;
  box-shadow: 3px 0.5px 11px 0 #dddddd;
`;

const BloodCard = ({ donor }) => {
  const handleCopyNumber = () => {
    navigator.clipboard.writeText(donor.number);
    toast(`${donor.name.toUpperCase()} number copied to clipboard`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      // Open the phone number in the mobile phone dialer
      window.location.href = `tel:${donor.number}`;
    }
  };
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(donor.email);
    toast(`${donor.name.toUpperCase()} Email copied to clipboard`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const mailtoLink = `mailto:${donor.email}`;
    if (isMobile) {
      // Open the email address in the user's email app
      window.location.href = mailtoLink;
    } else {
      // Open the email address in a new browser tab
      window.open(mailtoLink);
    }
  };
  return (
    <>
      <CardContainer
        sx={{
          width: { md: "320px", xs: "90%" },
          minHeight: "300px",
          backgroundColor: "#ECF2FF",
          p: 2,
          border: "1px solid #E5D1FA",
        }}
      >
        <Box>
          <img
            src={donor.imageURL ?? avatar}
            alt="Donor profile picture"
            style={{ margin: "auto", display: "block", borderRadius: "50%" }}
          />
        </Box>
        <Name>{`${donor.name}`.toUpperCase()}</Name>
        <SubTitle>
          Blood-Group:{" "}
          <b>
            <font color="red">{donor.bloodGroup}</font>
          </b>
        </SubTitle>
        <SubTitle>
          Mobile-Number: <b>{donor.number}</b>
        </SubTitle>
        <SubTitle>
          E-mail: <b>{donor.email}</b>
        </SubTitle>
        <SubTitle>
          Location: <b>{donor.location}</b>
        </SubTitle>
        <Button onClick={handleCopyNumber}>Call</Button>
        <Button onClick={handleCopyEmail}>Email</Button>
      </CardContainer>
    </>
  );
};

export default BloodCard;
// PropTypes validation
BloodCard.propTypes = {
  donor: PropTypes.shape({
    name: PropTypes.string,
    bloodGroup: PropTypes.string,
    email: PropTypes.string,
    location: PropTypes.string,
    number: PropTypes.string,
    imageURL: PropTypes.string,
  }).isRequired,
};
