import { createContext, useState } from "react";

const AudioContext = createContext();

const AudioProvider = ({ children }) => {
  const [currentTrackId, setCurrentTrackId] = useState(0);
  const [playlist, setPlaylist] = useState([]);

  const setTrack = (trackId) => {
    setCurrentTrackId(trackId);
  };

  return (
    <AudioContext.Provider
      value={{ currentTrackId, setTrack, playlist, setPlaylist }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export { AudioContext, AudioProvider }; // Correct export syntax
