import axios from "axios";
import { useEffect, useState } from "react"
import Layout from "../components/Layout"

const Home = () => {
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
          listUser.map((user , index) => (
        <div key={index} className="flex items-center border w-[300px] rounded-lg py-2 px-3 shadow-lg mx-2 mb-2">
          <img src="/icon/Portal.png" className="w-[55px] mr-4" alt="" />
          <div>
            <p>{user.username}</p>
          </div>
        </div>
          ))
        }
      </div>
    </Layout>
  )
}

export default Home