import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "./Home";
import SHPE from "./SHPE";
import Background from "./Background";
import CV from "./CV";
import ERR from "./ERR";
import resume from "./doc/Resume.pdf";
import cv from "./doc/CV.pdf";
import "./jzo.css";

class JZO extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <h1>Jose Zamora Orellana</h1>
            <ul className="header">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/shpe">SHPE</NavLink></li>
              <li><NavLink to="/about">Background</NavLink></li>
              <ul>
                <li><a href={resume} target="_blank" rel="noopener noreferrer">Resume</a></li>
                <li><a href={cv} target="_blank" rel="noopener noreferrer">CV</a></li>
                <li><a href="https://www.linkedin.com/in/josezo/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/jzamoraorellana" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              </ul>
            </ul>


            <div className='content'>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/shpe" component={SHPE}/>
                <Route exact path="/about" component={Background}/>
                <Route path="*" component={ERR}/>
              </Switch>
            </div>
          </div>

          <div className="footer">
            <h4>Twitter: <a href="https://twitter.com/jzodotpy" target="_blank" rel="noopener noreferrer">jzodotpy</a> </h4>
            <h4>Email: talk at jzo dot fyi</h4>
          </div>
      </BrowserRouter>
    );
  }
}

export default JZO;
