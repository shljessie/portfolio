import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';

class Project extends Component {
    state = {  }
    render() { 
        return ( 
        <Fade bottom>
        <div className='project'>
        <a href={this.props.url}>
            <img src={this.props.imageSrc} alt={this.props.title}></img>
            </a>
            <h1 style={{fontSize: "25px"}}>{this.props.title}</h1>
            <h3 style={{fontSize: "15px"}}>{this.props.service}</h3>
        </div> 
            </Fade>);
    }
}
 
export default Project;