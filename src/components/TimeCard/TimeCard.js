import Data from "../../data.json";

export default function TimeCard() {
  return (
    <div className="container">
      {Data &&
        Data.length > 0 &&
        Data.map((card) => (
          <div className={card.title}>
            <div className="background"> </div>
            <div className="card-information">
              <div className="title">
                <p>{card.title}</p>
                <p className="text-muted">···</p>
              </div>
              <h2 className="hours">
                {card.timeframes.weekly.current}
              </h2>
              <p className="last-time">
                Last Week -{" "}
                {card.timeframes.weekly.previous}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
