import React from 'react';

const Map = ({data}) => {
  const item = data[Math.floor(Math.random() * data.length)];
  console.log('item: ', item)
  return (
    <span className='RandomPhrase'>
      {item ? item.description : null}
    </span>
  )

}

export default Map;