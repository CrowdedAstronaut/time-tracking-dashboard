export default function TimeCard({ className }) {
  return (
    <>
      <div className={className}>
        <div className="background"> </div>
        <div className="card-information">
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
