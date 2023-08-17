import React from 'react'
import IMG from '../Assest/signIn_img.webp'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
  return (
    <section className='relative w-full h-[50rem]'>
    <div className='justify-center gap-10 flex items-center  '>
      <div className='px-[5rem] grid gap-4'>
        <h1 className='font-bold text-2xl '>We've Missed You</h1>
        <p className='w-[20rem] text-md'>Kindly signin and get first access to 
            the very best, community and unlock more
             opportunities</p>
        <div className='grid gap-4'>
            <div className='grid'>
                <label>
                    Email:
                </label>
                <input type='email' placeholder='' name='email' className='border bg-transparent py-2 pl-2'/>
            </div>
            <div className='grid'>
                <label>
                    Password:
                </label>
                <input type='password' placeholder='' name='password' className='border bg-transparent py-2 pl-2'/>
            </div>

            <button className='bg-[orange] p-2 text-white font-semibold'>Login</button>

            <p onClick={() => navigate('/forgot')} className='text-sm'>Forgot username or password? </p>
            <p className='text-sm'>Don't have an account? <spam className='text-blue-600'>Sign up</spam></p>
            </div>     
      </div>
        <img src={IMG} alt='' className='h-screen '/>
    </div>
    </section>
  )
}

export default Hero
