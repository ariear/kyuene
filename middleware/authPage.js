import jwt from 'jsonwebtoken'

const unAuthPage = (ctx) => {
    const {token} = ctx.req.cookies
    if (token) {
        return ctx.res.writeHead(302,{
            location: '/'
        }).end()
    }
}

const authpage = (ctx) => {
    const {token} = ctx.req.cookies
    if (!token) {
        return ctx.res.writeHead(302, {
            location: '/auth/login'
        }).end()
    }

    return jwt.verify(token,process.env.DB_SECRET_KEY)
}

const isAuthPage = (ctx) => {
    const {token} = ctx.req.cookies
    if (token) {
        return jwt.verify(token,process.env.DB_SECRET_KEY)
    }

    return {}
}

export {authpage , unAuthPage, isAuthPage}