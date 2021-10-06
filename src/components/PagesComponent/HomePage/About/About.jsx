import React, { Component } from "react";
import { Button, Grid } from "@material-ui/core";
import Lottie from "react-lottie";
import laptopManAnimation from "../../../../assets/Lottie/laptopMan.json";
import { HashLink } from "react-router-hash-link";
import "./About.scss";
export class About extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: laptopManAnimation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return (
      <>
        <div className="dummy"></div>
        <div className="about-section-container">
          <Grid container className="about-section-grid">
            <Grid item md={6} className="grid-left">
              <Lottie isClickToPauseDisabled={true} options={defaultOptions} />
            </Grid>
            <Grid item md={6} className="grid-right">
              <div className="title">
                digibros make sure to invite the world around your business by
                helping you grow your business!
              </div>
              <p className="content">
                get a customized quote and let your business sales echo!
              </p>

              <HashLink to="/contact#getquote">
                <Button
                  className="btn"
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  Get A Quote
                </Button>
              </HashLink>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export default About;
