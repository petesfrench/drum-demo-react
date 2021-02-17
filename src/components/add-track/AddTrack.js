import React, { useState } from 'react';
import Samples from '../../samples/samples';

function AddTrack({ handleAddSample }) {
  const [sample, setSample] = useState('');

  function handleCustomUrlChange() {
    setSample(e.target.value);
  }

  function handleDropdownUrlChange() {
    console.log(e.target.value);
    setSample(Samples[e.target.value]);
  }

  function handleEitherBtn() {
    e.preventDefault();
    handleAddSample(sample);
    setSample('');
  }

  return (
    <div className='add-track-container'>
      <form className='text-input-form'>
        <input
          className='url-input'
          type='text'
          placeholder='insert custom url'
          value={sample}
          onChange={handleCustomUrlChange}
        ></input>
        <button className='add-url-btn' onClick={handleEitherBtn}>
          Add
        </button>
      </form>
      <form className='dropdown-input-form'>
        <select
          className='dropdown-input'
          name='url-dropdown'
          onChange={handleDropdownUrlChange}
        >
          <option value='high_hat_closed'>High hat closed</option>
          <option value='high_hat_open'>High hat open</option>
          <option value='snare_1'>Snare-1</option>
          <option value='snare_2'>Snare-2</option>
          <option value='kick_1'>Kick-1</option>
          <option value='kick_2'>Kick-2</option>
          <option value='high_tom_1'>High tom-1</option>
          <option value='high_tom_2'>High tom-2</option>
          <option value='low_tom'>Low tom</option>
          <option value='congo_1'>Congo-1</option>
          <option value='congo_2'>Congo-2</option>
          <option value='congo_3'>Congo-3</option>
          <option value='cowbell'>Cowbell</option>
          <option value='clap'>Clap</option>
        </select>
        <button className='add-url-btn' onClick={handleEitherBtn}>
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTrack;
