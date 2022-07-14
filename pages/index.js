import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react"
import Layout from "../components/Layout"
import { isAuthPage } from "../middleware/authPage";

export function getServerSideProps(ctx){
  const isauth = isAuthPage(ctx)

  return {
    props: {
      isauth
    }
  }
}

const Home = ({isauth}) => {
  const [loading, setLoading] = useState(false)
  const [listUser , setListUser ] = useState([])

  useEffect(() => {
    getListUserHandle()
  }, []);
  
  const getListUserHandle = async () => {
    setLoading(true)
    try {
      const getListUser = await axios.get('/api/listuser')
      setListUser(getListUser.data.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <Layout title="Kyuene">
      <div className="container mx-auto flex justify-center py-10">
        {
          loading ? <p>Loading ...</p>
                  :
          listUser.filter((user) => {
            if (user._id !== isauth._id) {
              return user
            }
            if (!isauth) {
              return user
            } 
          } ).map((user , index) => (
            <div key={index} className="border w-[300px] rounded-lg py-2 px-3 shadow-lg mx-2 mb-2">
          <Link href={`/user/${user._id}`} >
            <a>
              <div className="flex items-center ">
                <img src="/icon/Portal.png" className="w-[55px] mr-4" alt="" />
                <div>
                  <p>{user.username}</p>
                </div>
              </div>
            </a>
          </Link>
            </div>
          ))
        }
      </div>
    </Layout>
  )
}

export default Home