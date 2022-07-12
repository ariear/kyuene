import Link from "next/link"
import Layout from "../../components/Layout"

const Login = () => {
    return (
        <Layout title="Login">
        <div className="min-h-screen flex justify-center items-center">
            <div className="font-publicsans shadow-xl w-[500px] px-16 pt-14 pb-10 rounded-xl border relative">
                <img src="/icon/Portal.png" className="absolute -top-16 left-0 right-0 mx-auto" alt="" />
                <p className="text-[#0078f088] text-[26px] text-center mb-10">Login</p>
                <div className="flex items-end border-b mb-8 pb-2">
                    <input type="email" placeholder="email" className="grow " />
                    <img src="/icon/email.svg" alt="" />
                </div>
                <div className="flex items-end border-b mb-10 pb-2">
                    <input type="password" placeholder="password" className="grow" />
                    <img src="/icon/visibility-off.svg" alt="" />
                </div>
                <button type="submit" className="w-full py-2 bg-[#0078f025] border border-[#0078F0] rounded-lg text-[#0078F0] font-medium mb-5">Login</button>
                <Link href="/auth/register" ><a className="underline text-blue-400">Belum punya akun ?</a></Link>
            </div>
        </div>
        </Layout>
    )
}

export default Login