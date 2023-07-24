import React, { useEffect, useState } from 'react'
import Grid from '../component/Grid';
import Post from '../component/Post';
function Home() {
    const[fetchData, setFetchData]=useState([]);
    useEffect(() =>{
        fetch(`http://localhost:3000/characters`)
        .then((res) =>{
            return res.json()
        })
        .then((data)=>{
            setFetchData(data)
        })
    }, []);
  return (
    <>
        <Post/>
      {fetchData  && <Grid animals={fetchData}/>}
    </>
  )
}

export default Home
