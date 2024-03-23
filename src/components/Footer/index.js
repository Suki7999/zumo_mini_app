import Image from 'next/image'
import React from 'react'

export default function index() {
  return (
    <div className='fixed bottom-0 left-0 w-full flex justify-around items-center'>
        <Image src="/images/logo/Bottom menu.png" width={430} height={128} alt="footer image"/>
    </div>
  )
}
