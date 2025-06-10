import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useGetSongsBySearchQuery } from '../redux/services/shazamCore'
import { Error, Loader, SongList } from '../components'

const Search = () => {
  const {searchTerm} = useParams()
 
  const {data,  isFetching, error} = useGetSongsBySearchQuery(searchTerm)

  if(isFetching) return <Loader title="Loading up charts..." />
  if(error) return <Error />
  return (
    <div className='flex flex-col'>
      <h6 className=' italic text-3xl text-white/75 text-left mt-4 mb-10'>
        Show results for <span className='font-semibold text-white not-italic'>{searchTerm}</span>
      </h6>
      <div >
          <SongList songList={data} />
      </div>
    </div>
  )
}

export default Search