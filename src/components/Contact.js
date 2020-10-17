import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Contact extends Component {
    state = {  }
    currentPage ="contactPage";
    render() { 
        return (  
        <div className='contact'>
        <div>
        <h1>
            <Fade bottom cascade> Contact.</Fade>
        </h1>
        <Fade bottom>
        <div className='contact-content'>
                <ul style={{top:"10em"}}>
                    {data.social.map((link,index)=>(
                        <li style={{fontSize: "30px", marginBottom:"140px"}}key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}   
                    <li style={{fontSize: "30px", marginBottom:"140px"}}><a href={`mailto:${data.contactEmail}`}>{data.contactEmail}</a></li>
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

        </div>
        </div>);
    }
}
 
export default Contact;