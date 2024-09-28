import "./Section4.scss";
import Image from "../../assets/images/apple_tv.png";
import Video from "../../assets/videos/video2.mp4";
const Section4 = () => {
  return (
    <>
      <div className="Section4">
        <div className="center">
          <div className="text_box">
            <div className="txt">
              <h1> Watch Everywhere</h1>
              <p>
                Stream unlimited movies and TV shows on your phone, tablet, and
                TV.
              </p>
            </div>
          </div>
          <div className="vdo_box">
            <div className="image">
              <img src={Image} alt="Apple TV" />
              <div className="vdo">
                <video src={Video} autoPlay muted loop/>
                {/* i m vdo */}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};
export default Section4;
