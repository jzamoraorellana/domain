import React, { Component } from "react";
import "./SHPE.css";
import logo from "./img/shpe_logo.png";

class SHPE extends Component {
  render() {
    return (
      <div>
        <img src={logo} loading="eager" class="shpe"/>
        <p/>

        <h2>The only way to move forward is together.</h2>
        <h3>
          If we embrace each other as everyday learners,
          we can slowly lift ourselves and our communities
          to greater heights with every new connection we make.
        </h3>

        <p>
          I discovered SHPE at Lehman College in my first semester
          as a transfer student in Spring 2017. Our chapter was a year old,
          jointed with the 3-year-old NSBE chapter. From the very beginning
          our chapter was committed to preparing Computer Science students
          for industry jobs.
        </p>
        <p>
          A year later, I became President of the Lehman College chapter
          and initiated our union to the SHPE NYC network. After attending
          NILA 2018, it was evermore clear to me that SHPE was my own
          opportunity to jumpstart my growth as a person, leader, and
          academic.
        </p>
        <p>
          Once I graduated I was happy to know that I would be staying within
          Region 4 at Northeastern University. While finding myself in a completely new city living on my
          own for the first time, there was a sense of familiarity given that
          much like NYC, Boston has plenty of chapters within close proximity
          of each other.
        </p>
        <p>
          While I have my plans on how I will be moving forward with SHPE,
          I will publicly explore the possibilities in a future time!
        </p>
      </div>
    );
  }
}

export default SHPE;
