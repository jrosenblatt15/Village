import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

const Question = (props) => {
  const [flag, setFlag] = useState(false);
  const transition = useTransition(flag, {
    from: { opacity: 0, y: -100, display: "none" },
    enter: { opacity: 1, y: 0, display: "block" },
    leave: { opacity: 0, y: -100, display: "none" },
  });

  return (
    <div>
      <div
        className="ques-div flex"
        onClick={() => {
          if (flag === false) {
            setFlag(true);
          } else {
            setFlag(false);
          }
        }}
        data-aos="fade-right"
      >
        <h4 className="ques">{props.q}</h4>
      </div>
      <hr />
      {transition((style, item) =>
        item ? (
          <animated.div className="ans item" style={style}>
            <p>{props.a}</p>
          </animated.div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default Question;
