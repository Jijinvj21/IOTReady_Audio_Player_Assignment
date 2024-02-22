import { useContext, useState } from "react";
import "./MusicPlayer.scss";
import {
  FaRegCirclePause,
  IoIosArrowDropleft,
  IoIosArrowDropright,
} from "../../assets/Icons/react-Icons";
import { AudioContext } from "../ContextProvider/ContextProvider";
// eslint-disable-next-line
function MusicPlayer({ image, width, height, music_name, artist }) {
  const { playlist, setTrack, currentTrackId } = useContext(AudioContext);
  const [sliderValue, setSliderValue] = useState(0);

  const handleNext = () => {
    setTrack(currentTrackId + 1 >= playlist.length ? 0 : currentTrackId + 1);
  };

  const handlePrevious = () => {
    setTrack(currentTrackId === 0 ? playlist.length - 1 : currentTrackId - 1);
  };
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

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
        <h4 className="m-0">{playlist[currentTrackId]?.musicName}</h4>
        <p>{artist}</p>
      </div>

      <div className="Music_controller w-100 mt-4">
        <div className="d-flex justify-content-center align-items-center gap-4  ">
          <IoIosArrowDropleft size={35} onClick={handlePrevious} />
          <FaRegCirclePause size={40} />
          <IoIosArrowDropright size={35} onClick={handleNext} />
        </div>
        <div className="music_range d-flex justify-content-center align-items-center gap-2 mt-4">
          <input
            id="minmax-range"
            type="range"
            min={0}
            max={10}
            onChange={handleSliderChange}
            value={sliderValue}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 "
          />
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
