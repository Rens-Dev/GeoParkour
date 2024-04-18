import { useState } from "react";

type Difficulty = "Noob" | "Hard" | "Extreme" | "Ranked";

interface GameProps {
  difficulty: Difficulty;
}

const difficultyToPhoto = {
  Noob: "https://cdn.discordapp.com/attachments/1097401550311260230/1219512323656515685/1.png?ex=661e075b&is=660b925b&hm=beb50aca8b70ab774a7f9209ddb728f31f2183a67291d631496385074c0fbbe6&",
  Hard: "https://example.com/hard-photo.jpg",
  Extreme: "https://example.com/extreme-photo.jpg",
  Ranked: "https://example.com/ranked-photo.jpg",
};

const actualLocation = {
  x: 364,
  y: 393,
};

function Game({ difficulty }: GameProps) {
  const [guess, setGuess] = useState({ x: 0, y: 0 });
  const photoUrl =
    difficultyToPhoto[difficulty as keyof typeof difficultyToPhoto];

  const handleMapClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const rect = (event.target as Element).getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setGuess({ x, y });
  };
  const distance = Math.hypot(
    guess.x - actualLocation.x,
    guess.y - actualLocation.y
  );
  const score = Math.max(0, 100 - distance / 100);

  return (
    <div className="game-window">
      <h1 className="game-window-title">{difficulty}</h1>
      <img
        src={photoUrl}
        alt={`Image for ${difficulty} difficulty`}
        onError={(e) => {
          e.currentTarget.src = "path/to/backup/image.jpg";
        }}
      />
      <img
        src={
          "https://cdn.discordapp.com/attachments/1097401550311260230/1220626208694472724/reborn_map_ithink.png?ex=6618da3e&is=6606653e&hm=ef14d8b795bdd3c1ac624bdfbf6b880eda8da235b702201338102ee30d6916e0&"
        }
        onClick={handleMapClick}
        alt="Game map"
      />
      <p>Your score: {score.toFixed(2)}</p>
    </div>
  );
}

export default Game;
