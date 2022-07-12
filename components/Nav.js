import Link from "next/link"

const Nav = () => {
    return (
        <nav className="bg-[#4FBDBA] font-publicsans">
            <nav className="container flex items-center text-white justify-around mx-auto py-4">
            <p className="font-semibold text-xl">Kyuene</p>
            <ul className="flex items-center">
                <li className="mr-6"><Link href="/"><a>Home</a></Link></li>
                <li className="py-2 px-5 rounded-lg bg-[#1597E5]"><Link href="/auth/login"><a>Login</a></Link></li>
            </ul>
            </nav>
        </nav>
    )
}

export default Nav