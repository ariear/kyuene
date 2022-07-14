import axios from "axios";
import { useState } from "react";

const FormAlert = (props) => {
    const {isOpen, setIsOpen , id , getQuestions} = props
    const [fields , setFields] = useState({
        userId: id,
        question: ''
    })

    const addQuestionHandle = async (event) => {
        event.preventDefault();
        
        await axios.post('/api/question', fields)
        setIsOpen(false)
        setFields({...fields, question: ''})
        getQuestions()
    }

    return (
        <div className="absolute top-0 left-0 flex">
            {
                isOpen &&
                <div className="flex justify-center items-center w-screen h-screen">
                    <div className="absolute top-0 left-0 w-screen h-screen bg-[#0000005e]" onClick={() => setIsOpen(false) } ></div>
                    <div className="bg-white z-10 relative p-5 rounded-xl">
                        <p className="font-medium text-center text-xl mb-5">Add Question</p>
                        <form onSubmit={(event) => addQuestionHandle(event)} >
                            <input type="text" value={fields.question} onChange={(e) => setFields({...fields , question: e.target.value})} className="w-[300px] border py-2 px-3 rounded-lg block mb-5" placeholder="Question" />
                            <button className="py-2 px-5 rounded-lg bg-[#4FBDBA] text-white font-medium">Ask</button>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}

export default FormAlert