import React from "react";
import styled from "styled-components";

const VideoPlayerBackground = ({src, type, muted, autoPlay, loop}) => {
  return (
    <VideoPlayer>
      <Video muted={muted} autoPlay={autoPlay} loop={loop}>
        <source
          src={src}
          type={type}
        ></source>
      </Video>
    </VideoPlayer>
  );
};

const VideoPlayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
const Video = styled.video`
  min-width: 100%;
`;

export default VideoPlayerBackground;
