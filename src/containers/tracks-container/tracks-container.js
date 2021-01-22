import React, {useEffect, useState} from 'react';
import SampleTrack from '../../components/sample-track/sample-track';
import OscTrack from '../../components/osc-track/osc-track';
import './tracks-container.css';
import Metronome from 'simple-beats';


function TracksContainer ({samples, BPM, playing}) {
  const [tracks, setTracks] = useState({});


  useEffect(() => {
    if (samples && samples.length) {
      const newTracks = samples.reduce((acc, sample) => {
        if (tracks[sample]) return { ...acc, [sample]: tracks[sample]};
        const newTrack = new Metronome();
        if (!sample.match(/Oscillator/)) {
          newTrack.hasPromise = true;
          newTrack.loadSamples([sample]);
        }
        return {
          ...acc,
          [sample]: newTrack,
        }
      }, {})
      setTracks(newTracks);
    }
  }, [samples])

  return(
    <>
    <div className="tracks-container-name">TRACKS</div>
    {Object.values(tracks).map(track => {
      if (track.hasPromise) {
        return (
        <SampleTrack
        BPM={BPM}
        newTrack={track}
        playing={playing}
        />
        )
      } else {
        return (
        <OscTrack
        BPM={BPM}
        newTrack={track}
        playing={playing}
        />
        )
      }
    })}
    </>
  );
}

export default TracksContainer;