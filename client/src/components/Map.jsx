import React from 'react';
// import Sentence from './Sentence.jsx'

const Map = ({data}) => {
  // const items = data.description;
  let item = data[Math.floor(Math.random() * data.length)];
  console.log('item: ', item)
  return (
    <div>
      {item ? item.description : null}
    </div>
  )

}

export default Map;