import "./css/App.css";
import TimeCards from "./components/TimeCards/TimeCards";
import UserCard from "./components/UserCard/UserCard";

function App() {
  return (
    <div className="container">
      <UserCard />
      <TimeCards />
    </div>
  );
}

export default App;
