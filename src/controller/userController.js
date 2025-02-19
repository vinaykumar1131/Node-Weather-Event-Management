const userService = require("../service/userServce")
const userValidation = require("../validations/userValidation")
exports.createUser = async (req, res) => {
    try {
        const { error } = userValidation.validate(req.body);
        if (error)
            return res.status(400).json({ success: false, message: error.details[0].message });
        await userService.signUpUser(req.body)
        return res.status(200).json({ success: true, message: "User has been created" })
    } catch (error) {
        let statusCode = error?.statusCode ?? 500
        return res.status(statusCode).json({ success: false, message: error.message })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { error } = userValidation.validate(req.body);
        if (error)
            return res.status(400).json({ success: false, message: error.details[0].message });
        const data = await userService.loginUser(req.body)
        return res.status(200).json({ success: true, message: "login Successfully", data })
    } catch (error) {
        let statusCode = error?.statusCode ?? 500
        return res.status(statusCode).json({ success: false, message: error.message })
    }
}