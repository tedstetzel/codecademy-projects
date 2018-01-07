// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (request, indexNumber, presetArray) => {

  if(indexNumber > 3 || indexNumber < 0){
    return [404];
  }
if (request === 'GET' || request === 'PUT'){
  if (request === 'GET'){
    return [200, presets[indexNumber]];
  }
  if (request === 'PUT'){
    presets[indexNumber] = presetArray;
    return [200, presets[indexNumber]];
  }
}else{
  return [400];
}


};




// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
