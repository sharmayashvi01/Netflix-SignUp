import "./Section3.scss";
import Image from "../../assets/images/mobile.jpg";
import Icon from "../../assets/images/icon.png";
import GIF from "../../assets/images/download_icon.gif";

const Section3 = () => {
  return (
    <>
      <div className="Section3">
        <div className="center">
          <div className="viewbox">
            <div className="vdo_box">
              <div className="img_box">
                <img src={Image} />
                <div className="strange_things">
                  <div className="strange_things_box">
                    <div className="icon">
                      <img src={Icon} alt="icon" />
                    </div>
                    <div className="txt">
                      <h1>Strange things</h1>
                      <p>Downloading...</p>
                    </div>
                    <div className="gif">
                      <img src={GIF} alt="gif" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text_box">
              <h1>Download your shows to watch offline</h1>
              <p>
                Save your favourites easily and always have something to watch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Section3;
