import React from 'react';

const Map = ({data}) => {
  const item = data[Math.floor(Math.random() * data.length)];
  return (
    <div>
      {item ? <span style={{padding: '10px'}} className='RandomPhrase'>{item.description}</span> : null}
    </div>
  )
}
export default Map;