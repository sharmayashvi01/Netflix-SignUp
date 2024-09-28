import React from "react";
import "./Section1.scss";
import { toast } from 'react-hot-toast';
import Logo from "../../assets/images/logo.svg";

const signInHandler = (error) => {
  try{
  toast.success('Signed In');
  console.log("signed in")
}catch(error) {
  toast.error("sign in failed");
}}
const Section1 = () => {
  return (
    <>
      <div className="section1">
        <div className="background_image_box">
          <nav className="navbar">
            <div className="logo_box">
              <span>
                <img src={Logo} className="logo" alt="Netflix_logo" />
              </span>
            </div>
            <div className="side_btn">
              <select className="lang_btn">
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>

              <button onClick={signInHandler}className="sign_in_btn">Sign In</button>
            </div>
          </nav>
        </div>
        <div className="text_box">
          <h1>Unlimited movies, TV shows and more</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <h3>
            Ready to watch? Enter your email or mobile number to create or
            restart your membership.
          </h3>
          <form className="email_signup" placeholder="Email or mobile number">
            <input
              type="email"
              placeholder="Email or phone Number"
              className="transparent_input"
            />
            <button type="submit">Get Started </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Section1;
