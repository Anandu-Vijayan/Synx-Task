const User = require('../models/User');
const Organization = require('../models/Organization');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().populate('organization');
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate('organization');
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.createUser = async (req, res) => {
    const { name, email, password, role, organization } = req.body;
    try {
        const user = await User.create({ name, email, password, role, organization });
        const org = await Organization.findById(organization);
        org.users.push(user._id);
        await org.save();
        res.status(201).json({ success: true, data: user });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        const org = await Organization.findById(user.organization);
        org.users.pull(user._id);
        await org.save();
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
