import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()

    navigate(`/search/${searchTerm}`)
  }
  return (
    <div className='relative rounded-full overflow-hidden focus-within:shadow-md shadow-blue-200/50 w-[calc(10rem_+_10vw)] h-[calc(2rem_+_4px)] max-w-[500px] bg-blue-100/15 focus-within:bg-blue-100/50'>
      <form onSubmit={handleSubmit} className="w-full h-[calc(2rem_+_4px)] " >
        <label htmlFor="search-field" className='sr-only'>Search all songs</label>
        <input value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} name="search-field" id="search-field" type="search" className='bg-red-400 w-full h-[calc(2rem_+_4px)] outline-none border-none pl-4 bg-transparent text-blue-700/75'/>
        <button className='w-[2rem] h-[2rem] rounded-full bg-blue-700/25 hover:bg-blue-700/50 cursor-pointer flex items-center justify-center absolute top-[2px] right-[2px]'><FaSearch /></button>
      </form>
    </div>
  )
}

export default SearchBar