import React from 'react';

function Update({ element }) {
  function handleSubmit(e) {
    const updatedElement = { ...element, votes: element.votes + 1 };
    e.preventDefault();

    fetch(`http://localhost:3000/characters/${element.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedElement),
    })
}
  return (
    <div>
      <br />
      <button type="button" onClick={handleSubmit}>Vote</button>
    </div>
  );
}

export default Update;
