import  { createContext, useState } from 'react';

const AudioContext = createContext();

const AudioProvider = ({ children }) => {
    const [currentTrackId, setCurrentTrackId] = useState(1);
    const [playlist, setPlaylist] = useState([
        { id: 1, name: "Track 1", artist: "Artist 1", duration: "3:45" },
        { id: 2, name: "Track 2", artist: "Artist 2", duration: "4:20" },
        { id: 3, name: "Track 3", artist: "Artist 3", duration: "2:55" },

      ]);

    const setTrack = (trackId) => {
        setCurrentTrackId(trackId);
    };

    return (
        <AudioContext.Provider value={{ currentTrackId, setTrack, playlist, setPlaylist }}>
            {children}
        </AudioContext.Provider>
    );
};

export { AudioContext, AudioProvider };  // Correct export syntax
