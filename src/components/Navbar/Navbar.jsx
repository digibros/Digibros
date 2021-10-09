import React, { useState, useEffect, useRef } from "react";
import { Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/MenuRounded";
import logo from "../../assets/Logo/logo.png";
import Dropdown from "react-multilevel-dropdown";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Navbar = ({ variant }) => {
  const [navBarToggle, setNavBarToggle] = useState(false);
  const navRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.pageYOffset);
      if (window.pageYOffset > 0) {
        document.querySelector("#nav").className = "nav nav-scroll";
      } else {
        document.querySelector("#nav").className = "nav ";
      }
    });
  }, []);
  return (
    <>
      <nav ref={navRef} className="nav" id="nav">
        {navBarToggle ? (
          <div
            className="overlay"
            onClick={() => {
              setNavBarToggle(false);
            }}
          ></div>
        ) : null}
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} className="logo" alt="" />
          </Link>
        </div>
        {/* <div className="nav-logo"><div className="logo" >DigiBros</div></div> */}
        <ul className={`nav-links ${navBarToggle ? "active" : ""} ${variant}`}>
          <li>
            <Link to="/" className="nav-item">
              Home
            </Link>
          </li>
          <li>
            <Dropdown
              title="Services"
              position="right"
              buttonClassName="dropdown"
              menuClassName="dropdown-menu"
            >
              <Link
                to="/services"
                onClick={() => {
                  setNavBarToggle(false);
                }}
              >
                <Dropdown.Item className="dropdown-items">
                  All Services
                </Dropdown.Item>
              </Link>
              <Dropdown.Item className="dropdown-items">
                Web Development
                <Dropdown.Submenu
                  position={"right"}
                  className="dropdown-submenu"
                >
                  <HashLink
                    smooth
                    to="/services#wd-01"
                    onClick={() => {
                      setNavBarToggle(false);
                    }}
                  >
                    <Dropdown.Item className="dropdown-items">
                      Web Designing
                    </Dropdown.Item>
                  </HashLink>
                  <HashLink
                    smooth
                    to="/services#wd-02"
                    onClick={() => {
                      setNavBarToggle(false);
                    }}
                  >
                    <Dropdown.Item className="dropdown-items">
                      E-Commerce
                    </Dropdown.Item>
                  </HashLink>
                </Dropdown.Submenu>
              </Dropdown.Item>
              <Dropdown.Item className="dropdown-items">
                Marketing
                <Dropdown.Submenu
                  position={"right"}
                  className="dropdown-submenu"
                >
                  <HashLink
                    smooth
                    to="/services#m-01"
                    onClick={() => {
                      setNavBarToggle(false);
                    }}
                  >
                    <Dropdown.Item className="dropdown-items">
                      SEO
                    </Dropdown.Item>
                  </HashLink>
                  <HashLink
                    smooth
                    to="/services#m-02"
                    onClick={() => {
                      setNavBarToggle(false);
                    }}
                  >
                    <Dropdown.Item className="dropdown-items">
                      SEM
                    </Dropdown.Item>
                  </HashLink>
                  <HashLink
                    smooth
                    to="/services#m-03"
                    onClick={() => {
                      setNavBarToggle(false);
                    }}
                  >
                    <Dropdown.Item className="dropdown-items">
                      SMM
                    </Dropdown.Item>
                  </HashLink>
                  <HashLink
                    smooth
                    to="/services#m-04"
                    onClick={() => {
                      setNavBarToggle(false);
                    }}
                  >
                    <Dropdown.Item className="dropdown-items">
                      Content Marketing
                    </Dropdown.Item>
                  </HashLink>
                  <HashLink
                    smooth
                    to="/services#m-05"
                    onClick={() => {
                      setNavBarToggle(false);
                    }}
                  >
                    <Dropdown.Item className="dropdown-items">
                      Email marketing
                    </Dropdown.Item>
                  </HashLink>
                </Dropdown.Submenu>
              </Dropdown.Item>
              <Dropdown.Item className="dropdown-items">
                Creative
                <Dropdown.Submenu
                  position={"right"}
                  className="dropdown-submenu"
                >
                  <HashLink
                    smooth
                    to="/services#c-01"
                    onClick={() => {
                      setNavBarToggle(false);
                    }}
                  >
                    <Dropdown.Item className="dropdown-items">
                      Graphic designing
                    </Dropdown.Item>
                  </HashLink>
                  <HashLink
                    smooth
                    to="/services#c-02"
                    onClick={() => {
                      setNavBarToggle(false);
                    }}
                  >
                    <Dropdown.Item className="dropdown-items">
                      Poster & Brochures
                    </Dropdown.Item>
                  </HashLink>
                </Dropdown.Submenu>
              </Dropdown.Item>
            </Dropdown>
          </li>

          <li>
            <Link to="/about" className="nav-item">
              About
            </Link>
          </li>
          <li>
            <HashLink smooth to="/#contact" className="nav-item">
              Contact
            </HashLink>
          </li>
          <li>
            <Link to="/contact">
              <Button
                className="btn"
                variant="contained"
                color="primary"
                disableElevation
              >
                Get A Quote
              </Button>
            </Link>
          </li>
        </ul>

        <MenuIcon
          className="nav-toggle-icon"
          onClick={() => {
            setNavBarToggle(!navBarToggle);
          }}
        />
      </nav>
    </>
  );
};
