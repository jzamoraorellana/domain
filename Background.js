import React, { Component } from "react";
import "./Background.css";
import ib from "./img/ib_logo.png";
import java from "./img/java_logo.png";
import py from "./img/python_logo.png";
import mat from "./img/matlab_logo.png";
import leh from "./img/lehman_logo.png";
import neu from "./img/neu_logo.png";
import swift from "./img/swift_logo.png";
import fordham from "./img/fordham_logo.png";
import cpp from "./img/cpp_logo.png";

class Background extends Component {
  render() {
    return (
      <div>
        <h2>About Me</h2>
          <p>
            I am a first-generation Ecuadorian-American with immigrant parents.
            Born in the Bronx and raised in Long Island,  I knew from an early
            age that I liked Mathematics. Though, it wasn't until
            High School that I discovered Computer Science through my
            school's FIRST Robotics Club.
            Going into Junior year I found myself enrolled at the International
            Baccalaureate Programme, where I was one of 19 students in my class
            to graduate with the diploma. This period of my life was the first
            time taking my education into my hands and learning how to learn through
            my Theory of Knowledge class, which stuck with me as I entered Fordham
            University.
          </p>
          <p>
            I was immediately connected with CSTEP, where I had the opportunity to
            academically support High School students through the STEP Saturdays program.
            In 2017, I transferred to Lehman College where I sent out
            my first scholarship/fellowship applications. As a result, I am an alumni of
            LSAMP, CUNY Pipeline, and Tech Talent Pipeline. With both academic and industry
            experience I had a choice between which career to pursue. Evidently, I committed to
            Northeastern University for their Mathematics Ph.D. program.
          </p>

          <h2>Programming Experience</h2>
            <div class="bg">
              <img src={cpp} loading="eager"/>
              <img src={java} loading="eager"/>
              <img src={py} loading="eager"/>
              <img src={mat} loading="eager"/>
              <img src={swift} loading="eager"/>
            </div>

          <h2>Academic History</h2>
            <div class="abg">
              <img src={ib} loading="eager"/>
              <img src={fordham} loading="eager"/>
              <img src={leh} loading="eager"/>
              <img src={neu} loading="eager"/>
            </div>
      </div>
    );
  }
}

export default Background;
