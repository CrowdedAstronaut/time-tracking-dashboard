import "../../css/App.css";

export default function UserCard() {
  return (
    <>
      <div className="user-container">
        <div className="user-report-container">
          <div className="user-report">
            <img
              src="../../assets/images/image-jeremy.png"
              alt=""
            />

            <div>
              <p className="small-text text-muted">
                Report for
              </p>
              <p className="big-text">Jeremy Robson</p>
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
