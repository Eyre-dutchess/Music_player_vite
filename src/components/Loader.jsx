import React from 'react'
import { CircleLoader } from 'react-spinners'

export default function Loader({title}) {
  return (
    <div className='w-full min-height-[60vh] pt-30 text-center flex flex-col items-center justify-center gap-8 text-white/75'>
      <CircleLoader color='white' size={100} />
      <h6 className='text-3xl font-bold italic'>{`${title}` || "Loading ..."}</h6>
    </div>
  )
}
