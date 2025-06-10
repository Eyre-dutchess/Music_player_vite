
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { useGetArtistDetailsQuery, useGetSongDetailsQuery, useGetSongsRelatedQuery } from '../redux/services/shazamCore'
import { setActiveSong } from '../redux/features/playerSlice'

import { DetailsHeader, Error, Loader } from '../components'
import RelatedSec from '../components/RelatedSec'

const SongDetails = () => {
  const {id: songId} = useParams()
  const dispatch = useDispatch()
  const {activeSong, isPlaying} = useSelector((state)=> state.player)
  const {data: songData, isFetching: isFetchingSongDetails} = useGetSongDetailsQuery(songId)
  const {data, isFetching: isFetchingRelatedSongs, error} = useGetSongsRelatedQuery({songId})
  
  const handlePauseClick = () =>{
        dispatch(playPause(false))
      }
  const handlePlayClick = () =>{
        dispatch(playPause(true))
        dispatch(setActiveSong({song, data, i}))
      }
  if(isFetchingSongDetails || isFetchingRelatedSongs) return <Loader title="loading song detail..." />
  if(error) return <Error />

  return (
    <div className='flex flex-col'>
      <DetailsHeader 
        // artistId={artistId}
        // artistData={artistDate}
        songData={songData}
      />

      <RelatedSec title="Songs: " data={data} isPlaying={isPlaying} activeSong={activeSong} 
      handlePauseClick={handlePauseClick} handlePlayClick={handlePlayClick}
      />
      
    </div>
  )
}

export default SongDetails