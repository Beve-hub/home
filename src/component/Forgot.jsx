import React from 'react'

const Forgot = () => {
  return (
    <section>
      <div className='grid justify-center mt-8 w-full' >
        <div className='grid gap-4'>
      <h1 className='font-bold text-2xl'>Forgot Password</h1>
      <div className='grid '>
        <label>Email</label>
        <input type='email' placeholder='' name='email' className='border bg-transparent py-2 pl-2 w-[20rem]'/>
      </div>
      <button className='bg-[orange] p-2 flex justify-center text-white'> Send Reset Link</button>
      </div>
      </div>
    </section>
  )
}

export default Forgot
