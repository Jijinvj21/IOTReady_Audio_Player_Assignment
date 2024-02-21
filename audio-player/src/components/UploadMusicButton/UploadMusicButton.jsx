import "./UploadMusicButton.scss";
function UploadMusicButton({ setSelectedFile  }) {
  return (
    <div className="upload_music_button">
      <label className="custom-upload">
        <input
          type="file"
          name="upload_file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
        Select Audio File
      </label>
    </div>
  );
}

export default UploadMusicButton;
