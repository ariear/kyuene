import connectMongo from "../../../lib/connectMongo"
import authorization from "../../../middleware/authorization"
import Question from "../../../models/question"

const questions = async (req, res) => {
    if (req.method !== 'GET') return res.status(405).end()

    const auth = await authorization(req,res)
    await connectMongo()
    const questions = await Question.find({userId: req.query.id})
    res.status(200).json({
        message: 'Question get succeffully',
        data: questions
    })
}

export default questions