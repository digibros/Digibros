import React from "react";
import { Button, Grid } from "@material-ui/core";
import Lottie from 'react-lottie';
import laptopAnimation from '../../../../assets/Lottie/laptop.json'
import { Link } from "react-router-dom";
import "./Hero.scss";

export const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: laptopAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <header>
      <Grid container className="hero-section-grid">
        <Grid item md={7} className="title">
          <div>
            {/* <div className="title-1">Welcome to DigiBros</div> */}
            <div className="title-1">We believe in creating trends that adds value to your business</div>
            {/* <div className="title-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
              cumque optio animi totam odio! Magni nisi, quod et minima laborum odio, tempore excepturi beatae corporis id eligendi, ea vero harum?
            </div> */}
            {/* <div className="title-4"><LocationOnOutlinedIcon style={{ paddingTop: "0.6rem" }} />Based in Chhattisgarh, India.</div> */}
            <div className="call-to-action">
              <Link to="/about">
                <Button className="btn" variant="contained" color="primary" disableElevation>About Us</Button>
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item md={5} className="image">
          <Lottie isClickToPauseDisabled={true} options={defaultOptions} />
        </Grid>
      </Grid>
    </header>
  );
};
