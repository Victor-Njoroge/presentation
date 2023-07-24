import React from 'react';
import "../index.css";
import Delete from './Delete';
import Update from './Update';

function Grid({ animals }) {


  return (
    <div className='box-container'>
      {animals.map((element) => (
        <div className="box" key={element.id}>
          <img src={element.image} alt={element.name} />
          <h2>{element.name}</h2>
          <p>{element.description}</p>
          <p className="votes">{element.votes}</p>
          <Delete element={element}/>
          <Update element={element}/>
        </div>
      ))}
    </div>
  );
}

export default Grid;
