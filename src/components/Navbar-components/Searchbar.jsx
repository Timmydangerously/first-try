"use client"

import React from 'react'
import { SearchVideos } from '@/utility/fetchdata'
import { useState } from 'react'
import Image from 'next/image'

const Searchbar = () => {
  //const [count, setCount ] = useState(50)
 // function update() {
   // setCount(count-1)
  //}
  const [ loading, setLoading ] = useState(false)
  const [ result, setResult ] = useState([])
  const [ query, setQuery ] = useState("")

  const handleSearch = async (e) =>{
    e.preventDefault();
    setLoading(true)
    const data = await SearchVideos(`search/?query=${query}`)
    console.log(data)
    setResult(data.videos)
    setLoading(false)
  }
  
  
    return (
    <div>
        <form onSubmit={handleSearch}>
        <input type="text" placeholder='search here...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}/>
<button>
    Search
</button>
        </form>
       {loading ? <p> waiting....</p> : null}
   
  
   
      {
        result.map((eachItem,index, array)=> ( 
          <div key={index}>
        <h1>{eachItem.title}</h1>
        <h2>{eachItem.video_length}</h2>
        <h2>{eachItem.number_of_views}</h2>
        <img src={eachItem.thumbnails[0].url} alt="image" />
          </div>

        ))
      }
      </div>

  )
}





export default Searchbar
