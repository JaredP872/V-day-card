import LoveCard from "./LoveCard";
import ValentinesGame from "./ValentinesGame"; // Import the new game component

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
      <LoveCard />
      <ValentinesGame />
    </div>
  );
}

export default App;
