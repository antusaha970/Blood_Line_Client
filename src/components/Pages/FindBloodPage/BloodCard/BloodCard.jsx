import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import avatar from "../../../../assets/avatar.jpg";
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
  font-size: 18px;
  line-height: 24px;
  text-align: left;
  color: #000000;
  padding-bottom: 8px;
`;

const BloodCard = ({ donor }) => {
  const handleCopyNumber = () => {
    navigator.clipboard.writeText(donor.number);
  };
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(donor.email);
  };
  return (
    <Box
      sx={{
        width: { md: "320px", xs: "90%" },
        minHeight: "300px",
        backgroundColor: "#EAE6DA",
        p: 2,
      }}
    >
      <Box>
        <img
          src={donor.imageURL ?? avatar}
          alt="Donor profile picture"
          style={{ margin: "auto", display: "block" }}
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
        Institute: <b>Institute of computer science and technology </b>
      </SubTitle>
      <SubTitle>
        Location: <b>{donor.location}</b>
      </SubTitle>
      <Button onClick={handleCopyNumber}>Copy Number</Button>
      <Button onClick={handleCopyEmail}>Copy Email</Button>
    </Box>
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
