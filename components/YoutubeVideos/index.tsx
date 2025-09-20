import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

import LoadingCard from "../LoadingCard";

import styles from "./video.module.scss";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
}

const YouTubeVideos: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [videos, setVideos] = useState<Video[]>([]);
  const [liveVideoId, setLiveVideoId] = useState<string | null>(null);
  const [videoIds, setVideoIds] = useState<string[]>([]);

  const getUploadsPlaylistId = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
      );

      return response.data.items[0].contentDetails.relatedPlaylists.uploads;
    } catch (error) {
      console.error("Error fetching uploads playlist ID:", error);
      return null;
    }
  };

  const fetchVideos = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${
          process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
        }&channelId=${
          process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID
        }&part=snippet,id&type=video&order=date&maxResults=6`
      );
      const data = await response.json();
      if (data.items) {
        const videoIds = data.items
          .filter((item: any) => item.id.videoId)
          .map((item: any) => item.id.videoId);
        setVideoIds(videoIds);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching YouTube videos:", error);
    }
  };

  const checkLiveStream = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID}&type=video&eventType=live&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
      );

      if (response.data.items.length > 0) {
        setLiveVideoId(response.data.items[0].id.videoId);
      } else {
        setLiveVideoId(null);
      }
    } catch (error) {
      console.error("Error fetching live stream:", error);
    }
  };

  //   useEffect(() => {
  //     (async () => {
  //       setLoading(true);
  //       const playlistId = await getUploadsPlaylistId();
  //       if (playlistId) {
  //         fetchLatestVideos();
  //       }
  //       setLoading(false);
  //     })();
  //   }, []);

  useEffect(() => {
    checkLiveStream();

    fetchVideos();
  }, []);

  return (
    <section className={styles["video__wrapper"]}>
      <div className={styles["video__heading-wrapper"]}>
        <div className={styles["video__heading-container"]}>
          <p className={styles["video__heading"]}>
            Catch up on our <span>Recent Sermons</span>
          </p>
          {liveVideoId && (
            <Link
              href={`https://www.youtube.com/watch?v=${liveVideoId}`}
              className={styles["video__heading-button"]}
            >
              🔴Watch Live
            </Link>
          )}
        </div>
        <p className={styles["video__heading-description"]}>
          Enjoy our library of sermons, each specially inspired by the Holy
          Spirit for your edification and benefit. Have a drink from the well of
          living water that is God’s Word and be truly refreshed.
        </p>
      </div>

      {liveVideoId && (
        <div className="live-section">
          <a
            href={`https://www.youtube.com/watch?v=${liveVideoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="live-button"
          >
            📺 Watch Live Now
          </a>
        </div>
      )}

      {/* <div className={styles["video__player-list"]}>
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <LoadingCard key={index} />
            ))
          : videos.map((video) => (
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                key={video.id}
                className={styles["video__player-card"]}
              >
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  height={200}
                  width={350}
                  style={{ borderRadius: "8px" }}
                />
                <div className={styles["video__player-details-wrapper"]}>
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    height={40}
                    width={30}
                    style={{ borderRadius: "50%", flexShrink: 0 }}
                  />
                  <p className={styles["video__player-title"]}>{video.title}</p>
                </div>
              </a>
            ))}
      </div> */}

      <div className={styles["video__player-list"]}>
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <LoadingCard key={index} />
            ))
          : videoIds.map((videoId, index) => (
              <div
                key={index}
                className={styles["video__player-iframe-container"]}
              >
                <iframe
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles["video__player-iframe"]}
                ></iframe>
              </div>
            ))}
      </div>
    </section>
  );
};

export default YouTubeVideos;
