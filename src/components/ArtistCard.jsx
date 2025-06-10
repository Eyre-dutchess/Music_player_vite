import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ArtistCard({song}) {
  const navigate = useNavigate()
  return (
    <div onClick={()=> navigate(`/artists/${song?.relationships?.artists?.data[0].id}`)} 
    className='w-full max-w-[300px] shadow-md mx-auto bg-white/15 p-2 rounded-md overflow-hidden flex flex-col items-center cursor-pointer hover:shadow-lg hover:bg-white/25'>
      <img className='w-full aspect-square rounded-full scale-90 group-hover:scale-100 group-hover:shadow-lg' src={song?.attributes.artwork.url} alt="artist img" />
      <div className='h-[4em] truncate w-full bg-linear-to-r from-white/5 via-white/90 to-white/5 flex items-center justify-center text-blue-400/75'>
        <p className='font-bold w-4/5 overflow-hidden text-center '>{song.attributes.artistName}</p></div>
    </div>
  )
}
