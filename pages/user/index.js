import { useState , useEffect} from "react"
import Layout from "../../components/Layout"
import { authpage } from "../../middleware/authPage"
import axios from "axios"
import CardQuestion from "../../components/CardQuestion"

export function getServerSideProps(ctx){
    const auth = authpage(ctx)
    return {props: {
        dataUser: auth
    }}
}

const UserProfile = ({dataUser}) => {
    const [questions , setQuestions] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getQuestions()
    }, []);

    const getQuestions = async () => {
        setIsLoading(true)
        try {
            const fetchQuestions = await axios.get(`/api/questions/${dataUser._id}`)
            if (fetchQuestions.status === 200) {
                setQuestions(fetchQuestions.data.data)
                setIsLoading(false)
            }
        } catch (error) {
            setIsLoading(false)
        }
    }

    return (
        <Layout title={dataUser.username} >
            <div className="lg:w-[900px] mx-auto lg:px-0 sm:px-10 px-5">
                <div className="flex items-center justify-between py-7 sm:py-10 border-b mb-10">
                    <div className="flex items-end">
                        <img src="/icon/Portal.png" className="sm:w-[70px] w-[50px]" alt="" />
                        <p className="font-publicsans font-semibold mb-4 ml-3">@{dataUser.username}</p>
                    </div>
                </div>
                
                <div className="flex flex-wrap font-publicsans justify-center">
                    {
                        isLoading ? <p>Loading ...</p>
                                :
                        questions.length ?
                        questions.map((question , index) => (
                            <CardQuestion key={index} question={question} getQuestions={getQuestions} />
                        ))
                                :
                        <p>Pertanyaan Belum ada</p>
                    }
                </div>
            </div>
        </Layout>
    )
}

export default UserProfile