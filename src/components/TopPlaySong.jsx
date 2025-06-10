import React from 'react'
import { Link } from 'react-router-dom'

import PlayPause from './PlayPause'

const TopPlaySong = ({song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick
  }) => {
  return (
    <div className='hover:shadow-md flex flex-row items-center py-2 p-4  rounded-lg cursor-pointer mb-2 bg-linear-to-r from-blue-100/5 via-orange-500/15 to-blue-100/5'>
      <span className='font-bold text-white mr-3'>{i + 1}. </span>
      <div className="w-full flex flex-row items-center justify-between ">
        <div className='flex flex-row items-start justify-center'>
          <img className='w-20 h-20 rounded-full shadow-lg border-[0.5px] border-blue-100/50 p-[2px]' src={song?.attributes?.artwork?.url} alt={song?.name} />
          <div className='h-20 w-50 px-4 flex flex-col items-start justify-center gap-1 truncate text-white group'>
              <Link to={`/songs/${song?.id}`}>
                  <p className='text-sm font-semibold opacity-75 group-hover:opacity-95 cursor-pointer'>{song?.attributes?.name}</p>
              </Link>
              <Link to={`/artists/${song?.relationships?.artists?.data[0].id}`}>
                  <p className='text-xs  opacity-25 group-hover:opacity-50 cursor-pointer'>{song?.attributes?.artistName}</p>
              </Link>
          </div>
        </div>
        <PlayPause 
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
        />
      </div>
    </div>
  )
}

export default TopPlaySong