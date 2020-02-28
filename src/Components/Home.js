import React from "react";
import "../CSS/Home.css";
import Myself from "../Photos/Myself.jpg";
import Fail from "../Photos/Fail.jpg";
import gaming from "../Photos/gaming.jpg";

const Home = () => {
  return (
    <div className="main-container">
      <div className="container1">
        <div className="text1">
          <p> Hi I'm Ross</p>
          <p>
            I am currently 19 years old living in Chester and I am an aspiring
            junior developer, I have developed my skills along side code nation,
            I first had an interest in their course when a family member showed
            me a ad in the local newspaper. I attended a 2019 develope course
            which lasted a total of three weeks long where I learn the basics of
            web design and app development, I enjoyed my time there and decided
            that I would like to attend the master course starting in 2020 which
            I am currently 7 weeks through.
          </p>
        </div>
        <img className="picofme" src={Myself} />
      </div>
      <div className="container2">
        <img className="fail" src={Fail} />
        <div className="text2">
          <p>
            Since a young age I've always had an interest in how the internet
            works aswell as and what's behind the development of webpages
            online. I had a small intro to it during my gcse doing computer
            science but it wasnt the best learning experience so I failed to
            follow it at the time.
          </p>
        </div>
      </div>
      <div className="container3">
        <div className="text3">
          <p>
            In my spare time im a huge gamer, I play plenty of different games
            and I'm also really competitive, ontop of that I'm also a huge
            animal lover, I own a dog called Duke he's a Staffordshire Bull
            Terrier he's one of the highlights to my day. I also enjoy listening
            to music alot my prefered genre of music is towards the metal end of
            the spectrum but I listen to just about anything.
          </p>
        </div>
        <img className="gaming" src={gaming} />
      </div>
    </div>
  );
};

export default Home;
