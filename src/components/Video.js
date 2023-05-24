import "./Video.css"
import React from "react";
function selectedVideo(videoIdObj, onVideoSelected) {
  onVideoSelected(videoIdObj.videoId);
}

function getCss(imageUrl) {
  const _styles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "180px",
    position: "relative"
  };
  return _styles;
}
function ConstructedVideoTitles(videosData, onVideoSelected) {
  return videosData.map(({ snippet, id }, index) => {
    return (
      <div
        className="video"
        key={index}
        onClick={() => selectedVideo(id, onVideoSelected)}
      >
        <div style={getCss(snippet.thumbnails.high.url)} key={index}></div>
        <p className="title">{snippet.title}</p>
      </div>
    );
  });
}

const Video = ({ data, onVideoSelected }) => {
  return <>{ConstructedVideoTitles(data, onVideoSelected)}</>;
};

export default Video;