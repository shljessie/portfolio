import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class About extends Component {
    state = {  }
    currentPage ="aboutPage";
    render() { 
        return (
            <div className='About'>
            <div className='about'>
            <div className='about-content'>
            <h1 style={{color: "black" }}><Fade bottom cascade>I'm Jessie</Fade></h1>
            <Fade left cascade>
                    <p>a student <a style={{ color:"black",fontWeight:"bold", textDecoration: "none"}} href="https://www.google.com/search?gs_ssp=eJzj4tDP1TcwLDcuM2D0EkrOL8pLzclRKM3LLEstKs4sqQQAjwAKXQ&q=cornell+university&rlz=1C5CHFA_enKR920KR920&oq=cornell+&aqs=chrome.1.69i57j46j69i60l2j69i61j69i65l3.2934j0j4&sourceid=chrome&ie=UTF-8"> @Cornell </a>  studying  
                        <a style={{ color: "black" ,fontWeight:"bold" , textDecoration: "none"}} href="https://infosci.cornell.edu/undergraduate/info-sci-majors/ba-information-science-college-arts-sciences/degree-requirements-0-1"> Data Science </a> 
                         & <a style={{color: "black" ,fontWeight:"bold", textDecoration: "none"}} href="https://infosci.cornell.edu/undergraduate/info-sci-majors/ba-information-science-college-arts-sciences/degree-requirements-0-4"> Interactive Technology</a>
                    </p>
                    <p>{data.abouttext[0]} <a style={{ textDecoration: "none", color: "black", fontWeight:"bold",}} href= "https://dooboolab.com/"> @dooboolab </a></p>
                    <p>{data.abouttext[1]} <a style={{ textDecoration: "none", color: "black", fontWeight:"bold",}} href="https://cornelldata.science/">Cornell Data Science Insights Team </a> working on <a style={{ textDecoration: "none", fontWeight:"bold", color:"black"}} href="https://www.mycourseindex.com/"> MyCourseIndex.com </a> </p>
            </Fade>
            </div>
            </div>
            
        <div className='about-content'>
            <h1 style={{marginTop: "170px", fontSize: "30px", color: "black" }}><Fade bottom cascade>Few Things that Inspire Me.</Fade></h1>
            <Fade left cascade>
            <p > <a style={{fontSize: "35px", textDecoration: "italic", color:"orange"}} href="https://experiments.withgoogle.com/bagan">{data.inspirations[0]}</a> ,  <a style={{color:"seagreen", fontSize:"24px", textDecoration: "overline"}} href="https://www.gapminder.org/dollar-street/">{data.inspirations[1]} </a>, <a style={{color:"royalblue", textDecoration:"none",  fontStyle: "italic"}} href="https://www.youtube.com/watch?v=xgnxnmqnR7Y">{data.inspirations[2]} </a>, <a  style={{color:"red", textDecoration:"none", backgroundColor:"lightpink"}} href="https://www.youtube.com/watch?v=utEoRdSL1jo" >{data.inspirations[3]}</a></p>
            </Fade>
        </div>
        </div>  );
    }
}
 
export default About;