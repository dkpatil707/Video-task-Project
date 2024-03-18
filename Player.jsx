import { useRef, useState } from "react";



const Player = (props) => {

  let [play, setPlay] = useState();
  console.log(props);

  let {
    data: { state,title, vid },
  } = props;

  let videoRef = useRef();

  let PlayorPause = () => {
    videoRef.current.autoplay = true;
    setPlay(!play);

    if (play == true) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }

  };

  let playVid = () => {
    videoRef.current.autoplay= true;
    videoRef.current.play();
  };

  let pauseVid = () => {
    videoRef.current.autoplay= true;

    videoRef.current.pause();
  };

  return (
    <div >
    
      <h1>Video Player</h1>{" "}
      <video
        src={vid}
        className="leftVideo"
        ref={videoRef}
        onClick={PlayorPause}
      ></video>
      <h1>{title}</h1>

      <button onClick={playVid}>Play</button>{" "}
      <button onClick={pauseVid}>Pause</button>{" "}
    </div>
  );
};
export default Player;
