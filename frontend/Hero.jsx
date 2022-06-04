import { FilmIcon, SpeakerphoneIcon, UserGroupIcon } from '@heroicons/react/outline'
import React from 'react'

function Hero() {
  return (
    <div className='w-full h-screen bg-zinc-200 flex-col flex justify-between'>
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
            <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
                <h1 className='py-3 text-5xl md:text-7xl font-bold text-red-700'> MOVIEW </h1>
                <h1 className='pb-3 text-2xl md:text-6xl font-bold'> MOVIE & REVIEW </h1>
                <p className='text-2xl pb-2'> a website for reviewing films or actors </p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Get Review</button>
            </div>
            <div className="">
                <img src="https://www.istreamer.com/wp-content/uploads/2019/08/IMDb-TV-thegem-blog-default.jpg" alt="" className='w-full h-full rounded-md' />
            </div>
            <div className="absolute flex flex-col py-4 md:min-w-[760px] bottom-[5%] mx-1 transform md:-translate-x-1/2 md:left-1/2 bg-zinc-200 border-slate-300 border rounded-xl text-center shadow-xl">
                <p>Come on give your rating</p>
                <div className="flex justify-center flex-wrap px-4">
                    <p className='flex px-4 py-2 text-slate-500'><FilmIcon className='h-6 px-3 text-indigo-600'/>Add Film</p>
                    <p className='flex px-4 py-2 text-slate-500'><UserGroupIcon className='h-6 px-3 text-indigo-600'/>Add Actor</p>
                    <p className='flex px-4 py-2 text-slate-500'><SpeakerphoneIcon className='h-6 px-3 text-indigo-600'/>Add Directory</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero