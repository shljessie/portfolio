import React, { Component, useState } from 'react';

import Fade from 'react-reveal/Fade';
import Header from './Header';
import Navbar from './Navbar';
import data from '../yourdata';
import styled from 'styled-components';

const TextHoverUnderStanding = styled.text`
    background:#e9f4fc;
    :hover{
        background: #80ccff;
        cursor: pointer;
    }
`;

const TextHoverInteraction= styled.text`
    background: #ffebe6 ;
    :hover {
        background:#ff9999;
        cursor: pointer;
    }
`;

class Home extends Component {
  state = {
  }
  render() {
    return(
      <div className="App-header-container">
        <Navbar></Navbar>
        <div className="App-header">
        <Header setPage="homepage">
          <div>
          <header>
              <h1><Fade top cascade>{data.name}</Fade></h1>
          </header>
          <Fade left cascade>
            <div className="header-title-container">
            <img></img>
                <p className='header-title'>
                    {data.headerTagline[0]}<br></br>
                    {data.headerTagline[1]}
                    <a href="#" data-text="understanding">
                      <TextHoverUnderStanding>{data.headerTagline[2]}</TextHoverUnderStanding>
                    </a>
                    <br></br>
                    {data.headerTagline[3]}
                    <a href="#" data-text="understanding">
                      <TextHoverInteraction>{data.headerTagline[4]}</TextHoverInteraction>
                    </a>
                    <br></br>
                </p>
            </div>
          </Fade>
        </div>
        </Header>
        </div>
      </div>
    );
  }
}

export default Home;