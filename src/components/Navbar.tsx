'use client'
import React from 'react'
import Link from 'next/link'
import { ModeToggle } from './ToggleMode'


const Navbar = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 mt-10">
        <nav className="w-full relative flex items-center justify-between max-w-2x1 mx-auto px-4 py-5">
      <Link href="/" className='font-bold text-3xl'>
      Creative<span className='text-red-600 px-2'>Blogs</span>
      </Link>
      <ModeToggle/>
      </nav>
      </div>
  )
}

export default Navbar
