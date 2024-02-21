import { Container } from "react-bootstrap";
import "./HomePage.scss";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
function HomePage() {
  return (
    <Container>
      <div className=" home_page d-flex flex-column flex-md-row justify-content-center align-items-center gap-5">
        <MusicPlayer
          image={
            "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
