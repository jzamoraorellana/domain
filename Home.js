import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <h3>
          I am a Ph.D. student and STARS Fellow at <a href="https://www.northeastern.edu/" target="_blank" rel="noopener noreferrer">Northeastern University</a> in the
          <a href="https://cos.northeastern.edu/mathematics" target="_blank" rel="noopener noreferrer"> Mathematics Department</a> since Jan. 2020.
        </h3>
        <h3>
           I graduated from  <a href="https://www.lehman.cuny.edu/" target="_blank" rel="noopener noreferrer">Lehman College, City University of New York</a> with
           a B.A. in Mathematics and a B.S. in Computer Science in Jan. 2020
        </h3>

        <h2>Current Plans</h2>
        <p>Please follow me on Twitter for more frequent
           updates (promising myself to actually use it) </p>
        <p>
          As you can imagine, the two weeks from my
          last undergraduate final to my first class as a Ph.D. student isn't optimal!
          So I decided to dedicate this Summer to pure self care and relaxation so that
          when I return to classes in September, I truly have a fresh mind and ready
          to return to leadership in SHPE and otherwise.
        </p>
        <p>
          Since I am one semester into my program, I am currently not doing research
          and will not be expected to until 2022. Updates to come!
        </p>

        <h2>WIP Projects</h2>
        <h4>Just building up habits by the time Fall comes</h4>
        <ul>
          <li>Refresing basic French fluency</li>
          <li>Learning Chinese</li>
          <li>Developing this site! Please @ me for critiques</li>
          <li>Reading philosophy and Mathematics-related media</li>
          <li>Being outside while working (safely)</li>
        </ul>
      </div>
    );
  }
}

export default Home;
