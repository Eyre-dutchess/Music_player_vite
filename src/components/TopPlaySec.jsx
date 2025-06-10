import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { useGetTopChartsQuery } from '../redux/services/shazamCore'

import { genres } from '../assets/constants'
import topChart from "../assets/data.json"
import Loader from './Loader'
import Error from './Error'
import PlayPause from './PlayPause'
import TopChartCard from './SongCard'
import TopPlaySong from './TopPlaySong'
import TopPlayArtist from './TopPlayArtist'


const TopPlaySec = () => {
  const {activeSong, isPlaying} = useSelector((state)=> state.player);
  const {data, error, isFetching}= useGetTopChartsQuery()

  const topPlayList = data?.slice(0, 10)

  if(isFetching) return <Loader />
  if(error) return <Error />
  return (
    <div className=' w-full px-8 xl:px- xl:w-[30vw] xl:max-w-[700px] xl:bg-white/5 flex flex-col'>
        <div className='flex flex-col gap-2 '>
          <div className='flex flex-row items-center justify-between w-full py-4 pl-4 text-white/75'>
            <h6 className=' text-semibold text-2xl '>Top Singles</h6>
            <Link to="/top-charts"><p className='text-blue-200 hover:text-blue-400/75 transition hover:underline cursor-pointer text-sm font-bold'>See More</p></Link>
          </div>
          <div className='w-full flex flex-col gap-4'>
              {topPlayList?.map((song, index)=>{
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
       
           
        </div>

        <div className='w-full flex flex-col gap-2  py-10'>
          <div className='flex flex-row items-center justify-between w-full pt-4  text-white/75'>
              <h6 className=' text-semibold text-2xl '>Top Artists</h6>
              <Link to="/top-charts"><p className='text-blue-400/75 hover:text-blue-400/50 transition hover:underline cursor-pointer text-sm font-bold'>See More</p></Link>
          </div>
          <div className='w-full transition overflow-x-hidden overflow-y-hidden hover:overflow-x-auto rounded-lg bg-linear-to-r from-blue-100/5 to-blue-400/50'>
            <div className='w-full grid grid-flow-col gap-4'>
              {topPlayList?.map((song, i) => {
                return (
                    <TopPlayArtist key={i} song={song}/>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopPlaySec