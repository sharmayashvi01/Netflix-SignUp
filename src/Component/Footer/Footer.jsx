import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="question">Questions? Call 000-800-919-1694</div>
        <div className="footer">
          <a href="faq">FAQ</a>
          <a href="Investor Relations">Investor Relations</a>
          <a href="Privacy">Privacy</a>
          <a href="Speed Test">Speed Test</a>
          <a href="Help Center">Help Center</a>
          <a href="Jobs">Jobs</a>
          <a href="Cookie Preferences">Cookie Preferences</a>
          <a href="Legal Notices">Legal Notices</a>
          <a href="Account">Account</a>
          <a href="Ways to watch">Ways to Watch</a>
          <a href="Corporate Information">Corporate Information</a>
          <a href="Only on Netflix">Only on Netflix</a>
          <a href="Media Centre">Media Centre</a>
          <a href="Terms of Use">Terms of Use</a>
          <a href="Contact Us">Contact Us</a>
        </div>
        <div className="selectBox">
          <select className="lang_btn">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>
      </footer>
    </>
  );
};
export default Footer;
