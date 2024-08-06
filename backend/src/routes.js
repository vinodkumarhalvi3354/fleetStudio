const express = require('express');
const { getCommitDiff } = require('./controllers');
const router = express.Router();

router.get('/repositories/:owner/:repository/commits/:oid', getCommitDiff);

module.exports = router;
