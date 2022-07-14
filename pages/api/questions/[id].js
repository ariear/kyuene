import connectMongo from "../../../lib/connectMongo"
import Question from "../../../models/question"

const questions = async (req, res) => {
    if (req.method !== 'GET') return res.status(405).end()

    await connectMongo()
    const questions = await Question.find({userId: req.query.id})
    res.status(200).json({
        message: 'Question get succeffully',
        data: questions
    })
}

export default questions