import React from 'react'

const DetailsHeader = ({artistId, artistData, songData}) => {
  return (
    <div className='relative w-full h-[60vh]'>
        <div className='w-full h-full absolute inset-0 flex items-center '>
            <img src={artistId ? 
                artistData?.attributes?.artwork?.url
                : songData?.images?.coverart
              } alt="art"  className='w-full h-full object-cover'/>
            </div>
        <div className='h-max absolute bottom-0 flex flex-col items-start justify-end px-2 py-6 text-white bg-linear-to-br from-orange-500/50 via-blue-700/75 to-blue-100/5 font-bold'>
              <h3 className='text-5xl '>{artistId ? 
                 artistData?.attributes?.artistName
                : songData?.name
              }</h3>
              <p className='text-xl'>genre</p>
        </div>
    </div>
  )
}

export default DetailsHeader