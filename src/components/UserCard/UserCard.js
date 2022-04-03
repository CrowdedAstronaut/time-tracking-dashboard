import "../../css/App.css";
import userimage from "../../assets/images/image-jeremy.png";
import { useState } from "react";

export default function UserCard() {
  const [isTimeDaily, setTimeDaily] = useState(false);
  const [isTimeWeekly, setTimeWeekly] = useState(true);
  const [isMonthly, setTimeMonthly] = useState(false);

  const handleClick = () => {
    setTimeDaily(true);
    setTimeWeekly(false);
    setTimeMonthly(false);
  };

  const handleClickWeek = () => {
    setTimeDaily(false);
    setTimeWeekly(true);
    setTimeMonthly(false);
  };

  const handleClickMonth = () => {
    setTimeDaily(false);
    setTimeMonthly(true);
    setTimeWeekly(false);
  };
  return (
    <>
      {/* <div className="user-container"> */}
      <div className="user-report-container">
        <div className="user-report">
          <img src={userimage} alt="" />

          <div className="title">
            <p className="small-text text-muted">
              Report for
            </p>
            <p className="big-text">
              <div className="first-name">Jeremy</div>
              <div className="last-name">Robson</div>
            </p>
          </div>
        </div>

        <div className="time-option">
          <ul className="trackingList">
            <li className="trackingListItem">
              <a
                href="/#"
                className={
                  isTimeDaily ? "DailyColor" : "Daily"
                }
                onClick={handleClick}
              >
                Daily
              </a>
            </li>
            <li className="trackingListItem">
              <a
                href="/#"
                className={
                  isTimeWeekly ? "WeeklyColor" : "Weekly"
                }
                onClick={handleClickWeek}
              >
                Weekly
              </a>
            </li>
            <li className="trackingListItem">
              <a
                href="/#"
                className={
                  isMonthly ? "MonthlyColor" : "Monthly"
                }
                onClick={handleClickMonth}
              >
                Monthly
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
