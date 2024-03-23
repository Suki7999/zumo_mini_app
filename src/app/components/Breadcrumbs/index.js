import { useRouter } from 'next/navigation'
import React from 'react'

export default function index({ crumb , ...props}) {
  const router = useRouter();
  return (
    <div className='bg-violet-500 flex items-center justify-items-start w-full h-[128px] rounded-b-md text-white pl-4 cursor-pointer'>
      <button onClick={() => router.push('/')}>
        <svg width="40" height="31" viewBox="0 0 40 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M38 15.5587H2.16617" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <path d="M14.7564 29.1174L2.56732 16.9283C1.81089 16.172 1.81089 14.9455 2.56732 14.1891L14.7564 2" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </button>
      <p className='text-[25px] ml-28'>{crumb ? crumb : ''}</p>
    </div>
  )
}
