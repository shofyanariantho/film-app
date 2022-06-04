import React from 'react'
import loginImage from '../assets/login.jpg'
import { UserCircleIcon,KeyIcon } from '@heroicons/react/solid'

export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-screen'>
      <div className='hidden sm:block'>
        <img className='w-screen h-screen object-cover' src={loginImage} alt='gambar' />
      </div>

      <div className="bg-[#461111] flex flex-col justify-center">
        <form className='max-w-[400px] w-full mx-auto bg-[rgba(0,0,0,0.5)] p-8 px-8'>
          <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
          <div className="flex mb-5 mt-3 py-2 h-13">
              <UserCircleIcon className='h-9 text-black pr-4 pl-2 bg-[#FFC312]' /><input type="text" name="" id="" placeholder='username' className='w-72'/>
          </div>
          <div className="flex mb-5 mt-3 py-2 h-13">
            <KeyIcon className='h-9 text-black pr-4 bg-[#FFC312] pl-2'/><input type="password" name="" id="" placeholder='password'  className='w-72'/>
          </div>
          <div className="text-white pb-3">
            <p><input type="checkbox"/> Remember Me</p>
          </div>
          <button className='text-black bg-[#FFC312] w-full my-5 py-2 rounded text-xl'>Login</button>
          <div className="text-white text-center">
            <p>Don't have an account?<a href="Z" className='text-blue-500'>Sign Up</a></p>
          </div>
          <div className="text-blue-500 text-center">
            <a href="a">Forgot your password?</a>
          </div>
        </form>
      </div>
    </div>
  )
}
