import { Container } from "react-bootstrap";
import "./HomePage.scss";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import MusicPlayList from "../../components/MusicPlayList/MusicPlayList";
function HomePage() {
  return (
    <Container>
      <div className=" home_page d-flex flex-column flex-md-row justify-content-center align-items-center gap-5">
        <MusicPlayer />
        <MusicPlayList />
      </div>
    </Container>
  );
}

export default HomePage;
