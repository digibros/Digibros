import React from "react";
import "./ServiceContent.scss";
import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Lottie from "react-lottie";
import {
  WebDesigningLottie,
  WebsiteForStartupLottie,
  WebsiteForGrowingBusinessLottie,
  WebsiteForRevampLottie,
  EcommerceLottie,
  SEOLottie,
  SEMLottie,
  SMMLottie,
  ContentMarketingLottie,
  EmailMarketingLottie,
  GraphicDesignLottie,
  PosterAndBrochureLottie,
} from "../../../assets/Lottie/LottieFiles";
import { SendOutlined } from "@material-ui/icons";

export const ServiceContent = () => {
  return (
    <div className="services-hero">
      <div className="content">
        <div className="heading">Services</div>
        <h1 id="wd-01" style={{ paddingTop: "0rem" }}>
          1. Web Designing
        </h1>
        <Grid container className="grid-container">
          <div className="grid-item item-data">
            <p>
              <h3>Create a brand, not just a website</h3>
              <br />
              <strong>
                Web designing is like a painting except the painting never
                dries.{" "}
              </strong>{" "}
              We know Web Designing refers to the design of the website
              displayed on the internet. For a website to be interactive and
              addictive it should look good from both the inside and the outside
              where the outside which the users sees and the inside part is what
              we do, our team from Digibros provide the client all the features
              they want.
            </p>
          </div>
          <div className="grid-item img">
            <Lottie
              isClickToPauseDisabled={true}
              options={WebDesigningLottie}
            />
          </div>
        </Grid>
        <Grid container className="grid-container">
          <div className="grid-item img">
            <Lottie
              isClickToPauseDisabled={true}
              options={WebsiteForStartupLottie}
            />
          </div>
          <div className="grid-item item-data">
            <h2>Website for startup</h2>
            <p>
              For a startup to thrive or attract customers you need a great
              online presence and this can be done at our Digibros, kick start
              your business with the help of our well experienced team and
              working with people with unique ideas is always exhilarating. We
              will listen to all your desires and customize the website
              according to it.
            </p>
            <p>
              We provide you with the following services: Responsive Design,
              Analytic, Bespoke Design, Social Media Integration, CMS, Technical
              Support, Domain & Hosting, Majestic pictures, SEO Friendly.
            </p>
          </div>
        </Grid>
        <Grid container className="grid-container">
          <div className="grid-item item-data">
            <h2>Website for growing business</h2>
            <p>
              Boost your website to the maximum with the help of our dedicated
              team of digital analytics experts that will help you attract and
              convert more customers to your website enabling the growth of your
              business.
            </p>
            <p>
              if your website is not up to mark it will not be possible to
              convert the potential customers to customers so we of Digibros
              provide you with multiple features to make your website as
              interactive as possible and also design it in such a way it will
              attract more traffic to your website.
            </p>
          </div>
          <div className="grid-item img">
            <Lottie
              isClickToPauseDisabled={true}
              options={WebsiteForGrowingBusinessLottie}
            />
          </div>
        </Grid>
        <Grid container className="grid-container">
          <div className="grid-item img">
            <Lottie
              isClickToPauseDisabled={true}
              options={WebsiteForRevampLottie}
            />
          </div>
          <div className="grid-item item-data">
            <h2>Website for Revamp</h2>
            <p>
              In this world of fast internet your websites shows about your
              brand and identity and an outdated website which does not give any
              of the modern features and does not even look appalling will not
              only fail to find potential customers it might also lose its
              official customers so our Digibros provides you this opportunity
              to improve your website with all the modern features keeping in
              mind all your required specifications, target industry and target
              audience.
            </p>
            <p>
              Our team from Digibros provides you with top notch web design
              services and development services.
            </p>
            <p>
              We provide the following services: Landing Page Redesign,
              Redesigning the website, E-Commerce Website Redesign, Content
              Migration.
            </p>
          </div>
        </Grid>
        {/* ==================================================== */}
        <Grid container className="grid-container">
          <h1 id="wd-02">2. E-Commerce</h1>
          <div className="grid-container">
            <div className="grid-item item-data">
              <p>
                <strong>Ecommerce</strong> , also known as electronic commerce
                or internet commerce, refers to the buying and selling of goods
                or services using the internet, and the transfer of money and
                data to execute these transactions.
              </p>
              <p>
                Our team from Digibros provides you with two servers for safety
                reasons for users so no privacy is breached and our team from
                Digibros also helps with the management of the server with all
                due respect.
              </p>
            </div>
            <div className="grid-item img">
              <Lottie isClickToPauseDisabled={true} options={EcommerceLottie} />
            </div>
          </div>
        </Grid>
        {/* ==================================================== */}
        <Grid container className="grid-container">
          <h1 id="m-01">3. SEO</h1>
          <div className="grid-container">
            <div className="grid-item item-data">
              <p>
                <h3>Be the first priority to your customer.</h3>
                <br />
                <strong>
                  Google only loves you when everyone else loves you{" "}
                </strong>{" "}
                even though the statement is contradicting it’s true, to
                overcome this issue, we use Search engine optimization (SEO)
                which is the process of improving the quality and quantity of
                website traffic to a website or a web page from search engines.
              </p>
              <p>
                Successful seo is not tricking Google but rather partnering with
                it which makes our websites readily available for the user.
              </p>
            </div>
            <div className="grid-item img">
              <Lottie isClickToPauseDisabled={true} options={SEOLottie} />
            </div>
          </div>
        </Grid>
        {/* ==================================================== */}
        <Grid container>
          <h1 id="m-02">4. SEM</h1>
          <div className="grid-container">
            <div className="grid-item item-data">
              <p>
                <h3>Be Everywhere</h3>
                <br />
                Digital Marketing is not an art of selling a product. It is an
                art of making people buy the product that you sell. Strategic
                approach to this is through Search engine marketing (SEM) which
                is a form of Internet marketing that involves the promotion of
                websites by increasing their visibility in search engine results
                pages primarily through paid advertising.
              </p>
            </div>
            <div className="grid-item img">
              <Lottie
                isClickToPauseDisabled={true}
                options={SEMLottie}
                width="90%"
              />
            </div>
          </div>
        </Grid>
        {/* ==================================================== */}
        <Grid container>
          <h1 id="m-03">5. SMM</h1>
          <div className="grid-container">
            <div className="grid-item item-data">
              <p>
                <h3>Engage and entertain.</h3>
                <br />
                Social media marketing is the use of social media platforms and
                websites to promote a product or service.
              </p>
              <p>
                Social media marketing is about sociology and psychology more
                than technology. As quoted by Jeff Bezos “If you make customers
                happy in the physical world, they might each tell 6 friends. If
                you make customers happy on the Internet, they can each tell
                6,000 friends.”
              </p>
            </div>
            <div className="grid-item img">
              <Lottie isClickToPauseDisabled={true} options={SMMLottie} />
            </div>
          </div>
        </Grid>
        {/* ==================================================== */}
        <Grid container>
          <h3>Think before you ink</h3>
          <div className="grid-container">
            <div className="grid-item item-data">
              <h1 id="m-04">6. Content Marketing</h1>
              <p>
                <br />
                Content marketing is a form of marketing focused on creating,
                publishing, and distributing content for a targeted audience
                online. Every digital marketing expert says that “Content Is
                King''. Because all the techniques we have mentioned need
                content. Whether it's SEO, SMM, SEM, Email Marketing, etc., will
                not work without content. That’s the importance of content
                marketing services.
              </p>
              <p>
                Content-based marketing gets repeated in social media and
                increases word-of-mouth mentions, it’s the best way to gather
                buzz about a product. Our team from Digibros will provide you
                with the best content.
              </p>
            </div>
            <div className="grid-item img">
              <Lottie
                isClickToPauseDisabled={true}
                options={ContentMarketingLottie}
              />
            </div>
          </div>
        </Grid>
        {/* ==================================================== */}
        <Grid container className="grid-container">
          <h1 id="m-05">7. Email Marketing</h1>
          <div className="grid-container">
            <div className="grid-item item-data">
              <p>
                <h3>Old is Gold.</h3>
                <br />
                Generally, Email Marketing is one of the ancient forms of
                marketing techniques. It is the process of sending attractive,
                informative emails to the targeted customers to generate the
                leads. This process involves innovative techniques. Our team
                from Digibros prepares Emails by adding interesting stuff like
                offers, coupons, discounts.
              </p>
            </div>
            <div className="grid-item img">
              <Lottie
                isClickToPauseDisabled={true}
                options={EmailMarketingLottie}
              />
            </div>
          </div>
        </Grid>
        {/* ==================================================== */}
        <Grid container>
          <h1 id="c-01">8. Graphic designing</h1>
          <div className="grid-container">
            <div className="grid-item item-data">
              <p>
                <h3>Designs that you can’t ignore</h3>
                <br />
                There are three responses to a piece of design – yes, no, and
                WOW! Our team from Digibros provides you graphic designs in such
                a way that the only reply you will have is WOW! Our team from
                Digibros creates visual content to communicate messages by
                applying visual hierarchy and page layout techniques, designers
                use typography and pictures to meet users' specific needs and
                focus on the logic of displaying elements in interactive
                designs, to optimize the user experience.
              </p>
              <p>
                We provide you with both 2d and 3d static designs such that it
                optimizes the user experience and makes the website more
                interactive.
              </p>
            </div>
            <div className="grid-item img">
              <Lottie
                isClickToPauseDisabled={true}
                options={GraphicDesignLottie}
              />
            </div>
          </div>
        </Grid>
        {/* ==================================================== */}
        <Grid container>
          <h1 id="c-02">9. Poster & Brochures</h1>
          <div className="grid-container">
            <div className="grid-item item-data">
              <p>
                Our team from Digibros is expert in designing brand logos,
                featured images, etc according to your business theme.
              </p>
              <p>
                In general, making creative and innovative designs is not a born
                talent. It will come with years of experience and our
                creativity. By recognizing this, we have hired a well
                experienced team well experienced in both poster and brochure
                designs and we can always customize to the customers request.
                Similarly our team from Digibros also provides visiting cards,
                logo designs required by the client according to their
                customization.
              </p>
            </div>
            <div className="grid-item img">
              <Lottie
                isClickToPauseDisabled={true}
                options={PosterAndBrochureLottie}
              />
            </div>
          </div>
        </Grid>
        {/* ==================================================== */}

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
        <br />
        <br />
      </div>
    </div>
  );
};
