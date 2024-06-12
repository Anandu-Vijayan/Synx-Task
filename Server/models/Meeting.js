const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
    organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }],
    time: { type: Date, required: true },
    canceled: { type: Boolean, default: false }
});

module.exports = mongoose.model('Meeting', meetingSchema);
