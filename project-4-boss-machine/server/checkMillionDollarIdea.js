const checkMillionDollarIdea = (req, res, next) => {
    const numWeeks = req.body.numWeeks;
    const weeklyRevenue = req.body.weeklyRevenue;

    if(numWeeks * weeklyRevenue < 1000000 || !numWeeks || !weeklyRevenue || typeof numWeeks != 'number' || typeof weeklyRevenue != 'number'){
        res.status(400).send();
    }else{
        next();
    } 

 };

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
