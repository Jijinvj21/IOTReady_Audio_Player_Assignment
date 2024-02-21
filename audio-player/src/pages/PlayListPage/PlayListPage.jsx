import { Container } from "react-bootstrap";
import "./PlayListPage.scss";
import AudioCard from "../../components/AudioCard/AudioCard";
function playListPage() {
  return (
    <Container>
      <div className="playlist_page ">
        <div className="music_list_section  mx-auto p-3 d-flex gap-2">
          <h1>PLAYLIST</h1>
          
          <AudioCard
            image={
              "https://res.cloudinary.com/dczou8g32/image/upload/v1708529133/audio%20player/op3lkxi7c8hnnylt6qvf.jpg"
            }
            width="50"
            hight="50"
            playing={true}
          />
          <AudioCard
            image={
              "https://res.cloudinary.com/dczou8g32/image/upload/v1708529133/audio%20player/op3lkxi7c8hnnylt6qvf.jpg"
            }
            width="50"
            hight="50"
          />
          <AudioCard
            image={
              "https://res.cloudinary.com/dczou8g32/image/upload/v1708529133/audio%20player/op3lkxi7c8hnnylt6qvf.jpg"
            }
            width="50"
            hight="50"
          />
        </div>
      </div>
    </Container>
  );
}

export default playListPage;
