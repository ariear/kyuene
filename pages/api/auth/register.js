import connectMongo from "../../../lib/connectMongo"
import User from "../../../models/user"
import bcrypt from 'bcryptjs'

const registerHandler = async (req, res) => {
    if(req.method !== 'POST') return res.status(405).end()
    
    await connectMongo()
    const {username , email , password} = req.body

    const salt = bcrypt.genSaltSync(10)
    const passwordHash = bcrypt.hashSync(password , salt)

    const newUser = await User.create({
        username,
        email,
        password: passwordHash
    })

    res.status(200).json({
        message: 'Register Succesfully',
        data: newUser
    })
}

export default registerHandler