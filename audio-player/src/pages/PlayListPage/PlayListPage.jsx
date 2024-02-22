import { Container } from "react-bootstrap";
import "./PlayListPage.scss";
import AudioCard from "../../components/AudioCard/AudioCard";
import { useContext, useEffect } from "react";
import { AudioContext } from "../../components/ContextProvider/ContextProvider";
import useLocalStorageMusic from "../../hooks/useLocalStorageMusic";

function PlayListPage() {
  const { playlist, setTrack,  } = useContext(AudioContext);
  const handleTrackChange = (track_id) => {
    setTrack(track_id); 
  };
  const musicFromLocalStorage = useLocalStorageMusic();

  useEffect(() => {
    musicFromLocalStorage;
  }, []);
  return (
    <Container>
      <div className="playlist_page ">
        <div className="music_list_section  mx-auto p-3 d-flex gap-2">
          <h1>PLAYLIST</h1>
          {playlist.map((track, index) => (
            <AudioCard
              key={index}
              handleTrackChange={handleTrackChange}
              image={
                "https://res.cloudinary.com/dczou8g32/image/upload/v1708529133/audio%20player/op3lkxi7c8hnnylt6qvf.jpg"
              }
              width="50"
              height="50" // Corrected the prop name here
              track_id={index}
              track={track.musicName}
              artist={track.artistName}
              selectedFile={track.selectedFile}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default PlayListPage;
