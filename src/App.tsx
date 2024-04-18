import "bootstrap/dist/css/bootstrap.css";
import "./scss/Custom.scss";
import NavBar from "./components/NavBar";
import Game from "./pages/Game";
import { useState } from "react";

const gameModes = ["Noob", "Hard", "Extreme", "Ranked"];

function App() {
  const [gameMode, setGameMode] = useState("");

  const handleGameModeChange = (mode: string) => {
    setGameMode(mode);
  };

  const handleHome = () => {
    setGameMode("");
    console.log("Home clicked");
  };

  return (
    <div>
      <NavBar
        onClick={handleHome}
        items={gameModes}
        onItemSelected={handleGameModeChange}
      />
      <Game difficulty={gameMode} />
    </div>
  );
}

export default App;
