'use client'
import gsap from 'gsap'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    gsap.registerEffect({
      name: 'blink',
      effect: (targets: any, config: any) => {
        var tl = gsap.timeline({ repeat: -1, delay: config.delay })
        tl.to(targets, {
          duration: config.duration,
          opacity: 0,
        })
        tl.to(targets, {
          duration: config.duration,
          opacity: 1,
        })
        return tl
      },
      defaults: { duration: 7, delay: 0 },
    })

    gsap.effects.blink('.galaxy-1')
    gsap.effects.blink('.galaxy-2', { duration: 6, delay: 7 })
    gsap.effects.blink('.galaxy-3', { duration: 5, delay: 7 })
  }, [])

  return (
    <main className="relative h-screen w-full bg-black">
      {/* <Image
            src="/static/bmw.jpg"
            alt=""
            className="h-full w-full bg-galaxy-3"
            fill={true}
            objectFit="contain"
          /> */}
      <div className="fixed h-full w-full bg-gradient-to-b from-black from-50% via-purple-950 via-80% to-indigo-800" />
      <div className="galaxy-1 absolute h-full w-full bg-galaxy-1" />
      <div className="galaxy-2 absolute h-full w-full bg-galaxy-2" />
      <div className="galaxy-3 absolute h-full w-full bg-galaxy-3" />
      {/* <div className="flex w-full flex-grow flex-col items-center bg-blue-50">
            <div className="green h-[50px] w-[50px] rounded-md bg-green-500" />
            <div className="purple h-[50px] w-[50px] rounded-md bg-purple-500" />
            <div className="blue h-[50px] w-[50px] rounded-md bg-blue-500" />
          </div> */}
    </main>
  )
}
