import React from 'react'
import IMG from '../Assest/Nairarefill_logo.webp'
import {BiUserPlus} from 'react-icons/bi'

const Nav = () => {
  return (
    <div className='px-14 h-[5rem] z-99 w-full shadow bg-white z-99 justify-center'>
      <div className='flex justify-between items-center pt-4'>
        <div>
            <img src={IMG} alt='' />
        </div>
        <div className='flex gap-2 items-center'>
            <button className='flex items-center bg-[orange] py-1 px-4 text-white rounded-md '><BiUserPlus/>Register</button>
            <button className='border border-orange-400 py-1 px-6 text-[orange] rounded-md'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Nav
