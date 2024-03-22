'use client'
import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../axios/axiosInstance'
import Layout from '/src/components/Layouts'
export default function page() {
    const [banner, setBanner] = useState([]);
    useEffect(() => {
        const fetchBanner = async () => {
            const response = await axiosInstance.get('/api/sales/v1/rest/banner/');
            setBanner(response.data.result);
        }
        fetchBanner();
    }, [])
return (
    <Layout>
        <div className=' text-2xl'>
            {
                banner && banner.length > 0 ? banner.map((b) => (
                    <>
                    <img src={b.picture}/>
                    <p>{b.title}</p>
                    </>
                )) : <>Loading page...</>
            }
        </div>
    </Layout>
)
}
