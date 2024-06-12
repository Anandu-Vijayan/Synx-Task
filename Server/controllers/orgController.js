const Organization = require('../models/Organization');

exports.getAllOrgs = async (req, res) => {
    try {
        const orgs = await Organization.find().populate('users');
        res.status(200).json({ success: true, data: orgs });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.getOrg = async (req, res) => {
    try {
        const org = await Organization.findById(req.params.id).populate('users');
        res.status(200).json({ success: true, data: org });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.createOrg = async (req, res) => {
    try {
        const org = await Organization.create(req.body);
        res.status(201).json({ success: true, data: org });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.updateOrg = async (req, res) => {
    try {
        const org = await Organization.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        res.status(200).json({ success: true, data: org });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.deleteOrg = async (req, res) => {
    try {
        await Organization.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
