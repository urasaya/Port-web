import React, { Component } from "react";
import profilepic from "../img/profile.jpg";

class About extends Component {
  render() {
    return (
      <div className="condiv about">
        <h1 className="subtopic">This is Urasaya Nakpram</h1>
        <img src={profilepic} alt="profile" className="profilepic" />
        <h3>
          Hi, I'm Aom. I was graduated from Faculty of Science and Technology
          Bachelors in Electronics Physics. My passion about programming was
          started 3 years ago. I'm not a kind of the best programmer but am a
          hard-working one. Most of my web development knowledge was from self-learning
          and experience. I really like technology, so I am willing to learn what comes along with it.
        </h3>
      </div>
    );
  }
}

export default About;
