import LoveCard from "./LoveCard";
import ValentinesGame from "./ValentinesGame";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
      <LoveCard />
      <ValentinesGame />
    </div>
  );
}

export default App;
