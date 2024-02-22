import { Container } from "react-bootstrap";
import "./HomePage.scss";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import useLocalStorageMusic from "../../hooks/useLocalStorageMusic";
import { useEffect } from "react";
function HomePage() {
  const musicFromLocalStorage = useLocalStorageMusic();

  useEffect(() => {
    musicFromLocalStorage;
  }, []);

  return (
    <Container>
      <div className=" home_page d-flex flex-column flex-md-row justify-content-center align-items-center gap-5">
        <MusicPlayer
          image={
            "https://res.cloudinary.com/dczou8g32/image/upload/v1708529133/audio%20player/op3lkxi7c8hnnylt6qvf.jpg"
          }
          width="300"
          hight="300"
          music_name={"GROWTH/DECAY"}
          artist={"A. R. Rahman"}
        />
      </div>
    </Container>
  );
}

export default HomePage;
