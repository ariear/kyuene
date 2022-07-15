import Layout from "../../components/Layout"
import axios from "axios"
import { useEffect, useState } from "react"
import FormAlert from "../../components/FormAlert"

export function getServerSideProps(ctx){
    const {id} = ctx.params
    return {
        props: {id}
    }
}

const UserPage = (props) => {
    const {id} = props
    const [isLoading , setIsLoading] = useState(false)
    const [questions , setQuestions] = useState([])
    const [username, setUsername] = useState('')
    const [isOpen , setIsOpen ] = useState(false)
    const [inputSearch, setInputSearch] = useState('')

    useEffect(() => {
        getUser()
        getQuestions()
    }, []);

    const getUser = async () => {
        try {
            const fetchUser = await axios.get(`/api/detailuser/${id}`)
            setUsername(fetchUser.data.data.username)
        } catch (error) {
            console.log(error);
        }
    }

    const getQuestions = async () => {
        setIsLoading(true)
        try {
            const fetchQuestions = await axios.get(`/api/questions/${id}`)
            if (fetchQuestions.status === 200) {
                setQuestions(fetchQuestions.data.data)
                setIsLoading(false)
            }
        } catch (error) {
            setIsLoading(false)
        }
    }

    return (
        <Layout title={username || 'loading'} >
            <div className="lg:w-[900px] mx-auto lg:px-0 sm:px-10 px-5">
                <div className="flex items-center justify-between py-7 sm:py-10 border-b mb-10">
                    <div className="flex items-end">
                        <img src="/icon/Portal.png" className="sm:w-[70px] w-[50px]" alt="" />
                        <p className="font-publicsans font-semibold mb-4 ml-3">@{username}</p>
                    </div>
                    <button className="bg-[#4FBDBA] py-3 px-7 text-white font-medium rounded-xl sm:text-base text-sm" onClick={() => setIsOpen(true)} >Ask Question</button>
                </div>
                    <FormAlert isOpen={isOpen} setIsOpen={setIsOpen} id={id} getQuestions={getQuestions} />
                    <input type="search" placeholder="Search question" value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} className="w-[70vw] sm:w-[290px] py-2 px-4 rounded-lg border shadow-md mb-10" />
                <div className="flex flex-wrap font-publicsans justify-center">
                    {
                        isLoading ? <p>Loading ...</p>
                                :
                        questions.length ?
                        questions.filter((question) => {
                            if (inputSearch === '') {
                                return question
                              }else if (question.question.toLowerCase().includes(inputSearch.toLowerCase())) {
                                return question
                              }
                              return false
                        }).map((question , index) => (
                            <div key={index} className="border w-[280px] p-5 mx-2 mb-5 rounded-lg shadow bg-white">
                                <p className="font-medium text-lg mb-3">{question.question}</p>
                                {
                                    question.answer && <p><b>Answer :</b> {question.answer}</p>
                                }
                            </div>
                        ))
                                :
                        <p>Pertanyaan Belum ada</p>
                    }
                </div>
            </div>
        </Layout>
    )
}

export default UserPage