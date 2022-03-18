import "../../css/App.css";

export default function UserCard() {
  return (
    <>
      <div className="card-information">
        <div className="title">
          <p>Work</p>
          <p className="text-muted">···</p>
        </div>
        <h2 className="hours">0hrs</h2>
        <p className="last-time"> Select Time Tracking</p>
      </div>
    </>
  );
}
