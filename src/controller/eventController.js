const eventService = require("../service/eventService")
const eventValidation = require("../validations/eventValidate")
exports.createEvent = async (req, res) => {
    try {
        const { error } = eventValidation.validate(req.body);
        if (error)
            return res.status(400).json({ success: false, message: error.details[0].message });
        await eventService.createEvent(req.body, req.user._id)
        return res.status(200).json({ success: true, message: "event has been created" })
    } catch (error) {
        let statusCode = error?.statusCode ?? 500
        return res.status(statusCode).json({ success: false, message: error.message })
    }
}

exports.getAll = async (req, res) => {
    try {
        let page = parseInt(req.query.page) || 1;   // Default to page 1
        let limit = parseInt(req.query.limit) || 10; // Default limit is 10
        let skip = (page - 1) * limit;
        // we can update this filter
        let filter = {
            isDeleted: false
        }
        const data = await eventService.getAll(filter, skip, limit)
        return res.status(200).json({ success: true, data: data.data, count: data.counts })
    } catch (error) {
        let statusCode = error?.statusCode ?? 500
        return res.status(statusCode).json({ success: false, message: error.message })
    }
}
exports.deleteById = async (req, res) => {
    try {
        // we can update this filter
        const data = await eventService.deleteById(req.params.id)
        return res.status(200).json({ success: true, data })
    } catch (error) {
        let statusCode = error?.statusCode ?? 500
        return res.status(statusCode).json({ success: false, message: error.message })
    }
}
exports.getById = async (req, res) => {
    try {
        // we can update this filter
        const data = await eventService.getById(req.params.id)
        return res.status(200).json({ success: true, data })
    } catch (error) {
        let statusCode = error?.statusCode ?? 500
        return res.status(statusCode).json({ success: false, message: error.message })
    }
}
exports.updateById = async (req, res) => {
    try {
        // we can update this filter
        const data = await eventService.updateById(req.params.id, req.body)
        return res.status(200).json({ success: true, data })
    } catch (error) {
        let statusCode = error?.statusCode ?? 500
        return res.status(statusCode).json({ success: false, message: error.message })
    }
}