import Cookies from "js-cookie";
import Link from "next/link"
import { useEffect, useState } from "react"
import Router from 'next/router'

const Nav = () => {
    const [token,setToken ] = useState('')

    useEffect(() => {
        setToken(Cookies.get('token'))    
    }, []);

    const logoutHandle = () => {
        Cookies.remove('token')
        setToken('')

        Router.replace('/')
    }

    return (
        <nav className="bg-[#4FBDBA] font-publicsans">
            <nav className="container flex items-center text-white justify-around mx-auto py-4">
            <p className="font-semibold text-xl">Kyuene</p>
            <ul className="flex items-center">
                <li className="mr-6"><Link href="/"><a>Home</a></Link></li>
                {
                    token ?
                    <li className="flex items-center">
                        <Link href="/user" ><a><img src="/icon/Portal.png" className="w-[50px] mr-4" alt="" /></a></Link>
                        <button className="py-2 px-5 rounded-lg bg-red-400 cursor-pointer" onClick={() => logoutHandle()} >Logout</button>
                    </li>
                        :
                    <li className="py-2 px-5 rounded-lg bg-[#1597E5]"><Link href="/auth/login"><a>Login</a></Link></li>
                }
            </ul>
            </nav>
        </nav>
    )
}

export default Nav