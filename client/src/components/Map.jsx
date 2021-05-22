import React from 'react';

const Map = ({data}) => {
  const item = data[Math.floor(Math.random() * data.length)];
  return (
    <span  style={{padding: '10px'}} className='RandomPhrase'>
      {item ? item.description : null}
    </span>
  )

}

export default Map;