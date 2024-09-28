import Image from "../../assets/images/children.png";
import "./Section5.scss";

const Section5 = () => {
  return (
    <>
      <div className="Section5">
        <div className="center">
          <div className="img_box">
            <img
              src={Image}
              alt="
        children.jpg"
            />
          </div>
          <div className="text_box">
            <h1> Create profiles for kids</h1>
            <p>
              Send children on adventures with their favourite characters in a
              space made for them—free with your membership.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Section5;