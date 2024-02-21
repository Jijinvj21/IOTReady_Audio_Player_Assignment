import UploadMusicButton from "../../components/UploadMusicButton/UploadMusicButton";
import "./AddMusicPage.scss";
import { RiFolderUploadFill } from "../../assets/Icons/react-Icons";
import { Alert, Container } from "react-bootstrap";
import UploadMusicDataForm from "../../components/UploadMusicDataForm/UploadMusicDataForm";
import { useEffect, useState } from "react";

function AddMusicPage() {
  const [musicName, setMusicName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate music name
    if (!/^[a-zA-Z\s]+$/.test(musicName.trim())) {
      setError("Music name should contain only letters and spaces");
      return;
    }

    // Validate artist name
    if (!/^[a-zA-Z\s]+$/.test(artistName.trim())) {
      setError("Artist name should contain only letters and spaces");
      return;
    }

    // Validate selected file
    if (!selectedFile) {
      setError("Please select a file");
      return;
    }

    // Check file extension to ensure it's a valid music file
    const allowedExtensions = ["mp3", "wav", "m4a"]; // Add more if needed
    const fileExtension = selectedFile.name.split(".").pop().toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
      setError(
        "Invalid file format. Please select a valid music file (mp3 or wav)"
      );
      return;
    }

    // If all validations pass, proceed with form submission
    setLoader(true);
    console.log("Music Name:", musicName);
    console.log("Artist Name:", artistName);
    console.log("Selected File:", selectedFile);

    // Reset fields and error state
    // setMusicName("");
    // setArtistName("");
    // setSelectedFile(null);
    // setError("");
  };

  return (
    <Container>
      <div className="upload_image_page">
        <div className="upload_image_section py-5 mx-auto ">
          <UploadMusicButton setSelectedFile={setSelectedFile} />
          <div className="p-3 d-flex flex-column align-items-center gap-2">
            {selectedFile ? (
              <UploadMusicDataForm
                handleSubmit={handleSubmit}
                musicName={musicName}
                setMusicName={setMusicName}
                artistName={artistName}
                setArtistName={setArtistName}
                loader={loader}
              />
            ) : (
              <>
                <RiFolderUploadFill size={60} />
                <h1 className="text-center">
                  START UPLOADING YOUR SONGS RIGHT HEAD
                </h1>
              </>
            )}
          </div>

          {error && (
            <Alert className="m-2" variant="danger">
              {error}
            </Alert>
          )}
        </div>
      </div>
    </Container>
  );
}

export default AddMusicPage;
