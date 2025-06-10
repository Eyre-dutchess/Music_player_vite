import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectGenreListId } from '../redux/features/playerSlice'
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore'

import { genres } from '../assets/constants'
import { Loader, SongList } from '../components'

const Discover = () => {
    const dispatch = useDispatch()
    const {genreListId} = useSelector((state)=> state.player)
    const {data, isFetching, error} = useGetSongsByGenreQuery(genreListId || "POP")
    const genreTitle = genres.find(({value}) => value === genreListId)?.title;
    
    if(isFetching) return <Loader title="Loading songs..." />
    if(error) return <Error />
    
    return (
      <div className='w-full  flex flex-col items-start justify-center'>
          <div className='w-full px-[calc(1em_+_2vw)]  py-4 flex  items-center justify-center gap-2 sm:justify-between mt-4 mb-10'>
              <h3 className='font-bold  text-3xl text-white text-left '>Discover 
                  <span className='hidden md:inline-block px-4 mx-2 border-2 border-white/5 bg-blue-100/15 rounded-md shadow-lg'>{genreTitle}</span>
              </h3>
              <select
                    onChange={(e)=> dispatch(selectGenreListId(e.target.value))}
                    value={genreListId || "POP"}
                    className='bg-linear-to-r from-white/5 via-blue-400/50 to-blue-400 text-white/75 p-3 text-sm rounded-lg outline-none'
                  >
                    {genres.map((genre) => {
                      return (
                        <option key={genre.value} value={genre.value}>
                          {genre.title}
                        </option>
                      )
                    })}
              </select>
          </div>

          {data?.length < 0 ?(
            <Loader title="Nothing matches! try again or go back home"/>
          ):(
            <SongList songList={data}/>
          )}         
      </div>
    )
}

export default Discover