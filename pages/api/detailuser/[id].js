import connectMongo from "../../../lib/connectMongo"
import User from "../../../models/user"

const detailUserHandle = async (req , res) => {
    if (req.method !== 'GET') return res.status(405).end()
    
    await connectMongo()
    const user = await User.findOne({_id : req.query.id })

    res.status(200).json({
        message: 'Successfully',
        data: user
    })
}

export default detailUserHandle