import React, {useState, useEffect, useRef} from 'react';
import './osc-track.css';


function OscTrack ({newTrack, playing, BPM}) {
  const DEFAULT_BEATS = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  const [beats, setBeats] = useState(DEFAULT_BEATS);
  const [wave, setWave] = useState('sine');
  const [freq, setFreq] = useState(220);

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

  function handleWaveChange (e) {
    setWave(e.target.value);
    newTrack.oscillatorType = wave;
  }

  function handleFreqChange (e) {
    setFreq(e.target.value);
    newTrack.frequency = freq;
  }

  function handleClick(e) {
    const beatsCopy = beats;
    if (beatsCopy[e.target.getAttribute('data-id')] === 0) beatsCopy[e.target.getAttribute('data-id')] = 1;
    else beatsCopy[e.target.getAttribute('data-id')] = 0;
    setBeats([...beatsCopy]);
    newTrack.noteVolumes = beats;
  }

  return (
    <div className="sample-track-container">
      <div className="osc-controls" >
        <label for="frequency">Frequency</label>
        <input type="range" className="frequency-nob" name="frequency" min="40" max="1000" onChange={handleFreqChange}/>
        <label for="wave-type">Wave Type</label>
        <select className="wave-type-drop-box" name="wave-type" onChange={handleWaveChange}>
          <option value="sine">sine</option>
          <option value="square">square</option>
          <option value="sawtooth">sawtooth</option>
          <option value="triangle">triangle</option>
        </select>
      </div>
      <div className="check-box-cont">
        <input className="beat-check-box" type="checkbox" onChange={e => handleClick(e)} data-id="0"></input>
        <input className="beat-check-box" type="checkbox" onChange={e => handleClick(e)} data-id="1"></input>
        <input className="beat-check-box" type="checkbox" onChange={e => handleClick(e)} data-id="2"></input>
        <input className="beat-check-box" type="checkbox" onChange={e => handleClick(e)} data-id="3"></input>
        <input className="beat-check-box" type="checkbox" onChange={e => handleClick(e)} data-id="4"></input>
        <input className="beat-check-box" type="checkbox" onChange={e => handleClick(e)} data-id="5"></input>
        <input className="beat-check-box" type="checkbox" onChange={e => handleClick(e)} data-id="6"></input>
        <input className="beat-check-box" type="checkbox" onChange={e => handleClick(e)} data-id="7"></input>
        <input className="beat-check-box" type="checkbox" onChange={e => handleClick(e)} data-id="8"></input>
        <input className="beat-check-box" type="checkbox" onChange={e => handleClick(e)} data-id="9"></input>
        <input className="beat-check-box" type="checkbox" onChange={e => handleClick(e)} data-id="10"></input>
        <input className="beat-check-box" type="checkbox" onChange={e => handleClick(e)} data-id="11"></input>
        <input className="beat-check-box" type="checkbox" onChange={e => handleClick(e)} data-id="12"></input>
        <input className="beat-check-box" type="checkbox" onChange={e => handleClick(e)} data-id="13"></input>
        <input className="beat-check-box" type="checkbox" onChange={e => handleClick(e)} data-id="14"></input>
        <input className="beat-check-box" type="checkbox" onChange={e => handleClick(e)} data-id="15"></input>
      </div>
    </div>
  );
}

export default OscTrack;