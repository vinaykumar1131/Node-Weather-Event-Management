const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    date: { type: String, required: false },
    time: { type: String, required: false },
    location: { type: String, required: true },
    weatherData: mongoose.Schema.Types.Mixed,
    isDeleted: { type: Boolean, default: false },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
},
    { timestamps: true });

module.exports = mongoose.model('Event', EventSchema);
