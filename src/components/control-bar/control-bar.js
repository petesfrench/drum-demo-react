import React from 'react';
import AddTrack from '../add-track/AddTrack';
import './control-bar.css';

function ControlBar({
  handleBpmChange,
  handleStart,
  handleAddSample,
  BPM,
  playing,
}) {
  return (
    <div className='controls-cont'>
      <button className='start-btn' onClick={handleStart}>
        {playing ? 'Stop' : 'Play'}
      </button>
      <AddTrack
        className='add-track-component'
        handleAddSample={handleAddSample}
      />
      <form className='bpm-cont'>
        <label>
          BPM:
          <input
            className='bpm-input'
            type='number'
            value={BPM}
            onChange={handleBpmChange}
          ></input>
        </label>
      </form>
    </div>
  );
}

export default ControlBar;
