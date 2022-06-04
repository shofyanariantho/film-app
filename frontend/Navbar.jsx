import { MenuIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/solid';
import React, { useState } from 'react'


function Navbar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className="flex items-center">
                <h1 className='text-3xl font-bold mt-1 sm:text-4xl'>MOVIEW.</h1>
                <ul className="hidden md:flex">
                    <li>Home</li>
                    <li>Profile</li>
                    <li>Add Actor</li>
                    <li>Add Film</li>
                    <li>Add Directory</li>
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                <button className='border-none bg-transparent text-black mr-4  p-3 hover:bg-dark-red hover:text-white'>
                    Logout
                </button>
            </div>    
            <div className='md:hidden'  onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5'/> : <XIcon className='w-5'/>}
                
            </div>
        </div>
        <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
            <li className='border-b-2 border-zinc-300 w-full'>Home</li>
            <li className='border-b-2 border-zinc-300 w-full'>Profile</li>
            <li className='border-b-2 border-zinc-300 w-full'>Add Actor</li>
            <li className='border-b-2 border-zinc-300 w-full'>Add Film</li>
            <li className='border-b-2 border-zinc-300 w-full'>Add Directory</li>
                <div className='flex flex-col'>
                    <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>
                        Logout
                    </button>
                </div>
        </ul>
    </div>
  )
}

export default Navbar