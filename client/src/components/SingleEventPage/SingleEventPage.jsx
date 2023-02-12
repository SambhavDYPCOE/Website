import React from "react";
import classes from "./SingleEventPage.module.css";
import sample from "../../assets/Events/sample.jpeg"
import Button from "../common/Button/Button";

const SingleEventPage = () => {
  return <>
    <div className={classes.singleEvent}>
      <div className={classes.singleEventCard}>
        <div className={classes.col1}>
          <img className={classes.eventPoster} src={sample} alt="sample" />
        </div>
        <div className={classes.col2}>
          <h1 className={classes.eventHeading}>Road Race</h1>
          <div className={classes.description}>
            <h2 className={classes.heading}>Description</h2>
            <p className={classes.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta unde sit sed est perspiciatis, aut nam cupiditate totam sequi accusantium, ex molestias dolores atque fuga, dolorum culpa voluptatem odio impedit.</p>
          </div>

        </div>
      </div>
    </div>
  </>;
};

export default SingleEventPage;
