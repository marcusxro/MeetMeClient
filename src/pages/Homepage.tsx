import React, { useState } from 'react';
import Header from '../comp/Header';
import { useNavigate } from 'react-router-dom';

const Homepage: React.FC = () => {
    const nav = useNavigate()


    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    return (
        <div className="bg-gradient-to-r from-indigo-400 to-cyan-400 h-screen flex flex-col items-start text-white w-full">
            <Header />
            <section className='w-full h-full flex flex-col items-center pt-[20vh] px-5'>
                <div>
                    <h1 className='text-[6.3vw] md:text-[5vw] text-center font-bold flex items-center gap-3 leading-[90%] '>
                        Connect
                        <span className='bg-gray-500 p-3 rounded-lg'>
                            <svg width="3vw" height="3vw" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-pink-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 15c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m5.415 4.946c-1 .256-1.989.482-3.324.482-3.465 0-7.091-2.065-7.091-5.423 0-3.128 3.14-5.672 7-5.672 3.844 0 7 2.542 7 5.672 0 1.591-.646 2.527-1.481 3.527l.839 2.686-2.943-1.272zm-13.373-3.375l-4.389 1.896 1.256-4.012c-1.121-1.341-1.909-2.665-1.909-4.699 0-4.277 4.262-7.756 9.5-7.756 5.018 0 9.128 3.194 9.467 7.222-1.19-.566-2.551-.889-3.967-.889-4.199 0-8 2.797-8 6.672 0 .712.147 1.4.411 2.049-.953-.126-1.546-.272-2.369-.483m17.958-1.566c0-2.172-1.199-4.015-3.002-5.21l.002-.039c0-5.086-4.988-8.756-10.5-8.756-5.546 0-10.5 3.698-10.5 8.756 0 1.794.646 3.556 1.791 4.922l-1.744 5.572 6.078-2.625c.982.253 1.932.407 2.85.489 1.317 1.953 3.876 3.314 7.116 3.314 1.019 0 2.105-.135 3.242-.428l4.631 2-1.328-4.245c.871-1.042 1.364-2.384 1.364-3.75" />
                            </svg>
                        </span>
                        and Collaborate</h1>
                    <h1 className=' text-[6.3vw] md:text-[5vw] text-center font-bold leading-[90%]'>
                        Anytime, Anywhere!</h1>
                </div>
                <section className='mt-[20px] md:mt-[40px] flex gap-[10px]'>
                    <button
                        onClick={() => {
                            nav('/Login')
                        }}
                        className='bg-gradient-to-r from-fuchsia-600 to-pink-600 py-[10px] px-[20px] font-semibold rounded-md hover:bg-gray-400 duration-200 ease-linear'>Try MeetMe</button>
                    <button className='bg-white py-[10px] px-[20px] font-semibold rounded-md text-black hover:bg-gray-400 duration-200 ease-linear'>Watch Free Demo</button>
                </section>
                <section className='flex gap-2 mt-10 text-sm text-gray-500 py-[10px]'>
                    <div>
                        Free of use
                    </div>
                    <div>
                        -
                    </div>
                    <div>
                        Developed by Marcus
                    </div>
                </section>

                <section className='w-full max-w-[1200px] bg-black h-full rounded-lg'>
                </section>
            </section>

        </div>
    );
}

export default Homepage;
