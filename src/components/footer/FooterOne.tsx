import React from 'react'
import { Link } from 'react-router-dom'

function FooterOne() {
  return (
    <div className='flex justify-between px-[10%] bg-white items-center'>
      <div>
        <h2 className='font-bold text-black text-3xl mb-[0.5rem] mt-[1rem]'>GameCloud.</h2>
        <div className='flex gap-3 items-center'>
          <Link to='#' className='font-light py-2'>Privarcy Policy</Link>
          <p className='font-thin'>|</p>
          <Link className='font-light py-2' to='#'>Legal info</Link>
          <p className='font-thin'>|</p>
          <Link className='font-light py-2' to='#'>Contact Us</Link>
        </div>
        <p className='font-thin text-sm'>Copyright © 2024 GameCloud Corporation</p>
      </div>
      <h1 className='font-bold'>Viet Nam</h1>
    </div>
  )
}

export default FooterOne
