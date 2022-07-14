import Layout from "../../components/Layout"
import { authpage } from "../../middleware/authPage"

export function getServerSideProps(ctx){
    const auth = authpage(ctx)
    return {props: {
        dataUser: auth
    }}
}

const UserProfile = ({dataUser}) => {
    
    return (
        <Layout title={'Profile'} >
            <p>{dataUser.username}</p>
        </Layout>
    )
}

export default UserProfile