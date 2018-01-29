const express = require('express');
const apiRouter = express.Router();

const minionRouter = require('./minionRouter.js');
apiRouter.use('/minions', minionRouter);

const ideaRouter = require('./ideaRouter.js');
apiRouter.use('/ideas', ideaRouter);

const meetingRouter = require('./meetingRouter.js');
apiRouter.use('/meetings', meetingRouter); 

module.exports = apiRouter;