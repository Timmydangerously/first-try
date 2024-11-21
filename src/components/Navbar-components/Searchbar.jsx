"use client"

import React from 'react'
import { Searchvideos } from '@/utility/fetchdata'
import { useState } from 'react'

const Searchbar = () => {
  const [count, setCount ] = useState(0)
  function update() {
    setCount(count+1)
  }
  
  
    return (
    <div>
        <form>
        <input type="text" placeholder='search here...' />
<button>
    Search
</button>
        </form>
        <h1>{count}</h1>
        <button onClick={update}>update count</button>
    </div>
  )
}

export default Searchbar
