import React from "react";
import sambhavLogo from "../../assets/Logo.png";
import grabbitslogo from "../../assets/grabbits.png";
import classes from "./Footer.module.css";

const sambhavinsta = "";
const sambhavlinkedin = "";
// const sambhavitwitter=''

const grabbitinsta = "";
const grabbitlinkedin = "";
const grabbittwitter = "";
const grabbitwebsite = "";

const spiderurl = "";
const saurabh = "";
const sanyog = "";

const grabbiturl = "https://www.grabbitdypcoe.in";
const Footer = () => {
  return (
    <div className={classes.footer_outer}>
      <div className={classes.footer}>
        <div className={classes.footer_first}>
          <div className={classes.footer_sambhav_image_div}>
            <div>
              <img
                className={classes.footer_sambhav_image}
                src={sambhavLogo}
                alt="sambhavLogo"
              ></img>
            </div>
            <div>
              {/* <h1 className={classes.footer_sambhav}>SAMBHAV'23</h1> */}
            </div>
          </div>
          <p className={classes.footer_sambhav_description}>
            Sambhav'23 is the largest technical festival of Pune. Let&apos;s
            make a Tech move.
          </p>
          <div className={classes.footer_social_item}>
            <div>
              <a
                href={sambhavinsta}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/fluency/48/ffffff/instagram-new.png"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a
                href={sambhavlinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/color/48/ffffff/linkedin-circled--v1.png"
                  alt=""
                />
              </a>{" "}
            </div>
            {/* <div>
              <a
                href={sambhavtwitter}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}>
                <img className={classes.footer_social_link} src="https://img.icons8.com/fluency/48/ffffff/twitter-circled.png" alt="" />
              </a>  </div> */}
          </div>
        </div>
        <div className={classes.footer_first}>
          <div className={classes.footer_sambhav_image_div}>
            <div>
              <a
                href={grabbiturl}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_grabbit_image}
                  src={grabbitslogo}
                  alt="sambhavLogo"
                ></img>
              </a>
            </div>
            <div>
              {/* <h1 className={classes.footer_sambhav}>GrabBit</h1> */}
            </div>
          </div>
          <p className={classes.footer_sambhav_description}>
            Get the latest updates about internships, hackathons, job openings
            and much more..
          </p>
          <div className={classes.footer_social_item}>
            <div>
              <a
                href={grabbitinsta}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/fluency/48/ffffff/instagram-new.png"
                  alt=""
                />
              </a>{" "}
            </div>
            <div>
              <a
                href={grabbitlinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/color/48/ffffff/linkedin-circled--v1.png"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a
                href={grabbittwitter}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/fluency/48/ffffff/twitter-circled.png"
                  alt=""
                />
              </a>{" "}
            </div>
            <div>
              <a
                href={grabbitwebsite}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/color/48/ffffff/domain--v1.png"
                  alt="zsdsff"
                />
              </a>
            </div>
          </div>
        </div>
        {/* <div className={classes.footer}second'>
          <h2 className={classes.footer}menu-heading'>Menu</h2>
          <h6 className={classes.footer}page-link'>About US</h6>
          <h6 className={classes.footer}page-link'>Term of Use</h6>
          <h6 className={classes.footer}page-link'>Privary Policy</h6>
          <h6 className={classes.footer}page-link'>Order History</h6>
          <h6 className={classes.footer}page-link'>Return policy</h6>
        </div> */}
        <div className={classes.footer_third}>
          <h2 className={classes.footer_menu_heading}>Contact Us</h2>
          <div className={classes.footer_contact}>
            <div className={classes.footer_contact_item_image}>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/ios-filled/50/ffffff/marker.png"
                alt=""
              />
            </div>
            <div>
              <p>D.Y. Patil College of Engineering, Pune</p>
            </div>
          </div>
          <div className={classes.footer_contact}>
            <div>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/ios-filled/50/ffffff/outgoing-call.png"
                alt=""
              />
            </div>
            <div>
              <p>7447819903</p>
            </div>
          </div>
          <div className={classes.footer_contact}>
            <div>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/glyph-neue/64/ffffff/gmail.png"
                alt=""
              />
            </div>
            <div>
              <p>sambhavdypcoeofficial@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footer_creator_div}>
        <h4 className={classes.footer_creator}>
          Website designed and created by{" "}
          <a
            href={spiderurl}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.footer_a_link}
          >
            @Om Gawande
          </a>{" "}
          ,{" "}
          <a
            href={saurabh}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.footer_a_link}
          >
            {" "}
            @Saurabh Barde
          </a>{" "}
          and{" "}
          <a
            href={sanyog}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.footer_a_link}
          >
            {" "}
            @Sanyog Mahajan
          </a>{" "}
        </h4>
      </div>
    </div>
  );
};

export default Footer;
