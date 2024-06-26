import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Header: React.FC = () => {

    const [isShow, setIsShow] = useState<boolean>(false)
    const nav = useNavigate()

    

    return (
        <header className='w-full flex justify-between p-5 items-center fixed top-0 left-0'>
            <div className="flex gap-9 items-center">
                <div 
                onClick={() => {
                    nav('/')
                }}
                className='font-bold text-3xl cursor-pointer text-fuchsia-600'>
                    MeetMe
                </div>
                <div className="hidden md:flex items-center gap-9 text-gray-800">
                    <div className="hidden md:flex cursor-pointer items-center hover:text-gray-200 hover:underline">
                        Features
                    </div>
                    <div className="cursor-pointer flex items-center hover:text-gray-200">
                        Pricing
                    </div>
                    <div className="cursor-pointer flex items-center hover:text-gray-200">
                        Automation
                    </div>
                </div>
            </div>

            <div className='hidden md:flex items-center gap-8'>
                <button
                    onClick={() => {
                        nav('/Login')
                    }}
                    className='cursor-pointer'>
                    Customer Login
                </button>
                <button className='bg-gradient-to-r from-fuchsia-600 to-pink-600 py-2 px-5 rounded-lg cursor-pointer'>
                    Sign Up
                </button>
            </div>

            <div
                onClick={() => { setIsShow(!isShow) }}
                className='flex cursor-pointer flex-col relative gap-1 md:hidden '>
                <div className='h-0.5 bg-white w-[25px]'>
                </div>
                <div className='h-0.5 bg-white w-[20px]'>
                </div>
                <div className='h-0.5 bg-white w-[20px]'>
                </div>
            </div>

            {
                isShow &&
                <div className='flex text-white flex-col gap-1 bg-gray-900 rounded-md absolute right-20 top-[55px] overflow-hidden  md:hidden'>
                    <div className="flex cursor-pointer items-center hover:cursor-pointer px-[20px] py-[10px] border-b border-gray-800 hover:bg-slate-500">
                        Features
                    </div>
                    <div className="flex cursor-pointer items-center hover:cursor-pointer px-[20px] py-[10px] border-b border-gray-800 hover:bg-slate-500">
                        Pricing
                    </div>
                    <div className="flex cursor-pointer items-center hover:cursor-pointer px-[20px] py-[10px] border-b border-gray-800 hover:bg-slate-500">
                        Automation
                    </div>
                    <div className="flex cursor-pointer items-center hover:cursor-pointer px-[20px] py-[10px] border-b border-gray-800 hover:bg-slate-500">
                        Customer Login
                    </div>
                    <div className="flex cursor-pointer items-center hover:cursor-pointer px-[20px] py-[10px] border-b border-gray-800 hover:bg-slate-500">
                        Sign Up
                    </div>
                </div>

            }

        </header>
    )
}

export default Header