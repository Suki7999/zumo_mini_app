'use client'
import React, { useEffect, useState } from 'react'
import Layout from '/src/components/Layouts'
import { usePathname } from 'next/navigation';
import { CldVideoPlayer } from 'next-cloudinary';
import { axiosInstance } from '../axios/axiosInstance';

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
      {/* <p className='text-2xl text-white'>{pathname}</p> */}
      {
        videos && videos.map((v, i) => (
          <iframe key={i} className='rounded-t-lg h-[300px] w-full' src={`https://www.youtube.com/embed/${v.video_link}?controls=0`} allowfullscreen/>
        ))
      }
    </Layout>
  )
}
