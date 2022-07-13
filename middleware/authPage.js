const unAuthPage = (ctx) => {
    const {token} = ctx.req.cookies
    if (token) {
        return ctx.res.writeHead(302,{
            location: '/'
        }).end()
    }
}

const authpage = (ctx) => {
    
}
export {authpage , unAuthPage}