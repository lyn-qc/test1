"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
export default function Header() {
    const usepath = usePathname()
   
    
  return (
    <div>
      <div className="absolute z-10 w-full">
        <div  className="flex justify-between container mx-auto  p-8">
          <Link href='/dash' className="text-3xl font-bold">Home</Link>
          <div className="space-x-3 text-xl">
            <Link href='/pageone' className={clsx({"text-amber-300":usepath=='/pageone'})}>Pageone</Link>
            <Link href='/pagetwo' className={clsx({"text-amber-300":usepath=='/pagetwo'})}>Pagetwo</Link>
          </div>
          </div>  
        </div>
    </div>
  )
}
