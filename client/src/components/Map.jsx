import React from 'react';

const Map = ({data}) => {

  const item = data[Math.floor(Math.random() * data.length)];

  const addDelete = () => {
    console.log('yuhhhhh')
    return <button>Delete</button>
  }

  return (
    <div>
      {item ? <span style={{padding: '10px'}} className='RandomPhrase'>{item.description}{addDelete()}</span> : null}
    </div>
  )
}
export default Map;