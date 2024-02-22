import { useEffect, useRef, useState } from "react";
import "./MusicPlayer.scss";
import {
  FaRegCirclePause,
  IoIosArrowDropleft,
  IoIosArrowDropright,
  FaRegPlayCircle,
} from "../../assets/Icons/react-Icons";

function MusicPlayer({
  image,
  width,
  height,
  src,
  handlePrevious,
  handleNext,
  musicName,
  artistName,
}) {
  const audioRef = useRef(new Audio(src));

  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlayback = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  useEffect(() => {
    if (src) {
      audioRef.current.src = URL.createObjectURL(src);
      audioRef.current.load();
    }
  }, [src]);

  return (
    <div className="player_container_section py-5">
      <div className="image_container ">
        <img
          src={image}
          alt="image"
          width={width}
          height={height}
          className="rounded-4"
        />
      </div>
      <div className="music_data d-flex flex-column mt-3">
        <h4 className="m-0">{musicName}</h4>
        <p>{artistName}</p>
      </div>

      <div className="Music_controller w-100 mt-4">
        <div className="d-flex justify-content-center align-items-center gap-4  ">
          <IoIosArrowDropleft
            size={35}
            onClick={() => {
              handlePrevious();
              setIsPlaying(false);
            }}
          />

          <button onClick={togglePlayback}>
            {" "}
            {isPlaying && duration !== currentTime ? (
              <FaRegCirclePause size={40} />
            ) : (
              <FaRegPlayCircle size={40} />
            )}
          </button>
          <IoIosArrowDropright
            size={35}
            onClick={() => {
              handleNext();
              setIsPlaying(false);
            }}
          />
        </div>
        <div className="music_range d-flex justify-content-center align-items-center gap-2 mt-4">
          <p>{formatTime(currentTime)}</p>
          <input
            id="minmax-range"
            type="range"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 "
          />
          <p>{formatTime(duration)}</p>

          <audio
            ref={audioRef}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          >
            <source src={src} />
          </audio>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
