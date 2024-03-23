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
    <Layout>
      <p className='text-2xl text-white'>{pathname}</p>
      {
        videos && videos.map((v) => (
          <CldVideoPlayer width="400" height="260" src={`${v.link_to_connect}`}/>
        ))
      }
    </Layout>
  )
}
