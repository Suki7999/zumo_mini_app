'use client'
import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../axios/axiosInstance'
import Layout from '/src/components/Layouts'
import ProgressSlider from '/src/app/components/Carousel';
import Image from 'next/image';

export default function page({...props}) {
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
        <section className='flex justify-between w-full'>
            <p className="text-[14px] text-white text-center p-1 uppercase bg-violet-500 rounded-md w-[110px] h-[100%] select-none whitespace-nowrap">lvl.1</p>
            <p className="text-[14px] text-white text-center p-1 uppercase bg-violet-500 rounded-md w-[110px] h-[100%] select-none whitespace-nowrap">30.000</p>
            <p className="text-[14px] text-white text-center p-1 uppercase bg-violet-500 rounded-md w-[110px] h-[100%] select-none whitespace-nowrap">30₮</p>
        </section>
        <section className='flex justify-start py-2'>
           <ProgressSlider items={banner} />
        </section>
        <div className='flex justify-start gap-1'>
            <p className="text-[14px] border border-green-300 text-white text-center p-1 rounded-md w-[110px] h-[100%] select-none whitespace-nowrap">Даалгавар</p>
            <p className="text-[14px] border border-green-300 text-white text-center p-1 rounded-md w-[110px] h-[100%] select-none whitespace-nowrap">Их хүрд</p>
            <p className="text-[14px] border border-green-300 text-white text-center p-1 rounded-md w-[110px] h-[100%] select-none whitespace-nowrap">Судалгаа</p>
            {/* /* <p className="text-[14px] border border-yellow-300 text-white text-center p-1 rounded-md w-[110px] h-[100%] select-none whitespace-nowrap">Видио</p> */}
        </div>
        <div className='my-1'>
            <p className="text-2xl text-gray-100 cursor-pointer text-left">
                Маркет
            </p>
            <button className='box-border h-[130px] w-[112px] p-4 bg-violet-500 rounded-lg content-center mt-2'>
                <Image src='/images/logo/1.png' width={123} height={140} alt='market'/>
                <p className='text-center text-sm text-gray-100'>ТҮЦ</p>
            </button>
        </div>
        <div className='my-1'>
            <p className="text-2xl text-gray-100 cursor-pointer text-left">
                Цуглуулах
            </p>
            <div className='flex justify-items-start gap-2'>
                <div className='box-border h-[130px] w-[112px] p-4 bg-violet-500 rounded-lg content-center mt-2'>
                    <Image src='/images/logo/1.png' width={123} height={140} alt='market'/>
                    <p className='text-center text-sm text-gray-100'>ТҮЦ</p>
                </div>
                <div className='box-border h-[130px] w-[112px] p-4 bg-violet-500 rounded-lg content-center mt-2'>
                    <Image src='/images/logo/2.png' width={123} height={140} alt='market'/>
                    <p className='text-center text-sm text-gray-100'>ТҮЦ</p>
                </div>
                <div className='box-border h-[130px] w-[112px] p-4 bg-violet-500 rounded-lg content-center mt-2'>
                    <Image src='/images/logo/3.png' width={123} height={140} alt='market'/>
                    <p className='text-center text-sm text-gray-100'>ТҮЦ</p>
                </div>
            </div>
        </div>
        <div className='mt-10'>
            <p className="text-2xl text-gray-100 cursor-pointer text-left">
                Зарцуулах
            </p>
            <div className='flex justify-items-start gap-2'>
                <div className='box-border h-[130px] w-[112px] p-4 bg-violet-500 rounded-lg content-center mt-2'>
                    <Image src='/images/logo/4.png' width={123} height={140} alt='market'/>
                    <p className='text-center text-sm text-gray-100'>ТҮЦ</p>
                </div>
                <div className='box-border h-[130px] w-[112px] p-4 bg-violet-500 rounded-lg content-center mt-2'>
                    <Image src='/images/logo/5.png' width={123} height={140} alt='market'/>
                    <p className='text-center text-sm text-gray-100'>ТҮЦ</p>
                </div>
                <div className='box-border h-[130px] w-[112px] p-4 bg-violet-500 rounded-lg content-center mt-2'>
                    <Image src='/images/logo/6.png' width={123} height={140} alt='market'/>
                    <p className='text-center text-sm text-gray-100'>ТҮЦ</p>
                </div>
            </div>
        </div>
    </Layout>
)
}
