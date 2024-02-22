// import { useState } from "react";
// import "./MusicPlayer.scss";
// import {
//   FaRegCirclePause,
//   IoIosArrowDropleft,
//   IoIosArrowDropright,
// } from "../../assets/Icons/react-Icons";
// // eslint-disable-next-line
// function MusicPlayer({ image, width, height, music_name, artist }) {
//   const [sliderValue, setSliderValue] = useState(0);

//   const handleSliderChange = (event) => {
//     setSliderValue(event.target.value);
//   };

//   return (
//     <div className="player_container_section py-5">
//       <div className="image_container ">
//         <img
//           src={image}
//           alt="image"
//           width={width}
//           height={height} // corrected typo here
//           className="rounded-4"
//         />
//       </div>
//       <div className="music_data d-flex flex-column mt-3">
//         <h4 className="m-0">{music_name}</h4>
//         <p>{artist}</p>
//       </div>

//       <div className="Music_controller w-100 mt-4">
//         <div className="d-flex justify-content-center align-items-center gap-4  ">
//           <IoIosArrowDropleft size={35} />
//           <FaRegCirclePause size={40} />
//           <IoIosArrowDropright size={35} />
//         </div>
//         <div className="music_range d-flex justify-content-center align-items-center gap-2 mt-4">
//           <p>0:00</p>
//           <input
//             id="minmax-range"
//             type="range"
//             min={0}
//             max={10}
//             onChange={handleSliderChange}
//             value={sliderValue}
//             className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 "
//           />
//           <p>5:00</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MusicPlayer;

import React, { useState } from 'react';

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);

  let audioRef = React.createRef();

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    audioRef.current.volume = e.target.value;
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src="https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav"
        onTimeUpdate={handleTimeUpdate}
      ></audio>
      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={(e) => audioRef.current.currentTime = e.target.value}
      />
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      />
    </div>
  );
}

export default AudioPlayer;

