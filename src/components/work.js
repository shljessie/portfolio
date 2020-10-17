import React, { Component, useState } from 'react';

import Fade from 'react-reveal/Fade';
import Project from './project';
import data from '../yourdata';

class Work extends Component {
    state = {  }
    page = "workPage";
    render() { 
        return (
        <div className='work'>
        <div className="work-container">
        <h1 style={{marginLeft:"1em",fontSize: "65px"}} className='heading'>
        <Fade left cascade>Work.</Fade></h1>
        <div className='work-content'>
                {data.projects.map((project)=>(
                    <Project key={project.id}
                             title = {project.title}
                             service = {project.service}
                             stacks = {project.stacks}
                             imageSrc = {project.imageSrc}
                             url={project.url}
                     ></Project>
                ))}
        </div>
        </div> 
        </div> );
    }
}
 
export default Work;