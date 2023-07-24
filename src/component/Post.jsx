import React, { useState } from 'react'

function Post() {
    const [formSubmission, setFormSubmission]=useState({
        name:"Animal Name",
        image:"Image Link",
        description:"Animal deecription",
        votes:0
        
    })
    const [formData, setFormData]=useState([])

    function handleSubmit(e){
        e.preventDefault()
        setFormData([...formData, formSubmission])
        fetch('http://localhost:3000/characters', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formSubmission),
        });
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={formSubmission.name} onChange={(e) =>setFormSubmission({...formSubmission, name: e.target.value})}/>
        <input type="text" value={formSubmission.image} onChange={(e) => setFormSubmission({...formSubmission, image:e.target.value})}/>
        <input type="text" value={formSubmission.description} onChange={(e) => setFormSubmission({...formSubmission, description:e.target.value})}/>
        <input type="number" value={formSubmission.votes} onChange={(e) => setFormSubmission({...formSubmission, votes:e.target.value})}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Post
