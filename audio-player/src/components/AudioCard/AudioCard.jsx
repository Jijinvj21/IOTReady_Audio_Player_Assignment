import { AudioContext } from "../ContextProvider/ContextProvider";
import "./AudioCard.scss";
import { useContext } from "react";

function AudioCard({ image, width, height, track_id, handleTrackChange, track, artist }) { // Added handleTrackChange as a prop
    const {  currentTrackId } = useContext(AudioContext);

    return (
        <div className="audio_card p-2 d-flex w-100" onClick={() => handleTrackChange(track_id)}> {/* Using handleTrackChange prop */}
            <div className="img_name d-flex gap-2">
                <img
                    src={image}
                    alt="music"
                    width={width}
                    height={height}
                    className="rounded-2"
                />
                <div className="d-flex flex-column">
                    <h5>{track}</h5>
                    <p>{artist}</p>
                </div>
            </div>
            <div className="ms-auto my-auto text-end">
                <p>5:00</p>
                {track_id == currentTrackId && <p> NOW PLAYING </p>}
            </div>
        </div>
    );
}

export default AudioCard;
