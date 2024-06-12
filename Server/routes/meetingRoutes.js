const express = require('express');
const {
    scheduleMeeting,
    cancelMeeting,
    getMeetings
} = require('../controllers/meetingController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
    .post(protect, scheduleMeeting)
    .get(protect, getMeetings);

router.route('/:id')
    .put(protect, cancelMeeting);

module.exports = router;
