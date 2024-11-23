"use client"

import React from 'react'
import { SearchVideos } from '@/utility/fetchdata'
import { useState } from 'react'

const Searchbar = () => {
  //const [count, setCount ] = useState(50)
 // function update() {
   // setCount(count-1)
  //}
  const [ loading, setLoading ] = useState(false)
  const [ result, setResult ] = useState([])
  const [ query, setQuery ] = useState("not recognised")

  const handleSearch = async (e) =>{
    e.preventDefault();
    setLoading(true)
    const data = await SearchVideos(`search/?query=${query}`)
    console.log(data)
    setResult(data)
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
    </div>
  )}





export default Searchbar
