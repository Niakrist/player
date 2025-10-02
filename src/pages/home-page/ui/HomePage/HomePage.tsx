import { useState } from "react";
import { musicPlayerStore } from "@/app";

const HomePage = () => {
  const [music, setMusic] = useState("");

  return (
    <div>
      <input
        type="text"
        value={music}
        onChange={(e) => setMusic(e.target.value)}
      />
      <button onClick={() => musicPlayerStore.play(music)}>
        {musicPlayerStore.isPlaying ? "play" : "stop"}
      </button>
    </div>
  );
};

export default HomePage;
