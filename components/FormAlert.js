import axios from "axios";
import { useState } from "react";

const FormAlert = (props) => {
    const {isOpen, setIsOpen , id , getQuestions, answer} = props
    const [fields , setFields] = useState({
        userId: id,
        question: ''
    })
    const [answerField, setAnswerField] = useState('')

    const addQuestionHandle = async (event) => {
        event.preventDefault();

        if (answer) {
            await axios.post(`/api/answer/${id}`, {answer: answerField})
            setIsOpen(false)
            setAnswerField('')
            getQuestions()

            return true
        }
        
        await axios.post('/api/question', fields)
        setIsOpen(false)
        setFields({...fields, question: ''})
        getQuestions()
    }

    return (
        <div className="fixed top-0 left-0 flex">
            {
                isOpen &&
                <div className="flex justify-center items-center w-screen h-screen">
                    <div className="fixed top-0 left-0 w-screen h-screen bg-[#0000005e]" onClick={() => setIsOpen(false) } ></div>
                    <div className="bg-white z-10 relative p-5 rounded-xl w-[90vw] sm:w-[400px]">
                        <p className="font-medium text-center text-xl mb-5">{answer ? 'Answer' : 'Add Question'}</p>
                        <form onSubmit={(event) => addQuestionHandle(event)} >
                            {
                                answer ?
                                <input type="text" value={answerField} onChange={(e) => setAnswerField(e.target.value)} className="w-full border py-2 px-3 rounded-lg block mb-5" placeholder="Answer" />
                                        :
                                <input type="text" value={fields.question} onChange={(e) => setFields({...fields , question: e.target.value})} className="w-full border py-2 px-3 rounded-lg block mb-5" placeholder="Question" />
                            }
                            <button className="py-2 px-5 rounded-lg bg-[#4FBDBA] text-white font-medium">Ask</button>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}

export default FormAlert