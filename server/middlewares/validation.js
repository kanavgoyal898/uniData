const jwt = require('jsonwebtoken')

const ensureValidation = (req, res, next) => {
    const auth = req.headers['authorization']
    if (auth) {
        const decoded = jwt.verify(auth, process.env.SECRET_KEY)
        if (decoded) {
            req.user = decoded
            next()
        } else {
            return res.status(403).json({message: "Unauthorized access, JWT token is invalid"})
        }
    } else {
        return res.status(403).json({message: "Unauthorized access, JWT token is missing"})
    }
}

module.exports = ensureValidation
