import { useState } from "react";
import "./MusicPlayer.scss";
import {
  FaRegCirclePause,
  IoIosArrowDropleft,
  IoIosArrowDropright,
} from "../../assets/Icons/react-Icons";
// eslint-disable-next-line
function MusicPlayer({ image, width, height, music_name, artist }) {
  const [sliderValue, setSliderValue] = useState(0);

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
          height={height} // corrected typo here
          className="rounded-4"
        />
      </div>
      <div className="music_data d-flex flex-column mt-3">
        <h4 className="m-0">{music_name}</h4>
        <p>{artist}</p>
      </div>

      <div className="Music_controller w-100 mt-4">
        <div className="d-flex justify-content-center align-items-center gap-4  ">
          <IoIosArrowDropleft size={35} />
          <FaRegCirclePause size={40} />
          <IoIosArrowDropright size={35} />
        </div>
        <div className="music_range d-flex justify-content-center align-items-center gap-2 mt-4">
          <p>0:00</p>
          <input
            id="minmax-range"
            type="range"
            min={0}
            max={10}
            onChange={handleSliderChange}
            value={sliderValue}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 "
          />
          <p>5:00</p>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
