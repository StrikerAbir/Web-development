import React, { useEffect, useState } from "react";
import "./Side.css";
import pic from "../../images/pic5.png";
import BreakTime from "../BreakTime/BreakTime";
import { addBreakToDb, getStoredData } from "../../utitlites/localStorage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Side = ({ adds }) => {
  const timeTotal = adds.reduce(
    (prev, cur) => prev + parseFloat(cur.time) * cur.clickTimes,
    0
  );
  const array = [
    { id: 1, min: 20 },
    { id: 2, min: 30 },
    { id: 3, min: 40 },
    { id: 4, min: 50 },
  ];
  const [breakT, setBreakT] = useState(0);
  useEffect(() => {
    const data = getStoredData("break");
    setBreakT(data);
  }, []);

  const handleBreakTime = (min) => {
    setBreakT(min);
    addBreakToDb(min);
  };

  const notify = () => {
    toast("Mission Accomplished");
  };
  return (
    <div className="side-body">
      {/* my info */}
      <div className="side-header">
        <img src={pic} alt="" />
        <h2>Abir Hasan</h2>
      </div>
      <div className="my-info">
        <div>
          <h2>5.5</h2>
          <p>Height</p>
        </div>
        <div>
          <h2>
            24<small>years</small>
          </h2>
          <p>Age</p>
        </div>
        <div>
          <h2>
            55<small>kg</small>
          </h2>
          <p>Weight</p>
        </div>
      </div>

      {/* break time part */}
      <div className="bt-container">
        <h2>Break Time</h2>
        <div className="break-time">
          {array.map((min) => (
            <BreakTime
              handleBreakTime={handleBreakTime}
              minutes={min}
              key={min.id}
            ></BreakTime>
          ))}
        </div>
      </div>

      {/* Detais part */}
      <div className="details">
        <h2>Sports Time Details</h2>
        <div className="times">
          <p>Sports Time</p>

          <p>
            <span>{timeTotal}hr</span>
            <span>
              <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
            </span>
          </p>
        </div>
        <div className="times">
          <p>Break Time</p>
          <p>
            <span>{breakT}min</span>
            <span>
              <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
            </span>
          </p>
        </div>
      </div>
      <div>
        <ToastContainer></ToastContainer>
        <button className="activity-btn" onClick={notify}>
          <p>Activity Complete</p>
        </button>
      </div>
    </div>
  );
};

export default Side;
