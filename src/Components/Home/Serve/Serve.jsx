import React from "react";
import "./Serve.css";
import CountUp from "react-countup";

const Serve = () => {
  const easingFn = (t, b, c, d) => {
    const ts = (t /= d) * t;
    const tc = ts * t;
    return b + c * (tc + 3 * ts + 3 * t);
  };

  return (
    <div className="serve">
      <div className="text-container">
        <h2>WE ARE ALWAYS HERE TO SERVE YOU.</h2>
      </div>
      <div className="details">
        <div className="column">
          <span className="number golden">
            <CountUp end={980} duration={3} easingFn={easingFn} />+
          </span>
          <span className="label">Satisfied Customers</span>
        </div>
        <div className="column">
          <span className="number golden">
            <CountUp end={210} duration={3} easingFn={easingFn} />+
          </span>
          <span className="label white">Delicious Dishes</span>
        </div>
        <div className="column">
          <span className="number golden">
            <CountUp end={7000} duration={3} easingFn={easingFn} />+
          </span>
          <span className="label">Food Dilivered</span>
        </div>
      </div>
    </div>
  );
};

export default Serve;
