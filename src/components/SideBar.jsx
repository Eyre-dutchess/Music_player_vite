import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineAcademicCap } from 'react-icons/hi'

import { links } from '../assets/constants'

const SideBar = () => {
  return (
    <div className='min-h-screen hidden text-white/75 bg-white/15 shadow-md font-semibold sm:block sm:w-[30vw] max-w-[250px]'>
       <div className='w-[30vw] max-w-[250px] h-full pt-20 pl-[calc(0.5em_+_3vw)] xl:pl-12 flex flex-col items-start justify-start gap-4'>
        {links.map((link)=> {
            return (
              <Link to={`${link.to}`} key={link.name} className='flex flex-row items-center justity-center group gap-2'>
                <div className='w-6 h-6 flex items-center justify-center rounded-full bg-white/25 p-1 group-hover:bg-white/50'> <link.icon className='text-black/25 text-xl' /></div> 
                <p className='group-hover:text-white'>{link.name}</p>
              </Link>
            )
        })}
    </div>
    </div>
  )
}

export default SideBar