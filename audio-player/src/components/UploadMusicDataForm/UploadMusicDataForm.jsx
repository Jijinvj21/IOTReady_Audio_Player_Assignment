import { Spinner } from "react-bootstrap";
import "./UploadMusicDataForm.scss";

function UploadMusicDataForm({
  handleSubmit,
  musicName,
  setMusicName,
  artistName,
  setArtistName,
  loader
}) {
  return (
    <div className="upload_music_data_form_container  ">
      <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          <input
            type="text"
            id="musicName"
            value={musicName}
            onChange={(e) => setMusicName(e.target.value)}
            required
            placeholder="Music Name"
          />
          <input
            type="text"
            id="artistName"
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)}
            required
            placeholder="Artist Name"
          />
        <button type="submit">{loader?<Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>:"Add Music"}</button>
      </form>
    </div>
  );
}

export default UploadMusicDataForm;
