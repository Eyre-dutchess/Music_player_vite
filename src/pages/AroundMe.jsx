import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { useGetSongsByCountryQuery } from '../redux/services/shazamCore'

import { Error, Loader, SongList, TopPlaySong } from '../components'

const AroundMe = () => {
  const [country, setCountry] = useState("")
  const [loading, setLoading] = useState(true)
  const {activeSong, isPlaying} = useSelector((state)=> state.player)
  const {data, isFetching, error} = useGetSongsByCountryQuery(country)

  useEffect(()=>{
    axios.get("https://geo.ipify.org/api/v2/country?apiKey=at_0TwcryaptMAQ6rLX3krqAjPCm0qJa")
    .then((res)=> setCountry(res?.data?.location?.country))
    .catch((err)=> console.log(err))
    .finally(()=> setLoading(false))
  }, [country])

  if(isFetching && loading) return <Loader title="Loading songs around you..." />

  if(error && country) return <Error />
  return (
    <div className='felx flex-col'>
        <h3 className='font-bold text-3xl text-white text-left mt-4 mb-10'>AroundMe</h3>
        <div>
            {data?.length < 0 ?(
            <Loader title="Nothing matches! try again or go back home"/>
          ):(
            <SongList songList={data}/>
          )}   
        </div>
    </div>
  )
}

export default AroundMe