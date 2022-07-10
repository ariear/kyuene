import connectMongo from "../../lib/connectMongo"
import Question from "../../models/question"

const questionHandler = async (req,res) => {
    if(req.method !== 'POST') return res.status(405).end()

    await connectMongo()
    const {userId, question} = req.body
    const newQuestion = await Question.create({
        userId,
        question
    })

    res.status(200).json({
        message: 'Question send succesfully',
        data: newQuestion
    })
}

export default questionHandler