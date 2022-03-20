import TimeCard from "../TimeCard/TimeCard";

export default function TimeCards(props) {
  return (
    <div className="timecards">
      <TimeCard className={props.title} />
      {/* <TimeCard className="play" />
      <TimeCard className="study" />
      <TimeCard className="exercise" />
      <TimeCard className="social" />
      <TimeCard className="self-care" /> */}
    </div>
  );
}
