import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import cv from "./doc/CV.pdf";

class CV extends Component {
	render() {
		return(
			<Redirect to={process.env.PUBLIC_URL + '/static/media/Resume.02be70d5.pdf'}/>
		);
	}
}
export default CV;
