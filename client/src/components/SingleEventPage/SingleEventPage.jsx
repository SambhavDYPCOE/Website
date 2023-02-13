import React, { useEffect } from "react";
import classes from "./SingleEventPage.module.css";
import sample from "../../assets/Events/sample.jpeg";
import Button from "../common/Button/Button";
import { useParams } from "react-router-dom";
import { eventsData } from "../../assets/eventsData";

const SingleEventPage = () => {
  const { eventId } = useParams();
  console.log(eventId);

  const requiredEvent = eventsData.find((event) => event.id === +eventId);
  const {
    name,
    image,
    description,
    rules,
    note,
    prizes,
    team,
    fees,
    contactInfo,
    location,
    date,
  } = requiredEvent;

  return (
    <>
      <div className={classes.singleEvent}>
        <div className={classes.singleEventCard}>
          <div className={classes.col1}>
            <img className={classes.eventPoster} src={sample} alt="sample" />
          </div>
          <div className={classes.col2}>
            <h1 className={classes.eventHeading}>{name}</h1>
            <div className={classes.subheading}>
              <h2 className={classes.heading}>Description</h2>
              <p className={classes.content}>{description}</p>
            </div>
            <div className={classes.subheading}>
              <h2 className={classes.heading}>Rules and Regulations</h2>
              <ul>
                {rules.map((rule, i) => {
                  return (
                    <li key={i} className={classes.content}>
                      {rule}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={classes.subheading}>
              <h2 className={classes.heading}>Prizes</h2>
              <ul>
                {prizes.map((prize, i) => {
                  return (
                    <li key={i} className={classes.content}>
                      {prize}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={classes.subheading}>
              <h2 className={classes.heading}>Team</h2>
              <p className={classes.content}>{team}</p>
            </div>
            <div className={classes.subheading}>
              <h2 className={classes.heading}>Fees</h2>
              <p className={classes.content}>{fees}</p>
            </div>
            <div className={classes.subheading}>
              <h2 className={classes.heading}>Location</h2>
              <p className={classes.content}>{location}</p>
            </div>
            <div className={classes.subheading}>
              <h2 className={classes.heading}>Contact Info</h2>
              {contactInfo.map((contact, i) => {
                return (
                  <p key={i} className={classes.content}>
                    {contact}
                  </p>
                );
              })}
            </div>
            <div className={classes.subheading}>
              <h2 className={classes.heading}>Note</h2>
              {note.map(() => {
                return <p className={classes.content}>{note}</p>;
              })}
            </div>
            <Button label="Register" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleEventPage;
