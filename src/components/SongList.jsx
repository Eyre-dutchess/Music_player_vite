
import React from 'react'
import { useSelector } from 'react-redux'

import topChart from "../assets/data.json"
import SongCard from './SongCard'

const SongList = ({songList}) => {
  const {activeSong, isPlaying} = useSelector((state)=> state.player)


  return (
    <div className='w-full items-center grid grid-cols-2 px-[calc(0.5rem_+_5vw)] sm:px-8 xl:px-[calc(1rem_+_3vw)] sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-4'>
          {songList?.slice(0, 20).map((song, i) => {
            return (
              <SongCard 
                    key={song.id}
                    song={song}
                    i={i}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    data={songList}
                />
               )
            })}
    </div>
  )
}

export default SongList