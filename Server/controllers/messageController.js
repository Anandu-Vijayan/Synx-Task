const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
    const { sender, receiver, content } = req.body;
    try {
        const message = await Message.create({ sender, receiver, content });
        res.status(201).json({ success: true, data: message });
        // Trigger webhook here if necessary
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.getMessages = async (req, res) => {
    try {
        const messages = await Message.find({ $or: [{ sender: req.user.id }, { receiver: req.user.id }] });
        res.status(200).json({ success: true, data: messages });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
