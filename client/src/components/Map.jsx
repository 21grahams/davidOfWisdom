import React from 'react';

const Map = ({data}) => {
  const item = data[Math.floor(Math.random() * data.length)];
  console.log('item: ', item)
  return (
    <div>
      {item ? item.description : null}
    </div>
  )

}

export default Map;