import React from 'react'

import { SongCard } from '../components';
import topChart from "../assets/data.json"

const TopCharts = () => {
  const {activeSong, isPlaying} = useSelector((state)=> state.player);
  const {data, error, isFetching}= useGetTopChartsQuery()

  if(isFetching) return <Loader />
  if(error) return <Error />

  return (
    <div>
      <h6 className=' text-semibold text-4xl text-white w-full px-[calc(0.5rem_+_5vw)] sm:px-6 lg:px-4 2xl:px-6 4xl:px-[calc(1rem_+_3vw)] pt-10 pb-4'>Top Singles</h6>
       <div className='w-full items-center grid grid-cols-2 px-[calc(0.5rem_+_2vw)] sm:px-6 lg:px-4 2xl:px-6 4xl:px-[calc(1rem_+_3vw)] sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-4'>
          {data?.map((song, i) => {
            return (
              <SongCard 
                    key={song.id}
                    song={song}
                    i={i}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    data={data}
                />
               )
            })}
      </div>
    </div>
  )
}

export default TopCharts