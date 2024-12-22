"use client";
import moment from "moment";
import { Fragment, useEffect, useState } from "react";

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState(
    moment.duration(moment().add(9, "days").diff(moment()))
  );

  useEffect(() => {
    // Initialize the countdown immediately on the client side
    const targetDate = moment().add(9, "days");

    const updateCountdown = () => {
      const now = moment();
      setTimeLeft(moment.duration(targetDate.diff(now)));
    };

    // Update countdown immediately
    updateCountdown();

    // Set interval to update countdown every second
    const interval = setInterval(updateCountdown, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const formatTime = (duration) => {
    const days = String(duration.days()).padStart(2, "0");
    const hours = String(duration.hours()).padStart(2, "0");
    const minutes = String(duration.minutes()).padStart(2, "0");
    const seconds = String(duration.seconds()).padStart(2, "0");

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <Fragment>
      <li>
        <div className="box">
          <span className="days">{days}</span>
          <span className="timeRef">Days</span>
        </div>
      </li>
      <li>
        <div className="box">
          <span className="hours">{hours}</span>
          <span className="timeRef clr-1">Hours</span>
        </div>
      </li>
      <li>
        <div className="box">
          <span className="minutes">{minutes}</span>
          <span className="timeRef clr-2">Mins</span>
        </div>
      </li>
      <li>
        <div className="box">
          <span className="seconds">{seconds}</span>
          <span className="timeRef clr-3">Sec</span>
        </div>
      </li>
    </Fragment>
  );
};

export default CountDown;
