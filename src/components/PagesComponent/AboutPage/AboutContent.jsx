import React from 'react'
import "./AboutContent.scss";
import { Button, Grid } from "@material-ui/core";
import Akhil from '../../../assets/Images/akhil.jpg'
import Nitin from '../../../assets/Images/nitin.jpg'
import Prakash from '../../../assets/Images/prakash.jpg'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const AboutContent = () => {
    return (
        <div className="about-hero">
            <Grid container className="grid-container">
                <Grid item xs={12} className="title">
                    <div className="heading">About Us</div>
                    <div className="call-to-action">
                        <HashLink smooth to="/contact">
                            <Button className="btn" variant="contained" color="primary" disableElevation>Get A Quote</Button>
                        </HashLink>
                    </div>
                    <div className="content">
                        <h1>Introduction</h1>
                        <p>
                            <strong>DigiBros</strong> is a one-stop digital marketing company for all your needs. We have a young
                            and talented team with great enthusiasm and creativity who can help your business fit
                            into this modern Era. We help you with all your marketing needs - SEO, SEM, SMM,
                            Email Marketing, Content Marketing, Graphic Designing and Posters & Brochures
                            etc.
                        </p>
                        <p>
                            We offer a service tailored to each client's budget and requirements with a team of
                            experts who are passionate about what they do. We’ll see you through every step of the
                            way - from getting you results to achieving your goals.
                        </p>
                        <div className="serv-cards">
                            <Grid container className="cards-grid">
                                <Grid item md={4} sm={12} xs={12} className="card-item">
                                    <div className="card">
                                        <div className="icon"><i className="fas fa-window-restore" /></div>
                                        <div className="title">Web Development</div>
                                        <HashLink smo to="/services#wd-01" className="learn-more">Learn More</HashLink>
                                    </div>
                                </Grid>
                                <Grid item md={4} sm={12} xs={12} className="card-item">
                                    <div className="card">
                                        <div className="icon"><i className="fas fa-bullhorn" /></div>
                                        <div className="title">Marketing</div>
                                        <HashLink smo to="/services#m-01" className="learn-more">Learn More</HashLink>
                                    </div>
                                </Grid>
                                <Grid item md={4} sm={12} xs={12} className="card-item">
                                    <div className="card">
                                        <div className="icon"><i className="fas fa-palette" /></div>
                                        <div className="title">Creative</div>
                                        <HashLink smo to="/services#c-01" className="learn-more">Learn More</HashLink>
                                    </div>
                                </Grid>

                            </Grid>
                        </div>
                        <p>
                            You'll never have to worry about whether or not we can provide services for your needs -
                            because we can! We can handle all of your website needs from design to development
                            and everything in between as well as offer full-service digital marketing services
                        </p>
                        <br />
                        <h1>Our Team</h1>
                        <p>
                            We are the “Believers of creating profitable trends in your market” & we won’t stop
                            working until we make it happen.
                        </p>
                        <div className="team-cards">
                            <Grid container className="cards-grid">
                                <Grid item md={4} sm={12} xs={12} className="card-item">
                                    <div className="card">
                                        <div className="icon"><img src={Akhil} alt="Akhil" className="team-image" /></div>
                                        <div className="title">Akhil</div>
                                        <div className="desc">
                                            We workout on sales<br />
                                            Driven strategies with<br />
                                            The best suitable budget!
                                        </div>
                                        {/* <a href="#" className="learn-more">Know More <i className="fas fa-long-arrow-alt-right" /></a> */}
                                    </div>
                                </Grid>
                                <Grid item md={4} sm={12} xs={12} className="card-item">
                                    <div className="card">
                                        <div className="icon"><img src={Nitin} alt="Akhil" className="team-image" /></div>
                                        <div className="title">Nitin</div>
                                        <div className="desc">
                                            Our main motto is to make YOU grow!
                                            <br />
                                            <br />
                                            <br />
                                        </div>
                                        {/* <a href="#" className="learn-more">Know More <i className="fas fa-long-arrow-alt-right" /></a> */}
                                    </div>
                                </Grid>
                                <Grid item md={4} sm={12} xs={12} className="card-item">
                                    <div className="card">
                                        <div className="icon"><img src={Prakash} alt="Akhil" className="team-image" /></div>
                                        <div className="title">Prakash</div>
                                        <div className="desc">
                                            Good Marketing Gives you a Driving seat in the market!
                                            <br />
                                            <br />
                                        </div>
                                        {/* <a href="#" className="learn-more">Know More <i className="fas fa-long-arrow-alt-right" /></a> */}
                                    </div>
                                </Grid>

                            </Grid>
                        </div>
                        <p>
                            We help you with every step of your marketing journey: from getting your website
                            ranked on Google to developing an effective content strategy that generates leads. In
                            short - we do everything.<br /><br />
                            We are the best choice for your business
                        </p>
                        <HashLink smooth to="/contact#getquote">
                            <Button className="btn" variant="contained" color="primary" disableElevation>Get A Quote</Button>
                        </HashLink>
                        <br /><br />
                        <p>
                            Don't let your competitors beat you! Improve your
                            online presence with our digital marketing services!

                        </p>

                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
