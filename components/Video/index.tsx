"use client";
import React, { useRef, useState } from "react";

import Icon from "../Icon";

import styles from "./video.module.scss";

const VideoPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current!.pause();
    } else {
      videoRef.current!.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles["video__container"]}>
      <video
        ref={videoRef}
        className={styles["video"]}
        poster={"/images/video-poster.jpg"}
      >
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className={styles["video__overlay"]}>
        <div className={styles["video__overlay-content-container"]}>
          <h1 className={styles["video__overlay-content-heading"]}>
            <span> Experience Exceptional Worship</span> and Life-Impacting Word
            at Our Church in Concord
          </h1>
          <button
            className={styles["video__overlay-play-button"]}
            type="button"
            onClick={togglePlay}
          >
            <Icon icon={isPlaying ? "pause" : "play"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
