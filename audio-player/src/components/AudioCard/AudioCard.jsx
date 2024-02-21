import "./AudioCard.scss";
function AudioCard({ image, width, hight, playing }) {
  return (
    <div className="audio_card p-2 d-flex  w-100">
      <div className="img_name d-flex gap-2">
        <img
          src={image}
          alt="music"
          width={width}
          height={hight}
          className="rounded-2"
        />
        <div className="d-flex flex-column">
          <h5>fkhflhflh</h5>
          <p>gjjh</p>
        </div>
      </div>
      <div className="ms-auto my-auto text-end">

      <p>5:00</p>
      {playing&&
      <p> NOW PLAYING</p>
}
      </div>

    </div>
  );
}

export default AudioCard;
