import React, { useState, useEffect } from 'react';
import Image1 from './assets/DSCF1061.jpg';
import Image2 from './assets/DSCF1033.jpg';
import Image3 from './assets/CanadaWordmark-Combined-CMYK-white.png';
import Image4 from './assets/FACTOR-Combined-CMYK-White.png';
import { FaInstagram, FaYoutube, FaTwitter, FaSoundcloud, FaApple, FaSpotify } from 'react-icons/fa';
import './App.css'

function App() {

  return (
    <>
      <div className="Container">
        <section className="Section-1">
          <div className="Section-Content">
            <img src={Image1} className="img-1" alt="Image of SkeetSkeetBengBeng" />
            <div className="Dates">
              <h1 className='section-title'>Upcoming Releases</h1>
              <p>Jan 16th, 2024 - An excercise in the dark</p>
              <p>Feb 16th, 2024 - Breakthrough</p>
            </div>
          </div>
        </section>
        <section className="Section-2">
          <div className="Section-Content">
            <div className="About">
               <p className='About-Text'><i>skeetskeetbengbeng</i> is not just another <b>multi-genre</b> dnb lofi breakcore artist from the <b>westcoast</b>. <i>skeetskeetbengbeng</i> embodies <b>the</b> <b>future</b> of <b>music</b>.<i>skeetskeetbengbeng</i> is a <b>visionary</b> who has been <b>pushing</b> the <b>boundaries</b> of <b>sound</b>. <i>skeetskeetbengbeng</i> is your favourite producer's <i>favourite producer</i>.
               </p> 
            </div>
            <div className="Music" id="Music-Player">
            <iframe className="utube" src="https://www.youtube.com/embed/SkZ7wcRyyrs?si=IxQF5o46Pv7Qur7G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
              
            </div>
          </div>
        </section>
        <section className="Section-3">
          <div className="Section-Content">
            <div className="Links">
            <h1 className='section-title'>Links</h1>
            <ul class="vertical-links">
              <li><a href="https://www.instagram.com/sktsktbngbng/" target="_blank" rel="noreferrer"><FaInstagram /></a></li>
              <li><a href="https://twitter.com/sktsktbngbng" target="_blank" rel="noreferrer"><FaTwitter /></a></li>
              <li><a href="https://soundcloud.com/skeetskeetbengbeng" target="_blank" rel="noreferrer"><FaSoundcloud /></a></li>
              <li><a href="https://open.spotify.com/artist/7Mzw1aHOHMSlgLzubERe2I?si=ibPjkN_-TdOKpsg02oiAMQ" target="_blank" rel="noreferrer"><FaSpotify /></a></li>
              <li><a href="https://music.apple.com/us/artist/skeetskeetbengbeng/1711549306" target="_blank" rel="noreferrer"><FaApple /></a></li>
              <li><a href="https://www.youtube.com/@skeetskeetbengbeng" target="_blank" rel="noreferrer"><FaYoutube /></a></li>
            </ul>
            </div>
            <img src={Image2} className="img-2" alt="Image of SkeetSkeetBengBeng" />
          </div>
        </section>
        <section className="Section-4">
          <div className="Section-Content">
            <img src={Image4} className="img-3" alt="Factor Logo" />
            <img src={Image3} className="img-3" alt="Canada Logo" />
          </div>
        </section>
      </div>
      <div className="factor-Canada">
            <img src={Image4} className="img-3" alt="Factor Logo" />
            <img src={Image3} className="img-3" alt="Canada Logo" />
        </div>
    </>
  )
}

export default App
