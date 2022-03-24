import "../../css/App.css";
import userimage from "../../assets/images/image-jeremy.png";

export default function UserCard() {
  return (
    <>
      <div className="user-container">
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
            <button id="daily-btn" className="text-muted">
              Daily
            </button>
            <button id="weekly-btn" className="text-muted">
              Weekly
            </button>
            <button id="monthly-btn" className="text-muted">
              Monthly
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
