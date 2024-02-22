import { Container } from "react-bootstrap";
import "./HomePage.scss";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import useLocalStorageMusic from "../../hooks/useLocalStorageMusic";
import { useContext, useEffect, useState } from "react";
import { AudioContext } from "../../components/ContextProvider/ContextProvider";
import { base64ToBlobAudio } from "../../utility/base64ToBlobAudio";
function HomePage() {
  const musicFromLocalStorage = useLocalStorageMusic();
  const { playlist, setTrack, currentTrackId, play, pause } = useContext(AudioContext);
const [music,setMusic]= useState(null)
useEffect(() => {
  musicFromLocalStorage

  const selectedFile = playlist[currentTrackId]?.selectedFile;

  if (selectedFile) {
    const mimeType = selectedFile.split(";")[0].split(":")[1];
    
    base64ToBlobAudio(selectedFile, mimeType)
      .then((blob) => {
        console.log('Blob:', blob);
        setMusic(blob);
      })
      .catch((err) => {
        console.error('Error:', err);
      });
  }
}, [playlist[currentTrackId]?.selectedFile]);


  const handleNext = () => {
    setTrack(currentTrackId + 1 >= playlist.length ? 0 : currentTrackId + 1);
  };

  const handlePrevious = () => {
    setTrack(currentTrackId === 0 ? playlist.length - 1 : currentTrackId - 1);
  };
  return (
    <Container>
      <div className=" home_page d-flex flex-column flex-md-row justify-content-center align-items-center gap-5">
        <MusicPlayer
          image={
            "https://res.cloudinary.com/dczou8g32/image/upload/v1708529133/audio%20player/op3lkxi7c8hnnylt6qvf.jpg"
          }
          width="300"
          hight="300"
          musicName={playlist[currentTrackId]?.musicName}
          artistName={playlist[currentTrackId]?.artistName}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          src={music}
        />
      </div>
    </Container>
  );
}

export default HomePage;
