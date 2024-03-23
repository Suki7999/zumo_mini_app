'use client'
import React, { useEffect, useState } from 'react'
import Layout from '/src/components/Layouts'
import { usePathname } from 'next/navigation';
import { axiosInstance } from '../axios/axiosInstance';
import Image from 'next/image';

export default function page() {
  const pathname  = usePathname();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      let response = await axiosInstance.get('/api/sales/v1/rest/videos/');
      setVideos(response.data.result);
    }
    fetchVideos();
  }, [])
  return (
    <Layout layoutType="video">
      <div className='bg-violet-500 flex items-center justify-items-start w-full h-[68px] rounded-b-md text-white my-6 cursor-pointer'>
          <Image src={pathname.includes('video') ? `/images/logo/1.png` : ''} width={46} height={39} alt=''/>
          <p className='text-[30px] ml-28 font-bold text-center'>100</p>
      </div>
      {
        videos && videos.map((v, i) => (
          <div className='bg-inherit px-1 static'>
            <div className='bg-violet-500 rounded-lg w-[97px] h-[37.3px] absolute left-[72%] flex justify-between items-center p-2 mt-2'>
              <p className='text-white'>{v.loyalty_amount}</p>
              <img className='w-[56px] h-[37.3px]' src="/images/logo/7.png" alt="money" />
            </div>
            <iframe key={i} className='rounded-t-lg h-[219px] w-full static' src={`https://www.youtube.com/embed/${v.video_link}?controls=0`} allowFullScreen />
          </div>
        ))
      }
    </Layout>
  )
}
