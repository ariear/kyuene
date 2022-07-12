import Head from "next/head"
import Nav from "./Nav"

const Layout = ({children, title}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <Nav />
            {children}
        </div>
    )
}

export default Layout