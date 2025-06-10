import React from 'react'
import { useNavigate } from 'react-router-dom'

const TopPlayArtist = ({song}) => {
  const navigate = useNavigate()

  return (
    <div onClick={()=> navigate(`/artists/${song?.relationships?.artists?.data[0].id}`)}
     className='w-[calc(12rem_+_2vw)] xl:w-50 flex flex-col items-center justify-center gap-2 py-2 cursor-pointer mb-2 transition group'>
      <img className='w-full  aspect-square rounded-full transition scale-95 group-hover:scale-90 group-hover:shadow-lg' src={song?.attributes?.artwork.url} alt="artist img" />
      <h6 className='w-full px-8 text-center truncate font-semisbold text-lg text-white/75' key={song.id}>{song.attributes.artistName}</h6>
    </div>
  )
}

export default TopPlayArtist