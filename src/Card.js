import React from "react";
import { motion } from "framer-motion";

const Card = ({ photo, name, date, time, message, index, wheel }) => {
  return (
    <div
      className={`card ${index === 2 && wheel ? "last-child" : ""} ${
        index === 0 && wheel ? "first-child" : ""
      }`}
      //   initial={{ opacity: 0 }}
      //   animate={{ opacity: 1 }}
      //   transition={{ delay: 1.3 }}
    >
      <div className="card-image">
        <img width="55px" height="55px" src={photo} alt="" />
      </div>
      <div className="card-name">{name}</div>
      <div className="card-date">
        {date} {time}
      </div>

      <p className="card-messeage">{message}</p>
    </div>
  );
};

export default React.memo(Card);
