import React from 'react'
import {crystalVid, giphyVid, iglooVid, techVid} from "./videoimport"



export default ({ Video }) => {
  const videos = [crystalVid, giphyVid, iglooVid, techVid, iglooVid]
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0
      }}
    >
      <iframe
        style={{
          position: "absolute",
                  top: 25,
                  left: 110,
                  width: "75%",
                  height: "75%"
        }}
        src={videos[index]}
        frameBorder="0"
      />
    </div>
  );
};


