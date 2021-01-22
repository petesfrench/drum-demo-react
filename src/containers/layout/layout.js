import TracksContainer from "../tracks-container/tracks-container";
import ControlBar from '../../components/control-bar/control-bar';

function Layout ({handleBpmChange, handleStart, handleAddSample, samples, BPM, playing}) {
  return (
    <>
    <ControlBar
    handleBpmChange={handleBpmChange}
    handleStart={handleStart}
    handleAddSample={handleAddSample}
    BPM={BPM}
    ></ControlBar>
    <TracksContainer
    samples={samples}
    BPM={BPM}
    playing={playing}
    ></TracksContainer>
    </>
  );
}

export default Layout;
