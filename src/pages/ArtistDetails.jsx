
import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { useGetArtistDetailsQuery } from '../redux/services/shazamCore'
import { setActiveSong } from '../redux/features/playerSlice'

import topChart from "../assets/data.json"
import { DetailsHeader, Error, Loader, TopPlaySong } from '../components'
import RelatedSec from '../components/RelatedSec'

const ArtistDetails = () => {
  const {id: artistId} = useParams()
  const dispatch = useDispatch()
  const {activeSong, isPlaying} = useSelector((state)=> state.player)
  const {data: artistData, isFetching: isFetchingArtistDetail, error} = useGetArtistDetailsQuery(artistId)


  const handlePauseClick = () =>{
        dispatch(playPause(false))
      }
  const handlePlayClick = () =>{
        dispatch(playPause(true))
        dispatch(setActiveSong({song, data, i}))
      }

  if(isFetchingArtistDetail) return <Loader title="loading artist detail..." />
  if(error) return <Error />

 
  return (
    <div className='w-full flex  flex-col '>
      <DetailsHeader 
        artistId={artistId}
        artistData={artistData}
      />

      <div className='w-full flex flex-col gap-4 px-6 md:px-8 xl:px-[calc(1rem_+_3vw)] py-8'>
              {data?.slice(0,5).map((song, index)=>{
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

      <RelatedSec title="Artists: " 
                  data={Object.values(artistData?.songs)} 
                  activeSong={activeSong} 
                  isPlaying={isPlaying}
                  handlePauseClick={handlePauseClick}
                  handlePlayClick={handlePlayClick}
                  />
    </div>
  )
}

export default ArtistDetails