import { Box } from "@mui/material";
import PropTypes from "prop-types";
const BloodCard = ({ donor }) => {
  return (
    <Box
      sx={{
        width: { md: "320px", xs: "100%" },
        height: "300px",
        backgroundColor: "gray",
      }}
    >
      {donor.name}
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
