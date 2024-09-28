import React from "react";
import "./Section2.scss";
import Image from "../../assets/images/tv.png";
import Video from "../../assets/videos/tv_video.mp4";

const Section2 = () => {
  return (
    <>
      <div className="section2">
        <div className="center">
          <div className="text_box">
            <div className="text">
              <div className="enjoy_your_tv">
                <h1> Enjoy on your TV</h1>
              </div>
              <div className="watch_on">
                <p>
                  Watch on smart TVs, PlayStation, XBox, Chromecast, Apple tv,
                  Blu-ray platers and more.
                </p>
              </div>
            </div>
          </div>
           <div className="vdo_box">
            <img src={Image} alt="tv image" className="image" />
            <div className="vdo">
              <video src={Video} autoPlay muted loop controls className="video" />
            </div>
          </div> 
        </div>
      </div>
    </>
  );
};
export default Section2;
