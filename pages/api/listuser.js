import connectMongo from "../../lib/connectMongo"
import User from "../../models/user"

const listUserHandle = async (req,res) => {
    if(req.method !== 'GET') return res.status(405).end()

    await connectMongo()
    const listUser = await User.find({})

    res.status(200).json({
        message: 'Successfully',
        data: listUser
    })
}

export default listUserHandle