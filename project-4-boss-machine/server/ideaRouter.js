const express = require('express');
const ideaRouter = express.Router();
const {createMeeting,
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase, } = require('./db.js');

const checkMillionDollarIdea = require('./checkMillionDollarIdea.js');


//check if param is valid and make param available to idea routs



ideaRouter.param('ideaId', (req,res,next,id) => { 
    const idea = getFromDatabaseById('ideas', id)

    if (idea) {
        req.idea = idea;
        next();
    }else{
        res.status(404).send('idea not found');
    }
}); 



ideaRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'));

}); 

ideaRouter.get('/:ideaId', (req, res, next) => {
    res.send(req.idea);
  
});


// Update a idea
ideaRouter.put('/:ideaId', (req, res, next) => {
    let newidea = req.body;
    updateInstanceInDatabase('ideas', newidea);
    res.status(200).send(newidea);
});

 

//create a idea
ideaRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
    const newidea = req.body;
    addToDatabase('ideas', newidea);
    res.status(201).send(newidea);
    
});




//delete a idea
ideaRouter.delete('/:ideaId', (req, res, next) => {
    deleteFromDatabasebyId('ideas', req.idea.id);
    res.status(204).send();
});



module.exports = ideaRouter;