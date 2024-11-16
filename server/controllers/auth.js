const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel = require('../models/user')

const signin = async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await userModel.findOne({email})
        if (!user) {
            return res.status(403).json({message: "User not found", success: false})
        } else {
            const isValidPassword = await bcrypt.compare(password, user.password)
            if (!isValidPassword) {
                return res.status(403).json({message: "Invalid password", success: false})
            } else {
                const jwtToken = jwt.sign({_id: user._id, email: user.email}, process.env.JWT_SECRET_KEY, {expiresIn: '24h'})
                res.status(200).json({message: "Signin successful", success: true, jwtToken: jwtToken, email: email})
            }
        }
    } catch (error) {
        res.status(500).json({message: "Internal server error", success: false})
    }
}

const signup = async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await userModel.findOne({email})
        if (user) {
            return res.status(409).json({message: "User already exists", success: false})
        } else {
            const newUser = new userModel({email, password})
            newUser.password = await bcrypt.hash(password, 10)
            await newUser.save()
            res.status(201).json({message: "Signup successful", success: true})
        }
    } catch (error) {
        res.status(500).json({message: "Internal server error", success: false})
    }
}

module.exports = {signin, signup}
