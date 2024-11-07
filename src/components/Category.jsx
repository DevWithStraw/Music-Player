import React from 'react'

export default function Category({imageSrc , title , subtitle}) {
  return (
    <div className='category-container'>
        <img src={`/assets/${imageSrc}.png`} alt="music category" />
        <section>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
        </section>
    </div>
  )
}
