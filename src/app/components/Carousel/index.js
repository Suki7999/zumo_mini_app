'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Transition } from '@headlessui/react'

export default function ProgressSlider({ items }) {
  const duration = 5000
  const itemsRef = useRef(null)
  const frame = useRef(0)
  const firstFrameTime = useRef(performance.now())
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    firstFrameTime.current = performance.now()
    frame.current = requestAnimationFrame(animate)
    return () => {
      cancelAnimationFrame(frame.current)
    }
  }, [active])

  const animate = (now) => {
    let timeFraction = (now - firstFrameTime.current) / duration
    if (timeFraction <= 1) {
      setProgress(timeFraction * 200)
      frame.current = requestAnimationFrame(animate)
    } else {
      timeFraction = 1
      setProgress(0)
      setActive((active + 1) % items.length)
    }
  }

  const heightFix = () => {
    if (itemsRef.current && itemsRef.current.parentElement) itemsRef.current.parentElement.style.height = ``
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <div className="w-full mx-auto text-center">
      <div className="transition-all duration-150 delay-300 ease-in-out">
        <div className="relative flex flex-col" ref={itemsRef}>
          {items ? items.map((item, index) => (
            <Transition
              key={index}
              show={active === index}
              enter="transition ease-in-out duration-500 delay-200 order-first"
              enterFrom="opacity-0 scale-105"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in-out duration-300 absolute"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
              beforeEnter={() => heightFix()}
            >
              <Image className="rounded-xl" src={`${item.picture}`} width={400} height={120} alt="banner" quality={100} />
            </Transition>
          )) : (
            <p className='text-2xl text-gray-200'>Зураг байхгүй байна</p>
          )
        }

        </div>
      </div>
    </div>
  )
}