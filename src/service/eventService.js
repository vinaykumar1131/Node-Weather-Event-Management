const { eventModel } = require('../model/index');
const axios = require('axios');
require('dotenv').config();
exports.createEvent = async (eventData, userId) => {
    const { title, description, date, time, location } = eventData;
    const weatherData = await getWeatherDetails(location);
    return await eventModel.create({ title, description, date, time, location, weatherData, createdBy: userId, updatedBy: userId });
};

exports.getAll = async (filter, skip, limit) => {
    const eventData = await eventModel.find(filter).populate("createdBy").skip(skip).limit(limit);
    let counts = await eventModel.countDocuments(filter)
    return { counts, data: eventData }
};
exports.getById = async (id) => {
    return await eventModel.findById(id).populate("createdBy")
};
exports.updateById = async (id, data) => {
    const eventData = await eventModel.findById(id);
    if (data.location != eventData.location) {
        const weatherData = await getWeatherDetails(data.location);
        data.weatherData = weatherData
    }
    return await eventModel.findByIdAndUpdate(id, data)
};

exports.deleteById = async (id) => {
    return await eventModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true })
};

async function getWeatherDetails(location) {
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${process.env.WEATHER_API_KEY}&units=metric`;
    const response = await axios.get(
        url
    );
    return response.data;
}