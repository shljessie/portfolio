import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Contact extends Component {
    state = {  }
    currentPage ="contactPage";
    render() { 
        return (  
        <div className="contact">
        <h1 style= {{fontWeight: "lighter"}}>
            <Fade bottom cascade> Contact.</Fade>
        </h1>
        <Fade bottom>
        <div className='contact-content'>
                <ul style={{top:"10em", width: 'fit-content'}}>
                    {data.social.map((link,index)=>(
                        <li style={{fontSize: "30px", marginBottom:"140px", fontWeight: "lighter"}}key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}   
                    <li style={{fontSize: "30px", marginBottom:"140px", fontWeight: "lighter"}}><a href={`mailto:${data.contactEmail}`}>{data.contactEmail}</a></li>
                </ul>
        </div>
        </Fade>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        </div>);
    }
}
 
export default Contact;