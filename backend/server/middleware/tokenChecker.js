const jwt = require('jsonwebtoken')
const secretKey = '1q2w3e4r5t'


module.exports = (req, res, next) => {
    let token = req.headers['authorization']

    if (!!token)
        jwt.verify(token, secretKey, (err, data) => {
            if (err)
                res.send({ success: false, status: 300, message: "Unauthorized Access" })
            else
                next()
        })
    else
        res.send({ success: false, status: 403, message: "No token found" })

        
}