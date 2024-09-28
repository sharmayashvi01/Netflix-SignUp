import React from "react";
import Section1 from "./Component/Section1/Section1";
import Section2 from "./Component/Section2/Section2";
import Section3 from "./Component/Section3/Section3";
import Section4 from "./Component/Section4/Section4";
import Section5 from "./Component/Section5/Section5";
import Faq from "./Component/Frequently_asked_question/Faq";


import "./App.scss";
import Footer from "./Component/Footer/Footer";
import { Toaster } from "react-hot-toast";


const App = () => {
  return (
    <>
    <Toaster/>
      <Section1/>  <div id="separator"/>
      <Section2/>  <div id="separator"/>
      <Section3/>  <div id="separator"/>
      <Section4/>  <div id="separator"/>
      <Section5/>  <div id="separator"/>
      <Faq/> <div id="separator"/>
      <Footer/>
    </>
  );
};
export default App;
