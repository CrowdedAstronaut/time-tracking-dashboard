import React, { useEffect, useState } from "react";

export default function TimeCard() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      // fetch
      const response = await fetch("./data.json");
      const data = await response.json();

      setData(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {data &&
        data.length > 0 &&
        data.map((card, idx) => (
          <div className="time-container">
            <div className={card.title}>
              <div className="background"> </div>
              <div className="card-information">
                <div className="title">
                  <p>{card.title}</p>
                  <p className="text-muted">···</p>
                </div>
                <h2 className="hours">
                  {card.timeframes.weekly.current}
                  {"hrs"}
                </h2>
                <p className="last-time">
                  Last Week -{" "}
                  {card.timeframes.weekly.previous} {"hrs"}
                </p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
