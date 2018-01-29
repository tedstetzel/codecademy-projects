const express = require('express');
const minionRouter = express.Router();
const {createMeeting,
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase, } = require('./db.js');

//check if param is valid and make param available to minion routs





minionRouter.param('minionId', (req,res,next,id) => {
    const minion = getFromDatabaseById('minions', id)

    if (minion) {
        req.minion = minion;
        next();
    }else{
        res.status(404).send('minion not found');
    }
}); 



minionRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('minions'));

}); 

minionRouter.get('/:minionId', (req, res, next) => {
    res.send(req.minion);
  
});


// Update a minion
minionRouter.put('/:minionId', (req, res, next) => {
    const newMinion = req.body;
    updateInstanceInDatabase('minions', newMinion);
    res.status(200).send(newMinion);
});

//create a minion
minionRouter.post('/', (req, res, next) => {
    const newMinion = req.body;
    addToDatabase('minions', newMinion);
    res.status(201).send(newMinion);
});

//delete a minion
minionRouter.delete('/:minionId', (req, res, next) => {
    deleteFromDatabasebyId('minions', req.minion.id);
    res.status(204).send();
});



module.exports = minionRouter;