import Layout from "../../components/Layout"
import {useRouter} from 'next/router'

const UserPage = () => {
    const router = useRouter()
    const {id} = router.query

    return (
        <Layout title={id} >
            <p>User</p>
        </Layout>
    )
}

export default UserPage