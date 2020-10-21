import React, { Component } from "react";
import {socialMedia} from '../Name';
import './sm.css'

class Sm extends Component {
    render() {
      return (
        <div className="sm">
            {/* <a className="sm-item" href={socialMedia.facebook}><i class="fab fa-facebook-square fa-3x"></i></a>
            <a className="sm-item" href={socialMedia.twitter}><i class="fab fa-twitter fa-3x"></i></a> */}
            <a className="sm-item" href={socialMedia.linkedin}><i className="fab fa-linkedin fa-3x"></i></a>
            <a className="sm-item" href={socialMedia.xing}><i className="fab fa-xing fa-3x"></i></a>
            <a className="sm-item" href={socialMedia.devto}><i className="fab fa-dev fa-3x"></i></a>
            <a className="sm-item" href={socialMedia.github}><i className="fab fa-github fa-3x"></i></a>
            <a className="sm-item" href={socialMedia.gitlab}><i className="fab fa-gitlab fa-3x"></i></a>
            <a className="sm-item" href={socialMedia.mailto}><i className="far fa-envelope fa-3x"></i></a>
        </div>
      );
    }
  }
  
  export default Sm;