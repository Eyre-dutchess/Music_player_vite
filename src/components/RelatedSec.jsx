import React from 'react'
import TopPlaySong from './TopPlaySong'
import TopPlayArtist from './TopPlayArtist'

const RelatedSec = ({data, title,  isPlaying, activeSong,  handlePauseClick, handlePlayClick
}) => {
  return (
    <div className='flex flex-col px-6 md:px-8 xl:px-[calc(1rem_+_3vw)] py-8'>
      <h1 className='font-bold text-3xl text-white'>Related {title}</h1>
      <div >
        {title=="Songs: "?(
           <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        
              {data?.map((song, index)=>{
                return (
                  <TopPlaySong 
                      song={song} 
                      key={song.id} 
                      i={index} 
                      activeSong={activeSong} 
                      isPlaying={isPlaying}
                      handlePauseClick={handlePauseClick}
                      handlePlayClick={handlePlayClick}
                      />
                )
              })}
          </div>
        ):(
           <div className='w-full grid grid-flow-col gap-4'>
              {data?.map((song, i) => {
                return (
                    <TopPlayArtist key={i} song={song}/>
                )
              })}
          </div>
        )}
      </div>
    </div>
  )
}

export default RelatedSec