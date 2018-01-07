// Drum Arrays
let kicks = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
let snares = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
let hiHats = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
let rideCymbals = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];

function toggleDrum (stringName, indexNumber){

if (indexNumber > 16 || indexNumber < 0){
	return;
}

	if (stringName === 'kicks'){
		if (kicks[indexNumber] === true){
			kicks[indexNumber] = false;
		}else if(kicks[indexNumber] === false){
			kicks[indexNumber] = true;
		}

	}else if (stringName === 'snares') {
		if (snares[indexNumber] === true){
			snares[indexNumber] = false;
		}else if(snares[indexNumber] === false){
			snares[indexNumber] = true;
		}
	}else if (stringName === 'hiHats') {
		if (hiHats[indexNumber] === true){
			hiHats[indexNumber] = false;
		}else if(hiHats[indexNumber] === false){
			hiHats[indexNumber] = true;
		}
	}else if (stringName === 'rideCymbals') {
		if (rideCymbals[indexNumber] === true){
			rideCymbals[indexNumber] = false;
		}else if(rideCymbals[indexNumber] === false){
			rideCymbals[indexNumber] = true;
		}
	}
}

function clear(clearStringName){
	if (!clearStringName){
		return
	}
	if (clearStringName === 'kicks'){
		for(i = 0; i < kicks.length; i++)
		kicks[i] = false;
	}else if (clearStringName === 'snares'){
		for(i = 0; i < snares.length; i++)
		snares[i] = false;
	}else if (clearStringName === 'hiHats'){
		for(i = 0; i < hiHats.length; i++)
		hiHats[i] = false;
	}else if (clearStringName === 'rideCymbals'){
				for(i = 0; i < rideCymbals.length; i++)
				rideCymbals[i] = false;
	}else{
	return;
}
}

const invert = (invertStringName) =>{
	if (!invertStringName){
		return
	}
	if (invertStringName === 'kicks'){
		for(i = 0; i < kicks.length; i++)
		kicks[i] = !kicks[i];
	}else if (invertStringName === 'snares'){
		for(i = 0; i < snares.length; i++)
		snares[i] = !snares[i];
	}else if (invertStringName === 'hiHats'){
		for(i = 0; i < hiHats.length; i++)
		hiHats[i] = !hiHats[i];
	}else if (invertStringName === 'rideCymbals'){
				for(i = 0; i < rideCymbals.length; i++)
		rideCymbals[i] = !rideCymbals[i];
	}else{
	return;
}
}
