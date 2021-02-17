import React, { useState } from 'react';
import Layout from './containers/layout/layout';

function App() {
  const [samples, setSamples] = useState([]);
  const [BPM, setBPM] = useState(120);
  const [playing, setPlaying] = useState(false);
  const [oscCount, setOscCount] = useState(1);

  function handleAddSample(newSample) {
    if (newSample) setSamples([...samples, newSample]);
    else {
      setSamples([...samples, 'Oscillator' + oscCount]);
      setOscCount(oscCount + 1);
    }
  }

  function handleStart(e) {
    e.preventDefault();
    if (playing) setPlaying(false);
    else if (!playing) setPlaying(true);
  }

  function handleBpmChange(e) {
    e.preventDefault();
    setBPM(e.target.value);
    console.log('current BPM', BPM);
  }

  return (
    <>
      <Layout
        handleBpmChange={handleBpmChange}
        handleStart={handleStart}
        handleAddSample={handleAddSample}
        samples={samples}
        BPM={BPM}
        playing={playing}
      ></Layout>
    </>
  );
}

export default App;
