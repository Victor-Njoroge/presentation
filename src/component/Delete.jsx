import React from 'react'

function Delete({element}) {
    function handleDelete(){
        fetch(`http://localhost:3000/characters/${element.id}`, {
            method: 'DELETE',
          })
          .then(res => {
            res.json()
          })
    }
  return (
    <div>
      <button type="button" onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Delete
