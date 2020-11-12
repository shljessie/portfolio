import React, { Component, useState } from 'react';

import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import styled from 'styled-components';

const TextHoverUnderStanding = styled.text`

    :hover{
        background: red;
        cursor: pointer;
    }
`;

const TextHoverInteraction= styled.text`
    :hover {
        background:blue;
        cursor: pointer;
    }
`;

class Header extends Component {
    state = {
    }
    
    render() {
        return (
        <div>
            <header>
                <h1><Fade top cascade>{data.name}</Fade></h1>
            </header>
            <Fade left cascade>
            <div>
                <p className='header-title'>
                    {data.headerTagline[0]}<br></br>
                    {data.headerTagline[1]}
                    <TextHoverUnderStanding>
                    {data.headerTagline[2]}
                    </TextHoverUnderStanding>
                    <br></br>
                    {data.headerTagline[3]}
                    <TextHoverInteraction>{data.headerTagline[4]}</TextHoverInteraction>
                    <br></br>
                </p>
            </div>
            </Fade>
        </div>
    );
    }
}

export default Header;