import "../../css/App.css";

export default function UserCard() {
  return (
    <>
      <div className="user-container">
        <div className="user-card-information">
          <div className="title">
            <p>Work</p>
            <p className="text-muted">···</p>
          </div>
          <h2 className="hours">32hrs</h2>
          <p className="last-time">Last Week - 36hrs</p>
        </div>
      </div>
    </>
  );
}
