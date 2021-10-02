import React from 'react'
import './Contact.scss'
import { HashLink } from 'react-router-hash-link';

import { Button, Grid, Typography } from "@material-ui/core";


export const Contact = () => {
    return (
        <div id="contact" className="contact">
            <div className="contact-container">

                <Grid container className="title-grid">
                    <Grid item xs={12} className="title">
                        <h2>Get In Touch</h2>
                        <p>
                            Interested to Explore More? Book a FREE One-hour Consultation with
                            Our Experts and transpire a complete Digital Marketing Strategy
                            for You.
                        </p>
                    </Grid>
                </Grid>
                <Grid container className="contact-grid">
                    <Grid item md={4} xs={12} className="grid-item phone">
                        <a href="tel:8500690700"> <i className="fas fa-phone-alt" />&nbsp;+91 8500690700 </a>
                        <a target="_blank" href="https://api.whatsapp.com/send?phone=+919618234477"> <i className="fas fa-phone-alt" />&nbsp;+91 9618234477 </a>
                        <a target="_blank" href="https://api.whatsapp.com/send?phone=+917287054762"> <i className="fas fa-phone-alt" />&nbsp;+91 7287054762 </a>
                    </Grid>
                    <Grid item md={4} xs={12} className="grid-item">
                        <a href="mailto:digibros2021@gmail.com"><i className="fas fa-envelope" />&nbsp;digibros2021@gmail.com</a>
                    </Grid>
                    <Grid item md={4} xs={12} className="grid-item">
                        <HashLink to="/contact#getquote">
                            <Button
                                className="btn"

                            >
                                <i className="fas fa-paper-plane" />&nbsp;Get A Quote
                            </Button>
                        </HashLink>
                    </Grid>
                </Grid>
                <Grid container className="contact-sub-grid">
                    <Grid item md={4} xs={12} className="grid-item">
                        <i className=""> (Call Us To Get Started) </i>
                    </Grid>
                    <Grid item md={4} xs={12} className="grid-item">
                        <i className=""> (Mail Us To Get Started) </i>

                    </Grid>
                    <Grid item md={4} xs={12} className="grid-item">
                        <i className="">
                            (Book Now To Get Started)
                        </i>

                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
