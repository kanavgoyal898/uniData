const userModel = require('../models/user')

const pictureRead = async (req, res) => {
    try {
        const user = await userModel.findOne({email: req.user.email})
        if (!user) {
            return res.status(404).json({message: "User not found", success: false})
        } else {
            res.status(200).json({message: "Picture read successfully", success: true, user: user?.public?.profile})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Internal server error", success: false})
    }
}

const pictureUpdate = async (req, res) => {
    try {
        const user = await userModel.findOne({email: req.user.email})
        if (!user) {
            return res.status(404).json({message: "User not found", success: false})
        } else {
            user.public.profile = req.body?.picture
            await user.save()

            res.status(200).json({message: "Picture updated successfully", success: true})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Internal server error", success: false})
    }
}

module.exports = {pictureRead, pictureUpdate}
