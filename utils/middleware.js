export const isUser = (req,res, next) => {
    if(req.body.role === "admin"){
        console.log("User OK")
    }else {
        res.redirect(401, "/")
    }
    next()
}