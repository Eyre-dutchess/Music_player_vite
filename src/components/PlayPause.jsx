import React from 'react'
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'

const PlayPause = ({isPlaying, activeSong, song, handlePause, handlePlay}) => {
  return (
    <div>
        {isPlaying && activeSong?.title === song.title?(
            <FaPauseCircle 
                size={35}
                className='text-blue-500/75 hover:text-blue-400'
                onClick={handlePause}
            />
        ):(
            <FaPlayCircle 
                size={35}
                className='text-blue-500/75 hover:text-blue-400'
                onClick={handlePlay}
            />
        )}
    </div>
  )
}

export default PlayPause