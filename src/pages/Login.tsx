import React, { useRef, useState } from 'react'
import Header from '../comp/Header'

const Login: React.FC = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const emailEl = useRef<HTMLInputElement>(null);
    const passwordEl = useRef<HTMLInputElement>(null);

    const signIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!email || !password) {
            return alert("input fields cannot be empty!")
        } else {
            if (email.length <= 5) {
                alert("haha")
            } else {

            }
        }
    }

    return (
        <div className='bg-gradient-to-r from-indigo-400 to-cyan-400 h-screen flex items-center justify-center'>
            <Header />
            <div>
                <p className='text-center text-1xl text-gray-700 pb-3'>
                    Sign in your MeetMe account.
                </p>
                <form
                    onSubmit={signIn}
                    className="flex flex-col gap-2 w-screen max-w-[400px]">
                    <input
                        ref={emailEl}
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        placeholder='Email'
                        type="email"
                        className='p-10 rounded-lg border-none outline-none' />
                    <input
                        ref={passwordEl}
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        placeholder='Password'
                        type="password"
                        className='p-10 rounded-lg border-none outline-none' />
                        <div className='text-[15px] text-gray-700'>
                            Forgot Password? <span className='underline cursor-pointer hover:text-fuchsia-600'>Click here</span>
                        </div>
                    <button className='bg-gradient-to-r from-fuchsia-600 to-pink-600 p-10 rounded-lg text-white'>
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
