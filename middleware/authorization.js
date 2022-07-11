import jwt from 'jsonwebtoken'

const authorization = (req , res) => {
    const {authorization} = req.headers
    if (!authorization) return res.status(401).end()
    
    const authSplit = authorization.split(' ')
    const [tokenType , tokenValue] = authSplit

    if (tokenType !== 'Bearer') return res.status(401).end()

    try {
        return jwt.verify(tokenValue, 'waifumulonet')
    } catch (error) {
        return res.status(401).end()
    }
}

export default authorization