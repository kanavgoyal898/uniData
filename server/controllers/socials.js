const userModel = require('../models/user')

const socialsRead = async (req, res) => {
    try {
        const user = await userModel.findOne({email: req.user.email})
        if (!user) {
            return res.status(404).json({message: "User not found", success: false})
        } else {
            res.status(200).json({message: "Socials read successfully", success: true, user: user?.public})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Internal server error", success: false})
    }
}

const socialsUpdate = async (req, res) => {
    try {
        const user = await userModel.findOne({email: req.user.email})
        if (!user) {
            return res.status(404).json({message: "User not found", success: false})
        } else {
            user.public.bio = req.body?.bio
            user.public.name = req.body?.name
            user.public.profile = req.body?.profile
            user.public.socials = req.body?.socials
            await user.save()

            res.status(200).json({message: "Socials updated successfully", success: true})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Internal server error", success: false})
    }
}

module.exports = {socialsRead, socialsUpdate}
