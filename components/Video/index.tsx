"use client";
import React, { useRef, useState, useEffect } from "react";
import Icon from "../Icon";
import styles from "./video.module.scss";

const VideoPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current!.pause();
    } else {
      videoRef.current!.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div
      className={styles["video__container"]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        className={styles["video"]}
        poster={
          "https://wayforwarddevbucket.s3.us-west-1.amazonaws.com/Images/video-poster-img.jpg"
        }
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={handleVideoEnded}
      >
        <source
          type="video/mp4"
          src="https://wayforwarddevbucket.s3.us-west-1.amazonaws.com/Videos/Bose+Adamson+-+I+will+not+be+moved.mp4"
        />
        <track
          src="captions_en.vtt"
          kind="captions"
          srcLang="en"
          label="english_captions"
        />
        Your browser does not support the video tag.
      </video>
      {(isHovered || !isPlaying) && (
        <div className={styles["video__overlay"]}>
          <div className={styles["video__overlay-content-container"]}>
            <h1 className={styles["video__overlay-content-heading"]}>
              <span> Experience Exceptional Worship</span> and Life-Impacting
              Word at Our Church in Concord
            </h1>
            <button
              className={styles["video__overlay-play-button"]}
              type="button"
              onClick={togglePlay}
              aria-label="Video button"
            >
              <Icon icon={isPlaying ? "pause" : "play"} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
