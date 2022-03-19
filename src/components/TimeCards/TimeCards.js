import TimeCard from "../TimeCard/TimeCard";

export default function TimeCards() {
  return (
    <div className="timecards">
      <TimeCard className="work" />
      <TimeCard className="play" />
      <TimeCard className="study" />
      <TimeCard className="exercise" />
      <TimeCard className="social" />
      <TimeCard className="self-care" />
    </div>
  );
}
