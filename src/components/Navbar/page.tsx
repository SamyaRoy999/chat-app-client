import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img from "../../../public/logo/8150749.jpg"

import { MdOutlineLogin } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectTrigger } from "@/components/ui/select"  
const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center '>
            <Image alt='' src={img} height={60} width={60}/>
            <h1 className='font-bold text-2xl text-blue-600'>Dation<span className='text-rose-600'>App</span></h1>
        </div>
        <ul className="menu flex items-center text-gray-600 text-sm font-bold justify-center gap-3">
            <li>
                <Link href={"/mamberPage"}>Mamber</Link>
            </li>
            <li>
                <Link href={"/lists"}>lists</Link>
            </li>
            <li>
                <Link href={"/massages"}>massages</Link>
            </li>
        </ul>
        <Select >
          <SelectTrigger className="w-[60px] border-none">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </SelectTrigger>
          <SelectContent>      
              <Link  href={'/auth/Login'} ><MdOutlineLogin />Login</Link>
              <Link  href={'/auth/Register'}  ><FaArrowTrendUp/>Register</Link>
          </SelectContent>
        </Select>
        
    </div>
  )
}

export default Navbar
