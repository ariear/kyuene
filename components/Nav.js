import Cookies from "js-cookie";
import Link from "next/link"
import { useEffect, useState } from "react"
import Router from 'next/router'

const Nav = () => {
    const [token,setToken ] = useState('')
    const [isProfile, setIsProfile] = useState(false)
    const [isMenu, setIsMenu] = useState(false)

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
            <nav className="container flex items-center text-white justify-between xl:justify-around mx-auto xl:px-0 sm:px-10 px-5 py-4">
            <p className="font-semibold text-xl">Kyuene</p>
            <ul className="hidden sm:flex items-center">
                <li className="mr-6"><Link href="/"><a>Home</a></Link></li>
                {
                    token ?
                    <li className="flex items-center relative">
                        <img src="/icon/Portal.png" className="w-[45px]" onClick={() => setIsProfile(!isProfile)} alt="" />
                        <div className={isProfile ? 'absolute bg-white text-black -bottom-[150px] -left-14 font-medium py-3 px-8 rounded-lg shadow-lg' : 'hidden'}>
                            <p className="py-2 border-b"><Link href="/user"><a>Profile</a></Link></p>
                            <p className="py-2 border-b">Setting</p>
                            <p className="py-2" onClick={() => logoutHandle()} >Logout</p>
                        </div>
                    </li>
                        :
                    <li className="py-2 px-5 rounded-lg bg-[#1597E5]"><Link href="/auth/login"><a>Login</a></Link></li>
                }
            </ul>
            <ul className="sm:hidden flex items-center">
                <li><img src="/icon/menu.png" width='28' alt="" onClick={() => setIsMenu(!isMenu)} /></li>
                <div className={isMenu ? 'fixed top-0 right-0 w-[70vw] h-screen bg-[#4FBDBA] menu-mobile text-center z-20 transition-all' : 'fixed top-0 right-0 w-0 h-screen bg-[#4FBDBA] text-center z-20 transition-all overflow-hidden'}>
                    <img src="/icon/close-menu.png" className="w-[30px] absolute top-5 right-5 z-20" onClick={() => setIsMenu(!isMenu)} alt="" />
                    <div className="relative h-screen flex justify-center items-center">
                        <div>
                            <p className="mb-4"><Link href="/"><a>Home</a></Link></p>
                            {
                                token && 
                                <div>
                                    <p className="mb-4"><Link href="/user"><a>profile</a></Link></p>
                                    <p><Link href="/"><a>Setting</a></Link></p>
                                </div>
                            }
                        </div>
                        {
                            token ?
                            <button className="absolute right-5 bottom-5 text-white py-2 px-7 rounded-lg bg-red-400" onClick={() => logoutHandle()} >Logout</button>
                                :
                            <button className="absolute right-5 bottom-5 text-white py-2 px-7 rounded-lg bg-[#1597E5]"><Link href="/auth/login" ><a>Login</a></Link></button>
                        }
                    </div>
                </div>
            </ul>
            </nav>
        </nav>
    )
}

export default Nav