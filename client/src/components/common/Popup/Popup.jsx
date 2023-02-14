import React, { useState, useEffect } from "react";
import classes from "./Popup.module.css";
import whatsapp from "../../../assets/whatsapp.svg";
import cross from "../../../assets/cross.svg";
import GrabBitBtn from "../GrabBitBtn/GrabBitBtn";
import grabbits from "../../../assets/grabbits.png";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupShown = localStorage.getItem("grabBitPopUp");
    if (!popupShown) {
      setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem("grabBitPopUp", true);
      }, 7000);
    }
  }, []);

  function handleClose() {
    setShowPopup(false);
  }

  return (
    <>
      {showPopup && (
        <>
          <div className={classes.blur}>
            <div className={classes.card}>
              <img
                className={classes.close}
                onClick={() => {
                  handleClose();
                }}
                src={cross}
                alt="close"
              />

              <a
                className={classes.grababit_link}
                href="https://grabbits.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  className={classes.grabbit_image}
                  src={grabbits}
                  alt="grabbits"
                />
              </a>
              <h2 className={classes.text}>Join Our Whatsapp Group</h2>
              <h1 className={classes.subtext}>
                Stay updated with all the opportunites.
              </h1>
              <div className={classes.btn_container}>
                <a
                  href="https://chat.whatsapp.com/KBxP1M7GT7mCh4PORsfN0H"
                  target="blank"
                >
                  <GrabBitBtn bgColor="#25D366">
                    <img
                      className={classes.btn_svg}
                      src={whatsapp}
                      alt="whatsapp"
                    />
                    <span className={classes.btn_text}>Whatsapp</span>
                  </GrabBitBtn>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Popup;
