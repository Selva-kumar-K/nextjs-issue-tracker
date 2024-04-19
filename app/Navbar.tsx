'use client'

import Link from 'next/link'
import React from 'react'
import {AiFillBug} from 'react-icons/ai'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'
 
const Navbar = () => {
    const pathName = usePathname()

    const links = [
        {label : 'Dashboard', href: '/'},
        {label : 'issues', href: '/issues'},
    ]
  return (
    <div className='flex space-x-6 border-b px-6 h-14 mb-5 items-center'>
        <Link href={'/'}><AiFillBug/></Link>
        <ul className='flex space-x-6'>
           {links.map(link => 
           <Link 
            key={link.href} 
            href={link.href} className={
                classNames({
                    'text-zinc-900' : link.href === pathName,
                    'text-zinc-500' : link.href !== pathName,
                    'hover:text-zinc-800' : true
                })
            }>{link.label}</Link>)}
        </ul>
    </div>
  )
}

export default Navbar