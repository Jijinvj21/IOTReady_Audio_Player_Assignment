import UploadMusicButton from "../../components/UploadMusicButton/UploadMusicButton";
import "./AddMusicPage.scss";
import { RiFolderUploadFill } from "../../assets/Icons/react-Icons";
import { Alert, Container } from "react-bootstrap";
import UploadMusicDataForm from "../../components/UploadMusicDataForm/UploadMusicDataForm";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AudioContext } from "../../components/ContextProvider/ContextProvider";
import useAudioUploader from "../../hooks/useAudioUploader";
import { getBase64 } from "../../utility/getBase64";
import useLocalStorageSize from "../../hooks/useLocalStorageSize";

function AddMusicPage() {
  const [musicName, setMusicName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const { setTrack } = useContext(AudioContext);
  const { uploadAudioToLocalStorage } = useAudioUploader();
  const { totalSpace, usedSpace, remainingSpace } = useLocalStorageSize();

  const handleTrackChange = (trackId) => {
    setTrack(trackId);
  };
  useEffect(() => {
    handleTrackChange(1);
  }, []);

  const handleSubmit = async (e) => {
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
    const formData = {
      musicName: musicName,
      artistName: artistName,
      selectedFile: await getBase64(selectedFile),
    };
    console.log(selectedFile);
    try {
      uploadAudioToLocalStorage(formData);
      console.log("Upload successful");
      setMusicName("");
      setArtistName("");
      setError("");
      setSelectedFile(null);
      setLoader(false);
    } catch (error) {
      console.error("Error occurred while uploading:", error.message);
      // Handle the error as needed
      setLoader(false);
    }

    // https://staxmanade.com/2015/11/how-to-base64-and-save-a-binary-audio-file-to-local-storage-and-play-it-back-in-the-browser/
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
                  START UPLOADING YOUR SONG RIGHT NOW
                </h1>
                <div className="d-flex flex-column text-center gap-1 fs-5">
                  <p>Total space: {totalSpace} Mp</p>
                  <p>Used space: {usedSpace} Mp</p>
                  <p>Remaining space: {remainingSpace} Mp</p>
                </div>
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
