import { AudioContext } from "../ContextProvider/ContextProvider";
import "./AudioCard.scss";
import { useContext, useEffect, useState, useRef } from "react";

function AudioCard({
  image,
  width,
  height,
  track_id,
  handleTrackChange,
  track,
  artist,
  selectedFile,
}) {
  const { currentTrackId } = useContext(AudioContext);

  return (
    <div
      className="audio_card p-2 d-flex w-100"
      onClick={() => handleTrackChange(track_id)}
    >
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
        {track_id == currentTrackId && <p> NOW PLAYING </p>}
      </div>
    </div>
  );
}

export default AudioCard;
