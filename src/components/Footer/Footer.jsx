import React from 'react'
import './Footer.scss'
import { Button, Grid, Typography } from "@material-ui/core";

export const Footer = () => {
    return (
        <div className="footer">
            <Grid container className="footer-grid">
                <Grid item md={4} xs={12} className="footer-col">
                    <div className="container container-left">
                        <div className="heading">
                            <h2>DigiBros</h2>
                        </div>
                        <p>
                            Digibros is a one-stop digital marketing company for all your needs. We have a young
                            and talented team with great enthusiasm and creativity who can help your business fit
                            into this modern Era.

                        </p>

                    </div>
                </Grid>
                <Grid md={4} xs={12} className="footer-col">
                    <div className="container container-middle">
                        <div className="heading">
                            <h2>Address</h2>
                        </div>
                        <p>
                            <a href="https://goo.gl/maps/uaqKCzwrxsTxnxwK6" target="_blank">
                                Saptagiri appartments flat no.203,<br />
                                4/2 Lakshmipuram, Guntur (522007)<br />
                            </a>
                            <strong><a href="tel:8500690700">+91 8500690700</a></strong>
                        </p>
                    </div>
                </Grid>
                <Grid item md={4} xs={12} className="footer-col">
                    <div className="container container-right">

                        <div className="heading">
                            <a target="_blank" href="https://www.facebook.com/profile.php?id=100072659270787">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/digi-bros-2a5686220/">
                                <i className="fab fa-linkedin" />
                            </a>
                            <a target="_blank" href="https://www.instagram.com/digibros.in_/">
                                <i className="fab fa-instagram" />
                            </a>
                        </div>
                        <p>
                            We would love to hear from you!<br />
                            <strong><a href="mailto:digibros2021@gmail.com">digibros2021@gmail.com</a></strong>
                        </p>
                    </div>
                </Grid>
            </Grid>
            <div className="copyright">Copyright © DigiBros</div>
        </div>
    )
}
