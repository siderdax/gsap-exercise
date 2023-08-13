'use client'
import gsap from 'gsap'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    gsap.registerEffect({
      name: 'blink',
      effect: (targets: any, config: any) => {
        var tl = gsap.timeline({
          repeat: -1,
          yoyo: true,
          delay: config.delay,
          repeatDelay: 2,
        })
        tl.to(targets, {
          duration: config.duration,
          opacity: 1,
        })
        return tl
      },
      defaults: { duration: 10, delay: 0 },
    })

    gsap.set('.galaxy-1', { opacity: 0 })
    gsap.set('.galaxy-2', { opacity: 0 })
    gsap.set('.galaxy-3', { opacity: 0 })
    gsap.set('.galaxy-4', { opacity: 0 })
    gsap.effects.blink('.galaxy-1', { duration: 4 })
    gsap.effects.blink('.galaxy-2', { duration: 3, delay: 1 })
    gsap.effects.blink('.galaxy-3', { duration: 2, delay: 2 })
    gsap.effects.blink('.galaxy-4', { duration: 1, delay: 3 })
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
      <div className="galaxy-4 absolute h-full w-full bg-galaxy-4" />
      {/* <div className="flex w-full flex-grow flex-col items-center bg-blue-50">
            <div className="green h-[50px] w-[50px] rounded-md bg-green-500" />
            <div className="purple h-[50px] w-[50px] rounded-md bg-purple-500" />
            <div className="blue h-[50px] w-[50px] rounded-md bg-blue-500" />
          </div> */}
    </main>
  )
}
