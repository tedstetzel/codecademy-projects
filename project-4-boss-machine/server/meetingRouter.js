const express = require('express');
const meetingRouter = express.Router();
const {createMeeting,
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase, } = require('./db.js');

//check if param is valid and make param available to meeting routs

 

meetingRouter.param('meetingId', (req,res,next,id) => {
    const meeting = getFromDatabaseById('meetings', id)

    if (meeting) {
        req.meeting = meeting;
        next();
    }else{
        res.status(404).send('meeting not found');
    }
});  



meetingRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'));
}); 

//create a meeting 

meetingRouter.post('/', (req, res, next) => {
  const newMeeting = createMeeting();

  addToDatabase ('meetings', newMeeting)
  res.status(201).send(newMeeting); 
});

 

//delete all meetings
meetingRouter.delete('/', (req, res, next) => {
    deleteAllFromDatabase('meetings');
    res.status(204).send();
});



module.exports = meetingRouter;