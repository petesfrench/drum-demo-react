import React, { useState, useEffect, useRef } from 'react';
import './sample-track.css';

function SampleTrack({ newTrack, playing, BPM }) {
  const DEFAULT_BEATS = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [beats, setBeats] = useState(DEFAULT_BEATS);

  useEffect(() => {
    newTrack.noteVolumes = beats;
    newTrack.BPM = BPM;
  }, [beats, BPM]);

  useEffect(() => {
    if (playing) {
      newTrack.start();
    } else {
      newTrack.stop();
    }
  }, [playing]);

  function handleClick(e) {
    const beatsCopy = beats;
    if (beatsCopy[e.target.getAttribute('data-id')] === 0)
      beatsCopy[e.target.getAttribute('data-id')] = 1;
    else beatsCopy[e.target.getAttribute('data-id')] = 0;
    setBeats([...beatsCopy]);
    newTrack._noteVolumes = beats;
  }

  return (
    <div className='sample-track-container'>
      <div className='sample-track-name'>
        <input
          className='sample-track-name-input'
          placeholder={newTrack.tagName}
          type='text'
        />
      </div>
      <div className='check-box-cont'>
        <input
          className='beat-check-box'
          type='checkbox'
          onChange={(e) => handleClick(e)}
          data-id='0'
        ></input>
        <input
          className='beat-check-box'
          type='checkbox'
          onChange={(e) => handleClick(e)}
          data-id='1'
        ></input>
        <input
          className='beat-check-box'
          type='checkbox'
          onChange={(e) => handleClick(e)}
          data-id='2'
        ></input>
        <input
          className='beat-check-box'
          type='checkbox'
          onChange={(e) => handleClick(e)}
          data-id='3'
        ></input>
        <input
          className='beat-check-box'
          type='checkbox'
          onChange={(e) => handleClick(e)}
          data-id='4'
        ></input>
        <input
          className='beat-check-box'
          type='checkbox'
          onChange={(e) => handleClick(e)}
          data-id='5'
        ></input>
        <input
          className='beat-check-box'
          type='checkbox'
          onChange={(e) => handleClick(e)}
          data-id='6'
        ></input>
        <input
          className='beat-check-box'
          type='checkbox'
          onChange={(e) => handleClick(e)}
          data-id='7'
        ></input>
        <input
          className='beat-check-box'
          type='checkbox'
          onChange={(e) => handleClick(e)}
          data-id='8'
        ></input>
        <input
          className='beat-check-box'
          type='checkbox'
          onChange={(e) => handleClick(e)}
          data-id='9'
        ></input>
        <input
          className='beat-check-box'
          type='checkbox'
          onChange={(e) => handleClick(e)}
          data-id='10'
        ></input>
        <input
          className='beat-check-box'
          type='checkbox'
          onChange={(e) => handleClick(e)}
          data-id='11'
        ></input>
        <input
          className='beat-check-box'
          type='checkbox'
          onChange={(e) => handleClick(e)}
          data-id='12'
        ></input>
        <input
          className='beat-check-box'
          type='checkbox'
          onChange={(e) => handleClick(e)}
          data-id='13'
        ></input>
        <input
          className='beat-check-box'
          type='checkbox'
          onChange={(e) => handleClick(e)}
          data-id='14'
        ></input>
        <input
          className='beat-check-box'
          type='checkbox'
          onChange={(e) => handleClick(e)}
          data-id='15'
        ></input>
      </div>
    </div>
  );
}

export default SampleTrack;
