import { useState } from "react"
import FormAlert from "./FormAlert"

const CardQuestion = ({question, getQuestions}) => {
    const [isOpen , setIsOpen] = useState(false)

    return (
        <div className="border w-[280px] p-5 mx-2 mb-5 rounded-lg shadow bg-white">
            <p className="font-medium text-lg mb-7">{question.question}</p>
            {
                question.answer ? <p><b>Answer :</b> {question.answer}</p> : <button onClick={() => setIsOpen(true)} className="py-2 px-6 rounded-lg bg-[#4FBDBA] text-white">Jawab</button>
            }
        <FormAlert isOpen={isOpen} setIsOpen={setIsOpen} id={question._id} getQuestions={getQuestions} answer={true} />
        </div>
    )
}

export default CardQuestion