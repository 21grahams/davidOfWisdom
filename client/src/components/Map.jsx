import React from 'react';
import Sentence from './Sentence.jsx'

const Map = (props) => {

  return (
    <div>
      {props.data.map((sentence, i) => (
        <Sentence sentence={sentence} key={i}/>
      ))}
    </div>
  )

}

export default Map;