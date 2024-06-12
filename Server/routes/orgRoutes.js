const express = require('express');
const {
    getAllOrgs,
    getOrg,
    createOrg,
    updateOrg,
    deleteOrg
} = require('../controllers/orgController');
const { protect} = require('../middleware/authMiddleware');
const { authorize } = require("../middleware/roleMiddleware");

const router = express.Router();

router.route('/')
    .get(protect, getAllOrgs)
    .post(protect, authorize('admin'), createOrg);

router.route('/:id')
    .get(protect, getOrg)
    .put(protect, authorize('admin'), updateOrg)
    .delete(protect, authorize('admin'), deleteOrg);

module.exports = router;
