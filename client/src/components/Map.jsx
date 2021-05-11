import React from 'react';
import Sentence from './Sentence.jsx'

const Map = ({data}) => {

  return (
    <div>
      {data.map((sentence, i) => (
        <Sentence sentence={sentence} key={i}/>
      ))}
    </div>
  )

}

export default Map;