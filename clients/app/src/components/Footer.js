import React from "react";
import Grid from "@material-ui/core/Grid";
import { withTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Container, Row, Col } from "react-grid-system";
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon
} from "react-share";
import logo from "../img/ischool_log.png";

const styles = {
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  },
  label: {
    textTransform: "capitalize"
  },
  footer: {
    background: "#003b77",
    height: "200px",
    position: "fixed",
    bottom: 0,
    left: 0,
    marginBottom: 0,
    width: "100%",
    color: "#FFF",
    padding: 15
    // paddingTop: theme.spacing.unit * 2,
    // paddingBottom: theme.spacing.unit * 2
  }
};

const Footer = props => {
  // const { theme } = prosps;
  // const primaryColor = theme.palette.primary.dark;
  // const textColor = theme.palette.secondary.contrastText;

  // const styles = {
  //   footer: {
  //     background: primaryColor,
  //     height: "200px",
  //     position: "fixed",
  //     bottom: 0,
  //     left: 0,
  //     marginBottom: 0,
  //     width: "100%",
  //     paddingTop: theme.spacing.unit * 2,
  //     paddingBottom: theme.spacing.unit * 2
  //   },
  //   text: {
  //     color: `${textColor} !important`
  //   }
  // };
  const { classes } = props;

  return (
    <Container fluid>
      <Row className={classes.footer}>
        <Col sm={3} className="Clique">
          <Typography variant="h4" color="inherit">
            {" "}
            CLIQUE{" "}
          </Typography>{" "}
        </Col>

        <Col sm={3} className="Contact">
          <Typography variant="h6" color="inherit">
            {" "}
            Contact{" "}
          </Typography>{" "}
          <Row>
            <FacebookShareButton>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <EmailShareButton>
              <EmailIcon size={32} round />
            </EmailShareButton>
          </Row>
        </Col>

        <Col sm={3} className="Legal">
          <Typography color="inherit" variant="h6">
            {" "}
            Legal{" "}
          </Typography>{" "}
          <Typography color="inherit" variant="subtitle1">
            {" "}
            T&C{" "}
          </Typography>
          <Typography color="inherit" variant="subtitle1">
            {" "}
            Privacy{" "}
          </Typography>
        </Col>

        <Col sm={3} className="iSchool">
          <img
            src={logo}
            vspace="10"
            width="250"
            height="50"
            alt="Informatics Logo"
          />
        </Col>
      </Row>{" "}
    </Container>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
