import Image from 'next/image'
import React from 'react'

export default function index() {
  return (
    <div className='h-full w-full'>
        <Image src="/Splash screen.png" alt="loading" width={200} height={100} className='h-full w-full'/>
    </div>
  )
}
