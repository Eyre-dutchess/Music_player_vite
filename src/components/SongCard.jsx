import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { playPause, setActiveSong } from '../redux/features/playerSlice'
import PlayPause from './PlayPause'

const SongCard = ({song, i, isPlaying, activeSong, data}) => {
      const dispatch = useDispatch()
      const handlePauseClick = () =>{
        dispatch(playPause(false))
      }
      const handlePlayClick = () =>{
        dispatch(playPause(true))
        dispatch(setActiveSong({song, data, i}))
      }
    
  return (
        <div className='w-full max-w-[400px] shadow-md mx-auto bg-white/50 p-2 rounded-md overflow-hidden'>
            <div className='relative w-full group'>
                <div className={`absolute inset-0 justify-center items-center cursor-pointer bg-black/50 bg-opacity-50 group-hover:flex 
                    ${activeSong.name === song.attributes.name ? "flex bg-black/50 bg-opacity-70":"hidden"}`}>
                    <PlayPause 
                            isPlaying={isPlaying}
                            activeSong={activeSong}
                            song={song}
                            handlePause={handlePauseClick}
                            handlePlay={handlePlayClick}
                            />
                </div>
                <img src={song?.attributes.artwork.url} alt="song img" className=' w-full object-cover'/>
            </div>
            <div className='h-[4em] truncate pt-2 text-white/75'>
                <Link to={`/songs/${song?.id}`}><p className='text-lg hover:underline underline-offset-4 hover:text-white'>{song.attributes.name}</p></Link>
                <Link to={`/artists/${song?.relationships?.artists?.data[0].id}`}><p className='text-sm hover:underline underline-offset-4 hover:text-white'> -- {song.attributes.artistName}</p></Link>
            </div>
        </div>
  )
}

export default SongCard