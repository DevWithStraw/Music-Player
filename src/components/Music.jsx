import React from 'react';
import './Music.scss';

export default function Music({imageSrc ,songName , artist , timeline}) {
  return (
    <section className='music-container'>
        <img src={`/assets/${imageSrc}.png`} alt="" />
          <section>
            <h2 className='poppins-semibold'> {songName} </h2>
            <h3 className='poppins-regular'>  {artist} </h3>
          </section>
        <span className='poppins-regular'>{timeline}</span>
        
    </section>
  )
}
