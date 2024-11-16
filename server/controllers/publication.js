const userModel = require('../models/user')
const publicationModel = require('../models/publication')

const publicationRead = async (req, res) => {
    try {
        const user = await userModel.findOne({email: req.email})
        if (!user) {
            return res.status(404).json({message: "User not found", success: false})
        } else {
            const publications = []
            for (const publicationId of user.publications) {
                const publication = await publicationModel.findById(publicationId)
                if (publication) {
                    publications.push(publication)
                }
            }
            res.status(200).json({publications, success: true})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Internal server error", success: false})
    }
}

const publicationCreate = async (req, res) => {
    try {
        const user = await userModel.findOne({email: req.user.email})
        if (!user) {
            return res.status(404).json({message: "User not found", success: false})
        } else {
            const title = req.body.title
            const abstract = req.body.abstract
            const link = req.body.link
            const authors = [req.user.email].concat(req.body.authors)
            const newPublication = new publicationModel({title, abstract, authors, link})
            await newPublication.save()

            for (const author of authors) {
                const authorUser = await userModel.findOne({email: author})
                if (authorUser) {
                    authorUser.publications.push(newPublication._id)
                    await authorUser.save()
                } else {
                    return res.status(404).json({message: "Author not found", success: false})
                }
            }
            res.status(201).json({message: "Publication created successfully", success: true})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Internal server error", success: false})
    }
}

module.exports = {publicationRead, publicationCreate}
