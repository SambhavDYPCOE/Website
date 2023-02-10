import { React, useState } from "react";
import classes from "./Faq.module.css";

const data = [
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
];

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className={classes.outerfaq}>
      <div className={classes.firstrow}>
        <div className={classes.faq_heading}>
          <h3 className={classes.faq_heading1}>DO YOU HAVE SOME QUESTIONS?</h3>
          <p className={classes.faq_heading2}>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.accordion}>
            {data.map((item, i) => (
              <div key={i} className={classes.item}>
                <div className={classes.ac_title} onClick={() => toggle(i)}>
                  <h2 className={classes.faq_question}>{item.question}</h2>
                  <span className={classes.faq_sign}>
                    {selected === i ? "-" : "+"}
                  </span>
                </div>
                <div
                  className={
                    selected === i
                      ? `${classes.content} ${classes.show}`
                      : `${classes.content}`
                  }
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
