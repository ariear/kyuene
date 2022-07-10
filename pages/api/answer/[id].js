import connectMongo from "../../../lib/connectMongo"
import Question from "../../../models/question"

const answerHandle = async (req, res) => {
    if(req.method !== 'POST') return res.status(405).end()

    await connectMongo()
    const idquestion = req.query.id
    
    const questionUpdated = await Question.updateOne({_id: idquestion}, {
        answer: req.body.answer
    })

    res.status(200).json({
        message: 'Success',
        data: questionUpdated
    })
}

export default answerHandle