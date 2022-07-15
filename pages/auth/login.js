import Link from "next/link"
import { useState } from "react"
import Layout from "../../components/Layout"
import axios from 'axios'
import Router from "next/router"
import Cookies from "js-cookie"
import { unAuthPage } from "../../middleware/authPage"

export function getServerSideProps (ctx){
    unAuthPage(ctx)

    return {props: {}}
}

const Login = () => {
    const [fields, setFields] = useState({
        email: '',
        password: ''
    })

    const loginHandle = async (event) => {
        event.preventDefault();
        const loginReq = await axios.post('/api/auth/login', fields)
        if (loginReq.status === 200) {
            Cookies.set('token', loginReq.data.token)
            Router.replace('/')
        }
    }

    return (
        <Layout title="Login">
        <div className="min-h-screen flex justify-center items-center">
            <div className="font-publicsans shadow-xl w-[85vw] sm:w-[500px] px-6 sm:px-16 pt-14 pb-10 rounded-xl border relative bg-white">
                <img src="/icon/Portal.png" className="absolute -top-8 sm:-top-16 left-0 right-0 mx-auto w-[70px] sm:w-[100px]" alt="" />
                <p className="text-[#0078f088] text-[26px] text-center mb-10">Login</p>
                <form onSubmit={(event) => loginHandle(event) } >
                    <div className="flex items-end border-b mb-8 pb-2">
                        <input type="email" placeholder="email" value={fields.email}  onChange={(e) => setFields({...fields, email: e.target.value})} className="grow bg-transparent" />
                        <img src="/icon/email.svg" alt="" />
                    </div>
                    <div className="flex items-end border-b mb-10 pb-2">
                        <input type="password" placeholder="password" value={fields.password}  onChange={(e) => setFields({...fields, password: e.target.value})} className="grow bg-transparent" />
                        <img src="/icon/visibility-off.svg" alt="" />
                    </div>
                    <button type="submit" className="w-full py-2 bg-[#0078f025] border border-[#0078F0] rounded-lg text-[#0078F0] font-medium mb-5">Login</button>
                </form>
                <Link href="/auth/register" ><a className="underline text-blue-400 sm:text-base text-sm">Belum punya akun ?</a></Link>
            </div>
        </div>
        </Layout>
    )
}

export default Login