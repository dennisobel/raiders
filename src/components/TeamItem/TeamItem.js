import React from "react";
import "./TeamItem.css";

import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaUserAlt,
} from "react-icons/fa";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TeamItem = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Destructuring props
  const { id, image, name, title, player, accounts, bio } = props;

  return (
    <>
      <div className="team-item" key={id}>
        {/* Team member image Container */}
        <div className="image">
          {/* Team member Picture */}
          <img src={image} alt="Team-Pic" />

          {/* Social media icons */}
          <div className="icon-container">
            <a className="icon" href="#" onClick={handleClickOpen}>
              <FaUserAlt />
            </a>
            {/* <a className="icon" href={accounts.linkedin}>
              <FaLinkedin />
            </a>
            <a className="icon" href={accounts.twitter}>
              <FaTwitter />
            </a>
            <a className="icon" href={accounts.instagram}>
              <FaInstagram />
            </a> */}
          </div>
        </div>

        {/* Team member content */}
        <div className="content">
          {/* Conditional rendering based on the player data */}
          {player ? ( // If player data exists, render the Link
            <Link
              to={{
                pathname: "/Team/Players/" + name,
              }}
              state={player}
              className="main-heading"
            >
              <h2>{name}</h2>
            </Link>
          ) : (
            // If player data doesn't exist, render just the name
            <h2>{name}</h2>
          )}
          <h5>{title}</h5> {/* Team member title */}
        </div>
      </div>
      
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="100vh"
        style={{height:"1400px"}}
      >
        <DialogTitle>About {name}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            style={{ fontSize: "18px" }}
          >
            {bio}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Go Back</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TeamItem;
