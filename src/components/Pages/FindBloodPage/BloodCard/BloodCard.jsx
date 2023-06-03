import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import avatar from "../../../../assets/avatar.jpg";
import { toast } from "react-toastify";
import { Email, Phone, Place, Bloodtype } from "@mui/icons-material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
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
  font-size: 14px;
  line-height: 24px;
  text-align: left;
  color: #000000;
  padding-bottom: 8px;
  display: flex;
  align-items: center;
`;

const CardContainer = styled(Box)`
  background: rgba(255, 255, 255, 0.45);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.225);
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
      autoClose: 3000,
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
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <CardContainer
        sx={{
          width: { md: "320px", xs: "90%" },
          minHeight: "300px",
          p: 2,
        }}
      >
        <Box>
          <img
            src={donor.imageURL ?? avatar}
            alt="Donor profile picture"
            style={{
              margin: "auto",
              display: "block",
              borderRadius: "50%",
              paddingBottom: "10px",
            }}
          />
        </Box>
        <Name>{`${donor.name}`.toUpperCase()}</Name>
        <SubTitle>
          <Bloodtype /> &nbsp;:&nbsp;&nbsp;
          <b>
            <font color="red">{donor.bloodGroup}</font>
          </b>
        </SubTitle>
        <SubTitle>
          <Phone /> &nbsp;: &nbsp;<b>{donor.number}</b>
        </SubTitle>
        <SubTitle>
          <Email /> &nbsp;: &nbsp;<b>{donor.email}</b>
        </SubTitle>
        <SubTitle>
          <Place /> &nbsp;: &nbsp;<b>{donor.location}</b>
        </SubTitle>
        <SubTitle>
          Ready to Donate &nbsp;: &nbsp;
          <b>{donor?.isAbleToDonateBlood || "Yes"}</b>
        </SubTitle>
        <Button onClick={handleCopyNumber}>Call</Button>
        <Button onClick={handleCopyEmail}>Email</Button>
      </CardContainer>
    </motion.div>
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
    isAbleToDonateBlood: PropTypes.string,
  }).isRequired,
};
