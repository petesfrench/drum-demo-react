import React, {useState} from 'react';
import './control-bar.css';

function ControlBar ({handleBpmChange, handleStart, handleAddSample, BPM}) {
  const [sample, setSample] = useState('');

  function handleSampleUrlChange (e) {
    setSample(e.target.value);
  }

  function handleAddSampleBtn(e) {
    e.preventDefault();
    handleAddSample(sample);
    setSample('');
  }


  return (
    <div className="controls-cont">
      <button className="start-btn" onClick={handleStart}>Play</button>
      <form className="input-form">
        <input className="url-input" type="text" value={sample} onChange={handleSampleUrlChange}></input>
        <button className="add-url-btn" onClick={handleAddSampleBtn}>Add</button>
      </form>
      <form className="bpm-cont">
        <label>BPM:
        <input className="bpm-input" type="number" value={BPM} onChange={handleBpmChange}></input>
        </label>
      </form>
    </div>
  );
}

export default ControlBar;