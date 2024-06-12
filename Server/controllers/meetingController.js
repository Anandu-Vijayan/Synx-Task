const Meeting = require('../models/Meeting');

exports.scheduleMeeting = async (req, res) => {
    const { organizer, participants, time } = req.body;
    try {
        const meeting = await Meeting.create({ organizer, participants, time });
        res.status(201).json({ success: true, data: meeting });
        // Trigger webhook here if necessary
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.cancelMeeting = async (req, res) => {
    try {
        const meeting = await Meeting.findByIdAndUpdate(req.params.id, { canceled: true }, { new: true });
        res.status(200).json({ success: true, data: meeting });
        // Trigger webhook here if necessary
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.getMeetings = async (req, res) => {
    try {
        const meetings = await Meeting.find({ participants: req.user.id });
        res.status(200).json({ success: true, data: meetings });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
